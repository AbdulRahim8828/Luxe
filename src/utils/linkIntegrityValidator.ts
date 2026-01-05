/**
 * Luxe Brand Internal Link Integrity Validator
 * Validates that all internal links point to correct new URLs after rebrand
 */

import { brandConfig } from '../config/brand';

export interface LinkValidationResult {
  isValid: boolean;
  url: string;
  issues: string[];
  warnings: string[];
  suggestions: string[];
}

export interface LinkIntegrityReport {
  totalLinks: number;
  validLinks: number;
  invalidLinks: number;
  results: LinkValidationResult[];
  summary: {
    oldBrandReferences: number;
    brokenLinks: number;
    suspiciousLinks: number;
    redirectNeeded: number;
  };
}

/**
 * Patterns that indicate old brand references in URLs
 */
const OLD_BRAND_PATTERNS = [
  'a1-furniture',
  'a1furniture',
  'a1_furniture',
  'a1-polish',
  'a1polish',
  'a1_polish',
  'a1-polishing',
  'a1polishing',
  'a1_polishing'
];

/**
 * Patterns that indicate suspicious or broken links
 */
const SUSPICIOUS_PATTERNS = [
  'undefined',
  'null',
  'localhost',
  'example.com',
  'test.com',
  'placeholder'
];

/**
 * Valid Luxe URL patterns
 */
const LUXE_URL_PATTERNS = [
  '/services/',
  '/locations/',
  '/blog/',
  '/about',
  '/contact',
  '/gallery',
  '/testimonials',
  '/'
];

/**
 * Extract all internal links from HTML content
 */
function extractInternalLinks(htmlContent: string): string[] {
  const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
  const links: string[] = [];
  let match;

  while ((match = linkRegex.exec(htmlContent)) !== null) {
    const href = match[1];
    
    // Only include internal links (relative URLs or same domain)
    if (href.startsWith('/') || href.startsWith('#') || href.startsWith('?')) {
      links.push(href);
    } else if (href.includes('luxewoodenfurniturepolishing.com') || 
               href.includes('localhost') || 
               href.includes('127.0.0.1')) {
      // Extract path from full URLs
      try {
        const url = new URL(href);
        links.push(url.pathname + url.search + url.hash);
      } catch {
        links.push(href); // Keep original if URL parsing fails
      }
    }
  }

  return Array.from(new Set(links)); // Remove duplicates
}

/**
 * Extract links from JavaScript/TypeScript files (React Router, etc.)
 */
