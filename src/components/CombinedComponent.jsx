import React from "react";
import Educa from "./Educa";
import CodingProfiles from "./CodingProfiles";
import "./combinedComponent.css";

export default function CombinedComponent({ isNightMode}) {
  return (
    <div className={`combined-container ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <div className="education-container">
        <Educa isNightMode={isNightMode}/>
      </div>
      <div className="profiles-container">
        <CodingProfiles isNightMode={isNightMode}/>
      </div>
    </div>
  );
}
