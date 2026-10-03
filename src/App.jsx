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
            <div className="hero-cta-group">
              <a href="#about" className="hero-cta hero-cta--primary">Learn More About Me</a>
              <a href="#contact" className="hero-cta hero-cta--secondary">Get in Touch</a>
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
