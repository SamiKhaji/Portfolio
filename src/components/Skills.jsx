import './skills.css'
import htmlicon from '../assets/html-icon.png'
import cssicon from '../assets/css-icon.svg'
import ricon from '../assets/react-icon.png'
import pyicon from '../assets/python.png'
import cpp from '../assets/cpp.png'
import java from '../assets/java.svg'
import mysql from '../assets/mysql.png'
import tf from '../assets/tf.svg'
import sk from '../assets/sk.png'
import gh from '../assets/git.png'
import php from '../assets/php.png'
import sl from "../assets/slit.svg"
const skills = [
    { name: "HTML 5", icon: htmlicon }, // Replace with your icon paths
    { name: "CSS 3", icon: cssicon },
    { name: "React", icon: ricon },
    { name: "Python", icon: pyicon },
    { name: "CPP", icon: cpp },
    { name: "MySQL", icon: mysql },
    { name: "Java", icon: java }, // Replace with your icon paths
    { name: "TensorFlow", icon: tf },
    { name: "Scikit-Learn", icon: sk },
    { name: "StreamLit", icon: sl },
    { name: "PHP", icon: php },
    { name: "Git", icon: gh },
  ];

export default function Skills({isNightMode}){
    return (
        <section className={`skills-section ${isNightMode ? 'night-mode' : 'day-mode'}`}>
          <h2 className="skills-title">My Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>
      );
}