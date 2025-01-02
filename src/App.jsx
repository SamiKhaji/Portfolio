import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CombinedComponent from './components/CombinedComponent';
import Projects from './components/Projects';
import './App.css';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'; // Import MUI ThemeProvider
import Skills from './components/Skills';
import Contact from './components/Contact';

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
  useEffect(() => {
    // Add the Google Analytics script dynamically
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-HK5M0QXJP4";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-HK5M0QXJP4');
    `;
    document.head.appendChild(script2);
  }, []);
  return (
    <ThemeProvider theme={isNightMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* This ensures the global styles (background, text color) are applied */}
      <div>
        <Header isNightMode={isNightMode} toggleNightMode={toggleNightMode} />
        <Home isNightMode={isNightMode}/>
        <CombinedComponent isNightMode={isNightMode}/>
        <Skills isNightMode={isNightMode}/>
        <Projects isNightMode={isNightMode}/>
        <Contact  isNightMode={isNightMode}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
