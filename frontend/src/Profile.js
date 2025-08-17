import React from "react";
import "./profile.css";

const experiences = [
   {
    title: "Experience",
    icon: "/programmer.png",  // add icon path
    role: "Full stack intern",
    company: "TechnoRUCS",
    date: "Jun - July 2025",
    description: [
      "Developed responsive frontend components with React, enhancing user experience.",
      "Implemented RESTful APIs using Django for seamless frontend-backend integration.",
      "Maintained code quality with testing, code reviews, and Git version control.",
    ],
  },
  {
    title: "Education",
    icon: "/edu.png",
    company: "Aruani Engineering college",
    date: "2022 - 2026",
    description: ["Computer Science and Engineering", "cgpa - 8.5"],
  },
  {
    title: "Achievements",
    icon: "/troph.png",
    company: "Leetcode",
    description: [
      "Solved over 1000+ problems on Leetcode.",
      "Achieved global ranking in the top 27,000.",
    ],
    image: "/leet.png",
  },
  {
    company: "National Level Technical Symposium - Quasar'25",
    description: "I secured 2nd Prize at Quasar'25, for my Bus Tracking App",
    image: "/quasar.jpg",
  },
  {
    company: "IQube competition",
    description: "I won 1st prize in the IQube competition",
    image: "/icube.jpg",
  },
];

const Profile = () => {
  // To avoid repeating the title every item, let's only show it if it exists
  // and only on the first item with that title.
  const titlesShown = new Set();

  return (
    <div className="color">
    <div className="timeline-container">
      <div className="timeline-line"></div>
      <div className="horizontal-connector"></div>

      {experiences.map((exp, index) => {
        // Determine if title should be shown for this box
        const showTitle = exp.title && !titlesShown.has(exp.title);
        if (showTitle) titlesShown.add(exp.title);

        return (
  <div
    key={index}
    className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
  >
  {showTitle && (
  <div className="space">
    <div className="wooden-sign">
      {exp.icon && (
        <img
          src={exp.icon}
          alt={exp.title + " icon"}
          className="title-icon"
        />
      )}
      {exp.title}
    </div>
  </div>
)}
    <div className="content-box">
      {exp.role && <h4>{exp.role}</h4>}

      <h4>{exp.company}</h4>

      {exp.date && <span className="date">{exp.date}</span>}

      {Array.isArray(exp.description) ? (
        <ul>
          {exp.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      ) : (
        <p>{exp.description}</p>
      )}

      {exp.image && (
        <img
          src={exp.image}
          alt={exp.company + " image"}
          style={{ maxWidth: "100%", marginTop: "10px" }}
        />
      )}
    </div>
  </div>
);

      })}
    </div>
    </div>
  );
};

export default Profile;
