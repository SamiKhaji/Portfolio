import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CombinedComponent from './components/CombinedComponent';
import Projects from './components/Projects';
import './App.css';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'; // Import MUI ThemeProvider

function App() {
  const [isNightMode, setIsNightMode] = useState(true); // Track night mode state

  // Define MUI light and dark themes
  const lightTheme = createTheme({
    palette: {
      mode: 'light', // Light mode
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark', // Dark mode
    },
  });

  // Toggle night mode
  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  // Apply night mode on body using effect
  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add("night-mode");
    } else {
      document.body.classList.remove("night-mode");
    }
  }, [isNightMode]);

  return (
    <ThemeProvider theme={isNightMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* This ensures the global styles (background, text color) are applied */}
      <div>
        <Header isNightMode={isNightMode} toggleNightMode={toggleNightMode} />
        <Home isNightMode={isNightMode}/>
        <CombinedComponent isNightMode={isNightMode}/>
        <Projects isNightMode={isNightMode}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
