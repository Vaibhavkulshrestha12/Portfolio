import { useThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  const { theme, toggleTheme } = useThemeContext();
  return { theme, toggleTheme };
};