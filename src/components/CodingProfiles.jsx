import React from "react";
import "./codingProfiles.css";

// Import logos
import gfgLogo from "../assets/gfgLogo.png";
import leetcodeLogo from "../assets/leetcodeLogo.png";
import githubLogo from "../assets/githubLogo.png";
import linkedinLogo from "../assets/linkedin.png";

export default function CodingProfiles() {
  const profiles = [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mahammadsami/",
      logo: linkedinLogo,
    },
    {
      id: 2,
      name: "GitHub",
      link: "https://github.com/SamiKhaji",
      logo: githubLogo,
    },
    {
      id: 3,
      name: "LeetCode",
      link: "https://leetcode.com/u/KhajiSami2004/",
      logo: leetcodeLogo,
    },
    {
      id: 4,
      name: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/user/kmahammadtct7/",
      logo: gfgLogo,
    },
  ];

  return (
    <section className="professional-profiles">
      <h2>Professional Profiles</h2>
      <div className="profiles-container">
        {profiles.map((profile) => (
          <div className="profile" key={profile.id}>
            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={profile.logo} alt={profile.name} />
              <p className="capt">{profile.name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
