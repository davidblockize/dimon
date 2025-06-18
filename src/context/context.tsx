// ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

// Define the shape of the context value
interface ThemeContextType {
  theme: string | boolean;
  toggleTheme: () => void;
}

// Create a context for the theme with a default value
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

// Create a provider component
export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  // Get the theme from localStorage (if any)
  const storedTheme = localStorage.getItem('theme') || true;
  
  const [theme, setTheme] = useState(storedTheme);

  // Update the body class based on the theme
  useEffect(() => {
    document.body.className = String(theme); // Adds 'light' or 'dark' class to the body
    localStorage.setItem('theme', String(theme)); // Save the theme in localStorage
  }, [theme]);

  // Toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === true ? false : true));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to use the theme context easily
export const useTheme = () => React.useContext(ThemeContext);

export default ThemeContext;
