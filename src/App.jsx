import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        {/* Future sections: Home, About, Skills, Projects, Contact */}
        <section id="home" className="placeholder-section">
          <div className="placeholder-inner">
            <h1 className="placeholder-title">
              <span className="placeholder-greeting">Hello, I'm</span>
              <span className="placeholder-name">Siba Sethy</span>
            </h1>
            <p className="placeholder-role">Software Developer Engineer | Java Backend Developer</p>
            <p className="placeholder-note">🚧 Portfolio sections coming soon...</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
