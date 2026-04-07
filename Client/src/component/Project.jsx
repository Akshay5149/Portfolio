import "./Project.css";

function Project() {
  const projects = [
    {
      title: "Expense Tracker",
      desc: "Track income & expenses with analytics, filters, and charts. Helps manage budget efficiently.",
      tech: "React, Node.js, Express, MongoDB",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f"
    },
    {
      title: "Tech Talent Hub",
      desc: "ATS-based job platform with resume scoring, job matching, and recommendations.",
      tech: "React, Node.js, Express, Gemini",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Codies Mess",
      desc: "Mess management system for menu updates, ratings, and secure authentication.",
      tech: "React, Node.js, MongoDB, JWT",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    }
  ];

  return (
    <section className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            
            <div className="card-img">
              <img src={proj.img} alt={proj.title} />
            </div>

            <div className="card-content">
              <h2>{proj.title}</h2>
              <p>{proj.desc}</p>
              <span>{proj.tech}</span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;