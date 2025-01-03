'use client';

import { useState, useEffect } from 'react';

interface UseLoadingOptions {
  delay?: number;
  initialState?: boolean;
}

export const useLoading = ({ delay = 1000, initialState = true }: UseLoadingOptions = {}) => {
  const [isLoading, setIsLoading] = useState(initialState);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
}; 