function extractLinksFromCode(codeContent: string): string[] {
  const patterns = [
    // React Router Link components
    /<Link[^>]+to=["']([^"']+)["'][^>]*>/gi,
    // Navigate function calls
    /navigate\(["']([^"']+)["']\)/gi,
    // href attributes in JSX
    /href=["']([^"']+)["']/gi,
    // URL constants (but not in redirect mappings)
    /(?<!oldUrl:\s*)url:\s*["']([^"']+)["']/gi,
    // Path constants (but not in redirect mappings)
    /(?<!oldUrl:\s*)path:\s*["']([^"']+)["']/gi,
    // newUrl in redirect mappings (these should be valid)
    /newUrl:\s*["']([^"']+)["']/gi
  ];

  const links: string[] = [];

  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(codeContent)) !== null) {
      const link = match[1];
      if (link.startsWith('/') || link.startsWith('#')) {
        links.push(link);
      }
    }
  });

  // Skip oldUrl entries in redirect mappings as they're supposed to contain old brand references
  const filteredLinks = links.filter(link => {
    // Check if this link appears in an oldUrl context
    const oldUrlPattern = new RegExp(`oldUrl:\\s*["']${link.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'i');
    return !oldUrlPattern.test(codeContent);
  });

  return Array.from(new Set(filteredLinks));
}

/**
 * Validate a single internal link
 */
function validateInternalLink(url: string): LinkValidationResult {
  const result: LinkValidationResult = {
    isValid: true,
    url,
    issues: [],
    warnings: [],
    suggestions: []
  };

  // Check for old brand references
  const hasOldBrandReference = OLD_BRAND_PATTERNS.some(pattern => 
    url.toLowerCase().includes(pattern)
  );

  if (hasOldBrandReference) {
    result.isValid = false;
    result.issues.push('Contains old brand reference (A1 Furniture Polish)');
    result.suggestions.push('Update URL to use new Luxe branding');
  }

  // Check for suspicious patterns
  const hasSuspiciousPattern = SUSPICIOUS_PATTERNS.some(pattern => 
    url.toLowerCase().includes(pattern)
  );

  if (hasSuspiciousPattern) {
    result.isValid = false;
    result.issues.push('Contains suspicious pattern that may indicate broken link');
    result.suggestions.push('Review and fix the URL');
  }

  // Check for empty or invalid URLs
  if (!url || url.trim() === '' || url === '#' || url === '/' && url.length === 1) {
    result.warnings.push('Empty or minimal URL - may need review');
  }

  // Check if URL follows Luxe patterns
  const followsLuxePattern = LUXE_URL_PATTERNS.some(pattern => 
    url.startsWith(pattern)
  );

  if (!followsLuxePattern && !url.startsWith('#') && !url.startsWith('?')) {
    result.warnings.push('URL does not follow standard Luxe URL patterns');
    result.suggestions.push('Consider organizing under /services/, /locations/, or /blog/');
  }

  // Check for proper URL formatting
  if (url.includes(' ') || url.includes('%20')) {
    result.issues.push('URL contains spaces - should use hyphens');
    result.suggestions.push('Replace spaces with hyphens for SEO-friendly URLs');
    result.isValid = false;
  }

  // Check for uppercase in URLs (should be lowercase)
  if (url !== url.toLowerCase() && !url.startsWith('#')) {
    result.warnings.push('URL contains uppercase letters - should be lowercase');
    result.suggestions.push('Convert URL to lowercase for consistency');
  }

  // Check for double slashes
  if (url.includes('//') && !url.startsWith('//')) {
    result.issues.push('URL contains double slashes');
    result.suggestions.push('Remove extra slashes from URL');
    result.isValid = false;
  }

  return result;
}

/**
 * Validate all internal links in content
 */
export function validateInternalLinks(content: string, contentType: 'html' | 'code' = 'html'): LinkIntegrityReport {
  const links = contentType === 'html' 
    ? extractInternalLinks(content)
    : extractLinksFromCode(content);

  const results = links.map(validateInternalLink);
  
  const summary = {
    oldBrandReferences: 0,
    brokenLinks: 0,
    suspiciousLinks: 0,
    redirectNeeded: 0
  };

  results.forEach(result => {
    if (result.issues.some(issue => issue.includes('old brand reference'))) {
      summary.oldBrandReferences++;
    }
    if (result.issues.some(issue => issue.includes('suspicious pattern'))) {
      summary.suspiciousLinks++;
    }
    if (result.issues.some(issue => issue.includes('spaces') || issue.includes('double slashes'))) {
      summary.brokenLinks++;
    }
    if (result.suggestions.some(suggestion => suggestion.includes('redirect'))) {
      summary.redirectNeeded++;
    }
  });

  return {
    totalLinks: links.length,
    validLinks: results.filter(r => r.isValid).length,
    invalidLinks: results.filter(r => !r.isValid).length,
    results,
    summary
  };
}

/**
 * Generate a comprehensive link integrity report
 */
export function generateLinkIntegrityReport(reports: Array<{
  file: string;
  report: LinkIntegrityReport;
}>): string {
  const totalLinks = reports.reduce((sum, r) => sum + r.report.totalLinks, 0);
  const totalValid = reports.reduce((sum, r) => sum + r.report.validLinks, 0);
  const totalInvalid = reports.reduce((sum, r) => sum + r.report.invalidLinks, 0);

  let output = '# Luxe Brand Internal Link Integrity Report\n\n';
  
  output += '## Summary\n\n';
  output += `- **Total Links Analyzed**: ${totalLinks}\n`;
  output += `- **Valid Links**: ${totalValid} (${((totalValid / totalLinks) * 100).toFixed(1)}%)\n`;
  output += `- **Invalid Links**: ${totalInvalid} (${((totalInvalid / totalLinks) * 100).toFixed(1)}%)\n`;
  output += `- **Files Analyzed**: ${reports.length}\n\n`;

  // Overall issues summary
  const overallSummary = reports.reduce((acc, r) => ({
    oldBrandReferences: acc.oldBrandReferences + r.report.summary.oldBrandReferences,
    brokenLinks: acc.brokenLinks + r.report.summary.brokenLinks,
    suspiciousLinks: acc.suspiciousLinks + r.report.summary.suspiciousLinks,
    redirectNeeded: acc.redirectNeeded + r.report.summary.redirectNeeded
  }), { oldBrandReferences: 0, brokenLinks: 0, suspiciousLinks: 0, redirectNeeded: 0 });

  output += '## Issues Breakdown\n\n';
  output += `- **Old Brand References**: ${overallSummary.oldBrandReferences}\n`;
  output += `- **Broken Links**: ${overallSummary.brokenLinks}\n`;
  output += `- **Suspicious Links**: ${overallSummary.suspiciousLinks}\n`;
  output += `- **Redirects Needed**: ${overallSummary.redirectNeeded}\n\n`;

  // File-by-file analysis
  output += '## File Analysis\n\n';
  
  reports.forEach(({ file, report }) => {
    if (report.invalidLinks > 0) {
      output += `### ❌ ${file}\n`;
      output += `- Links: ${report.totalLinks} (${report.invalidLinks} invalid)\n`;
      
      const invalidResults = report.results.filter(r => !r.isValid);
      invalidResults.forEach(result => {
        output += `\n**URL**: \`${result.url}\`\n`;
        result.issues.forEach(issue => output += `- ❌ ${issue}\n`);
        result.suggestions.forEach(suggestion => output += `- 💡 ${suggestion}\n`);
      });
      output += '\n';
    } else {
      output += `### ✅ ${file}\n`;
      output += `- Links: ${report.totalLinks} (all valid)\n\n`;
    }
  });

  // Recommendations
  output += '## Recommendations\n\n';
  
  if (overallSummary.oldBrandReferences > 0) {
    output += '### 🔄 Brand Migration\n';
    output += '- Update all URLs containing old brand references\n';
    output += '- Set up 301 redirects from old URLs to new Luxe URLs\n';
    output += '- Update internal link references in content\n\n';
  }

  if (overallSummary.brokenLinks > 0) {
    output += '### 🔧 Fix Broken Links\n';
    output += '- Remove spaces and special characters from URLs\n';
    output += '- Fix double slashes and malformed URLs\n';
    output += '- Ensure all URLs follow proper formatting\n\n';
  }

  output += '### 📋 Best Practices\n';
  output += '- Use lowercase URLs with hyphens for word separation\n';
  output += '- Follow consistent URL patterns (/services/, /locations/, /blog/)\n';
  output += '- Implement proper 301 redirects for changed URLs\n';
  output += '- Regularly validate internal links after content updates\n';

  return output;
}

/**
 * Get suggested redirect mappings for old brand URLs
 */
export function generateRedirectMappings(invalidLinks: string[]): Array<{
  from: string;
  to: string;
  reason: string;
}> {
  const redirects: Array<{ from: string; to: string; reason: string }> = [];

  invalidLinks.forEach(link => {
    if (OLD_BRAND_PATTERNS.some(pattern => link.toLowerCase().includes(pattern))) {
      // Generate new Luxe URL
      let newUrl = link;
      
      // Replace old brand patterns
      OLD_BRAND_PATTERNS.forEach(pattern => {
        const regex = new RegExp(pattern, 'gi');
        newUrl = newUrl.replace(regex, 'luxe-wooden-furniture-polishing');
      });

      redirects.push({
        from: link,
        to: newUrl,
        reason: 'Old brand reference updated to Luxe branding'
      });
    }
  });

  return redirects;
}