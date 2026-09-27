import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'OOPs', 'Collections Framework', 'Exception Handling'],
  },
  {
    title: 'Backend Technologies',
    skills: ['JDBC', 'Servlets', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'REST APIs'],
  },
  {
    title: 'Frontend Technologies',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'React'],
  },
  {
    title: 'Database',
    skills: ['SQL', 'Oracle Database', 'DDL', 'DML', 'Joins', 'Constraints'],
  },
  {
    title: 'Testing & QA',
    skills: [
      'Manual Testing',
      'Automation Testing',
      'JUnit',
      'Playwright',
      'Performance Testing',
      'Load Testing',
      'Apache JMeter',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Eclipse IDE', 'Apache Tomcat', 'Postman', 'CI/CD', 'Git & GitHub', 'VS Code'],
  },
];

function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className={`skills__container ${isVisible ? 'skills--visible' : ''}`}>
        {/* Section Heading */}
        <h2 className="skills__heading skills__animate">Technical Skills</h2>
        <div className="skills__heading-line skills__animate" aria-hidden="true"></div>
        <p className="skills__subtitle skills__animate">
          Technologies and tools I use for backend development, web applications,
          databases, and software testing.
        </p>

        {/* Skills Grid */}
        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <div
              className="skills__card skills__animate"
              key={category.title}
              style={{ '--card-index': index }}
            >
              <h3 className="skills__card-title">{category.title}</h3>
              <ul className="skills__list">
                {category.skills.map((skill) => (
                  <li className="skills__chip" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
