import React, { useRef } from "react";
import BallCanvas from "./Ball";
import "./skills.css";  
import Certificate from "./certicate";

const skills = [
  { name: "HTML", image: "/html.png" },
  { name: "CSS", image: "/css.png" },
  { name: "JavaScript", image: "/javascript.png" },
  { name: "Python", image: "/python.png" },
  { name: "Django", image: "/djangoproject.svg" },
  { name: "Data Structures", image: "/data-structure.png" },
  { name: "Algorithms", image: "/algorithms.png" },
  { name: "GitHub", image: "/github.png" },
  { name: "Bootstrap", image: "/bootstrap.svg" },
  { name: "API", image: "/api.png" },
  { name: "SQL", image: "/sql.png" },
  { name: "React", image: "/react.png" },
];

const Skills = () => {
  const certificateRef = useRef(null);

  const scrollToCertificate = () => {
    certificateRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div>
      <div className="skills-page">
        <div className="skills-container">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-item"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <BallCanvas icon={skill.image} />
              </div>
            ))}
          </div>
        </div>
        {/* Down arrow OUTSIDE the skills container */}
      </div>
       <div className="down-arrow-container" onClick={scrollToCertificate}>
    <span className="down-arrow">&#8595;</span>
  </div>
      </div>
      {/* Certificate Section */}
      <div ref={certificateRef}>
        <Certificate />
      </div>
    </div>
  );
};

export default Skills;
