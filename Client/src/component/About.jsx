import "./About.css";
import { useRef } from "react";

function About() {
  const cardRef = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardRef.current[index];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 12;
    const rotateY = (x - rect.width / 2) / 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const reset = (index) => {
    cardRef.current[index].style.transform = `rotateX(0) rotateY(0)`;
  };

  const cards = [
    {
      title: "👨‍💻 About Me",
      text: "Aspiring Software Developer focused on MERN stack and modern UI."
    },
    {
      title: "🚀 What I Do",
      text: "Build full-stack apps, APIs and responsive UI."
    },
    {
      title: "🎯 Goal",
      text: "Become a professional developer and work on scalable apps."
    }
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>

      {/* Cards */}
      <div className="about-grid">
        {cards.map((card, i) => (
          <div
            key={i}
            className="about-card"
            ref={(el) => (cardRef.current[i] = el)}
            onMouseMove={(e) => handleMouseMove(e, i)}
            onMouseLeave={() => reset(i)}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="skills-section">
        <h2>Skills</h2>

        <div className="skill">
          <span>React</span>
          <div className="progress">
            <div className="bar react"></div>
          </div>
        </div>

        <div className="skill">
          <span>Node.js</span>
          <div className="progress">
            <div className="bar node"></div>
          </div>
        </div>

        <div className="skill">
          <span>MongoDB</span>
          <div className="progress">
            <div className="bar mongo"></div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="social-section">
        <h2>Connect With Me</h2>

        <div className="social-icons">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="social-card"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/akshay-jadhav-840997389/details/"
            target="_blank"
            rel="noreferrer"
            className="social-card"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://share.google/9yw774pSO2vANgHxV"
            target="_blank"
            rel="noreferrer"
            className="social-card"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg" />
            <span>LeetCode</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;