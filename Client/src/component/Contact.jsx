import { useState } from "react";
import axios from "axios";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import photo from "../assets/photo.png";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);
      if (response.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="contact-container">
      <h1 className="contact-title">Get In Touch</h1>
      <div className="contact-wrapper">

        {/* LEFT - PROFILE CARD */}
        <div className="contact-card">
          <div className="profile">
            <img src={photo} alt="profile" className="profile-img" />
            <h2>Akshay Jadhav</h2>
            <p className="role">Full Stack Developer</p>
          </div>
          <div className="contact-info">
            <p><FaEnvelope /> jadhavaskshay1548@gmail.com</p>
            <p><FaPhone /> 9322318567</p>
            <p><FaMapMarkerAlt /> Pune, India</p>
          </div>
          <div className="socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://leetcode.com/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit">Send Message</button>
          <p className="status">{status}</p>
        </form>

      </div>
    </section>
  );
}

export default Contact;