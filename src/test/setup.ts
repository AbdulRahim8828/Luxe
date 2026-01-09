// Test setup file for vitest
import { beforeEach, afterEach } from 'vitest';

// Global test setup
beforeEach(() => {
  // Reset any global state before each test
});

afterEach(() => {
  // Cleanup after each test
});

// Mock DOM APIs if needed
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  root: Element | null = null;
  rootMargin: string = '0px';
  thresholds: ReadonlyArray<number> = [];
  
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
} as any;