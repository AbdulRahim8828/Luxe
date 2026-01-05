#!/usr/bin/env tsx

/**
 * Luxe Brand Internal Link Integrity Validation Script
 * Validates that all internal links point to correct new URLs after rebrand
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { validateInternalLinks, generateLinkIntegrityReport, generateRedirectMappings } from '../src/utils/linkIntegrityValidator';

interface FileAnalysis {
  file: string;
  report: any;
}

async function analyzeFile(filePath: string): Promise<FileAnalysis | null> {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const extension = path.extname(filePath).toLowerCase();
    
    let contentType: 'html' | 'code' = 'code';
    
    // Determine content type
    if (extension === '.html' || content.includes('<html') || content.includes('<!DOCTYPE')) {
      contentType = 'html';
    }

    const report = validateInternalLinks(content, contentType);
    
    // Only return files with links
    if (report.totalLinks > 0) {
      return {
        file: path.relative(process.cwd(), filePath),
        report
      };
    }
    
    return null;
  } catch (error) {
    console.warn(`⚠️  Could not analyze ${filePath}:`, error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}

async function main() {
  console.log('🔍 Luxe Brand Internal Link Integrity Validation\n');
  console.log('Analyzing internal links across the codebase...\n');

  try {
    // Define file patterns to analyze
    const patterns = [
      'src/**/*.{ts,tsx,js,jsx}',
      'src/**/*.html',
      'public/**/*.html',
      '*.html',
      'scripts/**/*.{ts,js}',
      'blog/**/*.{md,tsx,ts}',
      '!node_modules/**',
      '!dist/**',
      '!build/**',
      '!.git/**'
    ];

    console.log('📁 Scanning files...');
    
    const allFiles: string[] = [];
    for (const pattern of patterns) {
      const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**', 'build/**'] });
      allFiles.push(...files);
    }

    const uniqueFiles = Array.from(new Set(allFiles));
    console.log(`Found ${uniqueFiles.length} files to analyze\n`);

    // Analyze files
    console.log('🔍 Analyzing internal links...\n');
    
    const analyses: FileAnalysis[] = [];
    let processedCount = 0;

    for (const file of uniqueFiles) {
      const analysis = await analyzeFile(file);
      if (analysis) {
        analyses.push(analysis);
      }
      
      processedCount++;
      if (processedCount % 50 === 0) {
        console.log(`Processed ${processedCount}/${uniqueFiles.length} files...`);
      }
    }

    console.log(`\n✅ Analysis complete! Found links in ${analyses.length} files\n`);

    // Generate comprehensive report
    const report = generateLinkIntegrityReport(analyses);
    
    // Display summary
    const totalLinks = analyses.reduce((sum, a) => sum + a.report.totalLinks, 0);
    const totalValid = analyses.reduce((sum, a) => sum + a.report.validLinks, 0);
    const totalInvalid = analyses.reduce((sum, a) => sum + a.report.invalidLinks, 0);

    console.log('📊 SUMMARY');
    console.log('='.repeat(50));
    console.log(`Total Links Found: ${totalLinks}`);
    console.log(`Valid Links: ${totalValid} (${((totalValid / totalLinks) * 100).toFixed(1)}%)`);
    console.log(`Invalid Links: ${totalInvalid} (${((totalInvalid / totalLinks) * 100).toFixed(1)}%)`);
    console.log(`Files with Links: ${analyses.length}`);
    console.log('='.repeat(50));

    // Show files with issues
    const filesWithIssues = analyses.filter(a => a.report.invalidLinks > 0);
    
    if (filesWithIssues.length > 0) {
      console.log(`\n❌ FILES WITH LINK ISSUES (${filesWithIssues.length}):\n`);
      
      filesWithIssues.slice(0, 10).forEach((analysis, index) => {
        console.log(`${index + 1}. ${analysis.file}`);
        console.log(`   Links: ${analysis.report.totalLinks} (${analysis.report.invalidLinks} invalid)`);
        
        // Show first few invalid links
        const invalidLinks = analysis.report.results.filter((r: any) => !r.isValid);
        invalidLinks.slice(0, 3).forEach((result: any) => {
          console.log(`   ❌ ${result.url}`);
          result.issues.slice(0, 1).forEach((issue: string) => {
            console.log(`      - ${issue}`);
          });
        });
        
        if (invalidLinks.length > 3) {
          console.log(`   ... and ${invalidLinks.length - 3} more invalid links`);
        }
        console.log('');
      });

      if (filesWithIssues.length > 10) {
        console.log(`... and ${filesWithIssues.length - 10} more files with issues\n`);
      }
    } else {
      console.log('\n✅ All internal links are valid!\n');
    }

    // Generate redirect mappings for old brand URLs
    const allInvalidLinks = analyses.flatMap(a => 
      a.report.results.filter((r: any) => !r.isValid).map((r: any) => r.url)
    );
    
    const redirectMappings = generateRedirectMappings(allInvalidLinks);
    
    if (redirectMappings.length > 0) {
      console.log(`\n🔄 SUGGESTED REDIRECTS (${redirectMappings.length}):\n`);
      redirectMappings.slice(0, 10).forEach((mapping, index) => {
        console.log(`${index + 1}. ${mapping.from} → ${mapping.to}`);
        console.log(`   Reason: ${mapping.reason}\n`);
      });
      
      if (redirectMappings.length > 10) {
        console.log(`... and ${redirectMappings.length - 10} more redirects needed\n`);
      }
    }

    // Save detailed report to file
    const reportPath = 'link-integrity-report.md';
    fs.writeFileSync(reportPath, report);
    console.log(`📄 Detailed report saved to: ${reportPath}\n`);

    // Save redirect mappings to file
    if (redirectMappings.length > 0) {
      const redirectsPath = 'suggested-redirects.json';
      fs.writeFileSync(redirectsPath, JSON.stringify(redirectMappings, null, 2));
      console.log(`🔄 Redirect mappings saved to: ${redirectsPath}\n`);
    }

    // Final recommendations
    console.log('📋 RECOMMENDATIONS:\n');
    
    if (totalInvalid > 0) {
      console.log('1. 🔧 Fix invalid internal links identified in the report');
      console.log('2. 🔄 Implement suggested redirects for old brand URLs');
      console.log('3. 📝 Update content to use new Luxe branding in URLs');
      console.log('4. ✅ Re-run this validation after making changes');
    } else {
      console.log('✅ All internal links are valid - great job!');
      console.log('📋 Continue monitoring links after content updates');
    }

    console.log('\n🎉 Link integrity validation complete!\n');

    // Exit with appropriate code
    process.exit(totalInvalid > 0 ? 1 : 0);

  } catch (error) {
    console.error('❌ Error during link integrity validation:', error);
    process.exit(1);
  }
}

// Run the script
main();