import React from "react";
import Educa from "./Educa";
import CodingProfiles from "./CodingProfiles";
import "./combinedComponent.css";

export default function CombinedComponent() {
  return (
    <div className="combined-container">
      <div className="education-container">
        <Educa />
      </div>
      <div className="profiles-container">
        <CodingProfiles />
      </div>
    </div>
  );
}
