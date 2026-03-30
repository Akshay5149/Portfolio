import { useState } from "react";
import "./Skills.css";
import googlecloud from "../assets/Google Cloud.png";
import Linux from "../assets/Linux.png";
import Linux1 from "../assets/Linux1.png";
import AIbootcamp from "../assets/AIbootcamp.png";
import Data from "../assets/Data.png";
import javascript from "../assets/javascript.png";
import AlterTechSoft from "../assets/inter1.png";


function Skills() {
  const [category, setCategory] = useState("technical");
  const [active, setActive] = useState("frontend");
  const [selectedCert, setSelectedCert] = useState(null);

  const data = {
    technical: {
      frontend: [
        { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
      ],
      backend: [
        { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      ],
      tools: [
        { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "ChatGPT", img: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
        { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      ],
      certification: [
        { 
          name: "Generative AI Studio",
          img: googlecloud,
          short: "Certified in Google Cloud Generative AI solutions.", 
          details:"Completed Google Cloud's 'Introduction to Generative AI Studio' via Simplilearn. Gained expertise in prototyping and customizing GenAI models, including prompt engineering and model tuning on the Vertex AI platform."
        },
        { 
          name: "RDBMS PostgreSQL",
          img: Linux,
          short: "RDBMS PostgreSQL Certification Spoken Tutorial IIT Bombay",
          details: "Successfully completed RDBMS PostgreSQL training and examination organized by IIT Bombay, achieving a score of 97.50%."
        },
        { 
          name: "Linux Administration & Operations",
          img: Linux1,
          short: "IIT Bombay certified in Linux system fundamentals.",
          details: "Completed comprehensive Linux training through Spoken Tutorial, IIT Bombay. Mastered shell scripting, file system management, and user administration within a Unix-like environment."
        },
        { 
          name: "Artificial Intelligence Bootcamp", 
          img: AIbootcamp,
          short: "Advanced AI certification by C-DAC Pune and NASSCOM",
          details: "Participated in an intensive Artificial Intelligence bootcamp under the FutureSkills PRIME project. Gained hands-on exposure to AI methodologies and frameworks conducted by C-DAC Pune in association with MeitY"
        },
        { 
          name: "Introduction to Data Analytics",
          img: Data,
          short: "Certified in data-driven decision making and analysis.",
          details: "Completed a comprehensive program by Simplilearn SkillUp, gaining foundational knowledge in data visualization, statistical analysis, and the data lifecycle to drive business insights."
        },
        { 
          name: "JavaScript Professional",
          img: javascript,
          short: "6-month professional certification in JavaScript development.",
          details: "Completed an intensive 6-month professional course at VJTech Academy, mastering core JavaScript, ES6+ features, and asynchronous programming with outstanding performance."
        },
      ]
    },
    soft: [
      { name: "Communication" },
      { name: "Teamwork" },
      { name: "Problem Solving" },
      { name: "Time Management" },
      { name: "Adaptability" }
    ],

    internship: [
      {
        name: "Software Development Intern",
        img: AlterTechSoft,
        short: "Software Development Internship focusing on core engineering principles.",
        details: "Completed a professional internship at Alter TechSoft Pvt. Ltd. under the guidance of Project Management. Gained hands-on experience in software development lifecycles and technical problem-solving within a corporate environment."
      }
    ]
  };

  const technicalTabs = ["frontend", "backend", "tools", "certification"];

  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>

      {/* Category Tabs */}
      <div className="tabs">
        {["technical", "soft", "internship"].map((tab) => (
          <button
            key={tab}
            className={category === tab ? "tab active" : "tab"}
            onClick={() => {
              setCategory(tab);
              setActive("frontend");
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Sub Tabs for Technical */}
      {category === "technical" && (
        <div className="tabs sub-tabs">
          {technicalTabs.map((tab) => (
            <button
              key={tab}
              className={active === tab ? "tab active" : "tab"}
              onClick={() => setActive(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      {/* Skills Grid */}
      <div className="skills-grid">
        {category === "technical" && active !== "certification"
          ? data.technical[active].map((skill, i) => (
              <div className="skill-card" key={i}>
                <img src={skill.img} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))
          : category === "technical" && active === "certification"
          ? data.technical.certification.map((cert, i) => (
              <div
                className="skill-card certification"
                key={i}
                onClick={() => setSelectedCert(cert)}
              >
                <img src={cert.img} alt={cert.name} />
                <p>{cert.name}</p>
                <small>{cert.short}</small>
              </div>
            ))
          : category === "soft"
          ? data.soft.map((skill, i) => (
              <div className="skill-card soft" key={i}>
                <p>{skill.name}</p>
              </div>
            ))
          : category === "internship"
          ? data.internship.map((intern, i) => (
              <div
                className="skill-card certification"
                key={i}
                onClick={() => setSelectedCert(intern)}
              >
                <img src={intern.img} alt={intern.name} />
                <p>{intern.name}</p>
                <small>{intern.short}</small>
              </div>
            ))
          : null
        }
      </div>

      {/* Modal for Certification/Internship Details */}
      {selectedCert && (
        <div className="modal" onClick={() => setSelectedCert(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCert.img} alt={selectedCert.name} />
            <h2>{selectedCert.name}</h2>
            <p><strong>{selectedCert.short}</strong></p>
            <p>{selectedCert.details}</p>
            <button className="close-btn" onClick={() => setSelectedCert(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;