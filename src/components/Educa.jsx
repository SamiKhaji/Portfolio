import React, { useState } from "react";
import "./educa.css";

export default function Educa({isNightMode}) {
  const [selectedLevel, setSelectedLevel] = useState("BTech");

  const educationDetails = {
    BTech: {
      title: "Amrita Vishwa Vidyapeetham",
      role: "Bachelor’s of Technology in Computer Science and Engineering",
      duration: "July 2021 - July 2025",
      gpa: "GPA: 7.78/10",
    },
    twelfth: {
      title: "Narayana Junior College",
      role: "MPC - Senior Secondary",
      duration: "June 2019 - March 2021",
      gpa: "Percentage: 94%",
    },
    tenth: {
      title: "Montessori High School",
      role: "Secondary School",
      duration: "July 2015 - March 2019",
      gpa: "GPA: 10/10",
    },
  };

  return (
    <div id="education" className={`education-journey ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <h2 className="education-heading">Education</h2>
      <div className="circle-container">
        <div
          className={`circle ${selectedLevel === "BTech" ? "active" : ""}`}
          onClick={() => setSelectedLevel("BTech")}
        >
          UG
        </div>
        <div
          className={`circle ${selectedLevel === "twelfth" ? "active" : ""}`}
          onClick={() => setSelectedLevel("twelfth")}
        >
          12th
        </div>
        <div
          className={"circle " + (selectedLevel === "tenth" ? "active" : "")}
          onClick={() => setSelectedLevel("tenth")}
        >
          10th
        </div>
      </div>

      <div className="details-box">
        <h3>{educationDetails[selectedLevel].title}</h3>
        <p className="role">{educationDetails[selectedLevel].role}</p>
        <p className="duration">{educationDetails[selectedLevel].duration}</p>
        <p className="gpa">{educationDetails[selectedLevel].gpa}</p>
      </div>
    </div>
  );
}
