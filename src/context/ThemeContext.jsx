import { createContext, useState, useEffect, useContext } from "react";

// Create the ThemeContext
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

// ThemeProvider component to manage theme state
// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Apply the theme to the <html> element
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme); // Persist the theme in localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);