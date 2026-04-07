import { useRef, useEffect } from "react";
import "./Home.css";
import photo from "../assets/photo.png";
import { Link } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    let scrollTimeout = null;

    const handleScroll = () => {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.playbackRate = 2;
          videoRef.current.play().catch(console.error);
        }

        if (scrollTimeout) clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }, 150);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="home-container">
      <video
        ref={videoRef}
        className="bg-video"
        src="/bg-video.mp4"
        muted
        loop
        playsInline
      />
      <div className="video-overlay"></div>

      {/* 💼 Hero Section */}
      <div id="home" className="hero-card">
        <div className="img-wrapper">
          <img src={photo} alt="profile" className="profile-img" />
        </div>

        <h1 className="name">Akshay A Jadhav</h1>

        <p className="title">
          <span className="role-text">
            Aspiring Software Developer
          </span>
        </p>

        <div className="buttons">
          <button 
            className="btn primary" 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Hire Me
          </button>

          <button 
            className="btn secondary"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </button>
        </div>
      </div>

      {/* 📄 Sections */}
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Project /></div>
      <div id="contact"><Contact /></div>

    </div>
  );
}

export default Home;