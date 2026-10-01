import { useEffect, useRef, useState } from 'react';
import './Projects.css';

import employeeImg from '../../assets/projects/employee-portal.jpg';
import doctorImg from '../../assets/projects/doctor-registration.jpg';
import societyImg from '../../assets/projects/society-management.jpg';
import aiImg from '../../assets/projects/ai-work-intelligence.jpg';

const projects = [
  {
    title: 'Employee Information Portal',
    category: 'Backend / Web Application',
    technologies: ['Java', 'Servlets', 'JDBC', 'Oracle'],
    image: employeeImg,
    codeUrl: 'https://github.com/Siba2001/EmployeeManagementSystem',
  },
  {
    title: 'Doctor Registration System',
    category: 'Backend / Spring MVC',
    technologies: ['Spring Boot', 'Spring MVC', 'Oracle'],
    image: doctorImg,
    codeUrl: 'https://github.com/Siba2001/Doctor_Management_System-Using-Spring-Boot-MVC',
  },
  {
    title: 'Society Management System',
    category: 'Full Stack / Enterprise',
    technologies: ['Java', 'Spring Boot', 'Spring MVC', 'MySQL', 'jQuery', 'Vue.js'],
    image: societyImg,
  },
  {
    title: 'AI-Powered Work Intelligence & Automated Reporting System',
    category: 'Full Stack / AI',
    technologies: ['Java 17', 'Spring Boot 3.2', 'React 18', 'OpenAI', 'MySQL', 'JWT'],
    image: aiImg,
    codeUrl: 'https://github.com/Siba2001/ai-powered-work-intelligence-automated-reporting-system',
    demoUrl: 'https://workintel-ui.onrender.com/',
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Individual card observers for staggered AOS-like reveal
  useEffect(() => {
    if (!isVisible) return;

    const observers = [];
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.classList.add('projects__card--revealed');
            }, index * 150);
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(card);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [isVisible]);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className={`projects__container ${isVisible ? 'projects--visible' : ''}`}>
        {/* Section Header */}
        <div className="projects__header">
          <span className="projects__label projects__animate">PORTFOLIO</span>
          <h2 className="projects__heading projects__animate">
            A Journey Through Innovation and Development
          </h2>
          <div className="projects__heading-line projects__animate" aria-hidden="true"></div>
        </div>

        {/* Projects Grid */}
        <div className="projects__grid">
          {projects.map((project, index) => (
            <article
              className="projects__card"
              key={project.title}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              {/* Card Image */}
              <div className="projects__card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="projects__card-image"
                  loading="lazy"
                />
                {/* Overlay with buttons */}
                <div className="projects__card-overlay">
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      className="projects__overlay-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="projects__overlay-btn projects__overlay-btn--demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="projects__card-body">
                <div className="projects__card-header-info">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <span className="projects__card-category">{project.category}</span>
                </div>

                {/* Technology Tags */}
                <div className="projects__tags">
                  {project.technologies.map((tech) => (
                    <span className="projects__tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
