const { useState, useEffect } = React;

function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFab, setShowFab] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false); // Close menu when clicking nav item
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show/hide FAB based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFab(true);
      } else {
        setShowFab(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav>
        <div className="logo" onClick={() => handleNavClick("home")}>
          <img src="images/logo.png" alt="Abu Khaisa" />
        </div>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a
              className={activeSection === "home" ? "active" : ""}
              onClick={() => handleNavClick("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={activeSection === "about" ? "active" : ""}
              onClick={() => handleNavClick("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={activeSection === "projects" ? "active" : ""}
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={activeSection === "contact" ? "active" : ""}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Home Section */}
      <section
        className={`home-section ${activeSection === "home" ? "active" : ""}`}
      >
        <div className="profile-image">
          <img src="images/profile.jpg" alt="Profile" />
        </div>
        <div className="home-content">
          <div className="greeting">Hello,</div>
          <h1 className="name">I Am Abu Khaisa</h1>
          <p className="subtitle">Frontend Developer & UI/UX Design</p>
          <div className="cta-buttons">
            <button
              className="contact-btn"
              onClick={() => handleNavClick("contact")}
            >
              Contact Me
              <span></span>
            </button>
            <div className="social-links">
              <a href="#" className="social-icon">
                in
              </a>
              <a href="#" className="social-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className={`about-section ${activeSection === "about" ? "active" : ""}`}
      >
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            Saya adalah seorang Frontend Developer dengan passion dalam
            menciptakan pengalaman digital yang menarik dan fungsional. Dengan
            keahlian dalam pengembangan website modern yang efisien, saya
            berkomitmen untuk memberikan solusi terbaik untuk setiap proyek.
          </p>
          <p className="about-text">
            Saya memiliki pengalaman dalam berbagai teknologi web modern dan
            selalu bersemangat untuk mempelajari hal-hal baru dalam dunia
            teknologi yang terus berkembang.
          </p>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend Development</h3>
              <p>HTML, CSS, JavaScript, React, Vue.js, Responsive Design</p>
            </div>
            <div className="skill-card">
              <h3>UI/UX Design</h3>
              <p>Figma, Adobe XD, User Research, Prototyping, Wireframing</p>
            </div>
            <div className="skill-card">
              <h3>Tools & Technologies</h3>
              <p>Git, VS Code, npm, Webpack, Bootstrap, Tailwind CSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className={`projects-section ${activeSection === "projects" ? "active" : ""}`}
      >
        <div className="about-content">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                {/* Ganti dengan: <img src="images/project2.jpg" alt="Portfolio" /> */}
                <img src="images/project2.png" alt="Portfolio" />
              </div>
              <div className="project-info">
                <h3>MyAnimeList tracker</h3>
                <p>
                  📚 A simple anime tracker website built using the MyAnimeList
                  API
                </p>
                <div className="project-tags">
                  <span className="tag">HTML5</span>
                  <span className="tag">CSS3</span>
                  <span className="tag">JS</span>
                  <span className="tag">API</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                {/* Ganti dengan: <img src="images/project3.jpg" alt="Dashboard" /> */}
                <img src="images/project3.png" alt="$NGELAG" />
              </div>
              <div className="project-info">
                <h3>$NGELAG Coins</h3>
                <p>
                  💲NGELAG is an absurd Solana memecoin inspired by life laggy
                  moments
                </p>
                <div className="project-tags">
                  <span className="tag">HTML%</span>
                  <span className="tag">CSS3</span>
                  <span className="tag">JS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}

      <section
        className={`contact-section ${activeSection === "contact" ? "active" : ""}`}
      >
        <div className="contact-content">
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Get In Touch
          </h2>

          <form
            className="contact-form"
            action="https://formspree.io/f/xrelvdqr"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

          {/* <div className="contact-info">
            <div className="info-item">
              <h4>Email</h4>
              <p>abukhaisa@example.com</p>
            </div>
            <div className="info-item">
              <h4>Phone</h4>
              <p>+62 812 3456 7890</p>
            </div>
            <div className="info-item">
              <h4>Location</h4>
              <p>Jakarta, Indonesia</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Floating Action Button - Scroll to Top */}
      {showFab && (
        <div className="fab" onClick={scrollToTop}>
          <svg viewBox="0 0 24 24">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
        </div>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Portfolio />);
