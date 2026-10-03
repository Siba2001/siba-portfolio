import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-inner">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Currently working at TechVizor
            </div>
            <h1 className="hero-title">
              <span className="hero-greeting">Hello, I'm</span>
              <span className="hero-name">Siba Sethy</span>
            </h1>
            <p className="hero-role">
              Software Developer Engineer | Java Backend Developer | <span className="hero-role-highlight">Automation</span>
            </p>
            <p className="hero-tagline">
              Passionate about building robust backend systems, web applications, and test automation.
            </p>
            
            {/* CTA Buttons: Hire Me & View Resume */}
            <div className="hero-cta-group">
              <a href="#contact" className="hero-cta hero-cta--primary">
                <span>Hire Me</span>
                <svg className="hero-cta-icon" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-cta hero-cta--resume"
                title="Open Siba Sethy Resume PDF in a new tab"
              >
                <svg className="hero-cta-icon" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>
    </>
  );
}

export default App;
