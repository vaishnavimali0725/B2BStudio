import React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <div className="theme-pink-white">
      {children}
    </div>
  );
};

export default ThemeProvider;