import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, item) => {
    e.preventDefault();
    const targetId = item === "Home" ? "home" : item.toLowerCase();
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link 
          className="navbar-brand brand-logo" 
          to="/" 
          onClick={(e) => handleNavClick(e, "Home")}
        >
         𝔸𝕁.
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className="nav-link nav-hover"
                  href={`#${item === "Home" ? "home" : item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item)}
                  style={{ cursor: "pointer" }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;