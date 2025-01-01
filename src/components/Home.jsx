import sami from "../assets/samiimg.png";
import "./home.css";
import React, { useState, useEffect } from "react";


export default function Home({isNightMode}) {
  const texts = [
    "Software Developer",
    "ML Engineer",
    "Data Analyst",
    "Tech Enthusiast",
    "Researcher",
  ];
  const [currentText, setCurrentText] = useState(texts[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check if the screen is mobile size

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 3000);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check window size on resize
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the interval and event listener on component unmount
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [texts]);

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1G8of5mwXeBMrzjbbv-kDbjGTXWAn0U0q/view?usp=sharing",
      "_blank"
    );
  };
  

  return (
    <main id="home" className={`home ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <div className={`home-container ${isMobile ? "mobile" : ""}`}>
        {/* Image comes first for mobile, followed by text */}
        <div className="profile-pic">
          <img src={sami} alt="Mahammad Sami Khaji" />
        </div>

        <section className="intro">
          <h2 className="welcome">Welcome to my portfolio website!</h2>
          <h1 className="hero">
            Hey folks, I'm <h className="hero2">{currentText}</h> 
          </h1>
          <h2 className="aboutme">
    I am Mahammad Sami Khaji, a Software Developer with expertise in AI, Machine Learning, and Full-Stack Development, dedicated to crafting innovative tech solutions.
</h2>

          <div className="buttons">
            <button className="quote-btn" onClick={handleResumeClick}>
              View My Resume
            </button>
            <button className="quote-btn">Connect</button>
          </div>
        </section>
      </div>
    </main>
  );
}
