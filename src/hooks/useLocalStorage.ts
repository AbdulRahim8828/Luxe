import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Get from local storage then parse stored json or return initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`❌ Error loading localStorage key "${key}":`, error);
      // Clear corrupted data
      try {
        window.localStorage.removeItem(key);
      } catch (clearError) {
        console.error('Failed to clear corrupted localStorage:', clearError);
      }
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        try {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (storageError: any) {
          // Handle quota exceeded error
          if (storageError.name === 'QuotaExceededError' || storageError.code === 22) {
            console.error('❌ localStorage quota exceeded. Clearing old data...');
            // Try to clear some space
            try {
              window.localStorage.clear();
              window.localStorage.setItem(key, JSON.stringify(valueToStore));
              console.log('✅ localStorage cleared and data saved');
            } catch (retryError) {
              console.error('❌ Failed to save even after clearing:', retryError);
              // Show user-friendly error
              alert('Cart storage is full. Please clear your browser data or use a different browser.');
            }
          } else {
            throw storageError;
          }
        }
      }
    } catch (error) {
      console.error(`❌ Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}
