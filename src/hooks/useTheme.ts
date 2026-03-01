import { useEffect } from 'react';

export const useTheme = () => {
  useEffect(() => {
    // Always dark mode — light theme removed
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return { theme: 'dark' as const };
};