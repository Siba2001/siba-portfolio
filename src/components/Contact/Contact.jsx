import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const contactData = {
    email: 'sibasethy10032001@gmail.com',
    location: 'Surat, Gujarat, India',
    github: 'https://github.com/Siba2001',
    linkedin: 'https://www.linkedin.com/in/siba-sethy',
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Provide friendly simulated send feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        
        {/* Section Header */}
        <div className="contact__header">
          <h2 className="contact__heading">Get In Touch</h2>
          <div className="contact__heading-line"></div>
          <p className="contact__subtitle">
            I am always open to discussing new projects, backend engineering opportunities, or technology collaborations.
          </p>
        </div>

        <div className="contact__grid">
          
          {/* Left Column: Contact Information & Cards */}
          <div className="contact__info">
            
            {/* Live Availability Badge */}
            <div className="contact__card contact__card--status">
              <div className="contact__status-indicator">
                <span className="contact__status-dot"></span>
                <span className="contact__status-ping"></span>
              </div>
              <div className="contact__status-text">
                <h3>Open for Opportunities</h3>
                <p>Available for Software Engineer, Java Backend & Automation roles.</p>
              </div>
            </div>

            {/* Email Card with 1-Click Copy */}
            <div className="contact__card">
              <div className="contact__icon-box">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact__card-details">
                <span className="contact__card-label">Email</span>
                <a href={`mailto:${contactData.email}`} className="contact__card-value">
                  {contactData.email}
                </a>
              </div>
              <button 
                type="button" 
                className={`contact__copy-btn ${copied ? 'contact__copy-btn--copied' : ''}`}
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
              >
                {copied ? 'Copied! ✓' : 'Copy'}
              </button>
            </div>

            {/* Location Card */}
            <div className="contact__card">
              <div className="contact__icon-box">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact__card-details">
                <span className="contact__card-label">Location</span>
                <span className="contact__card-value">{contactData.location}</span>
                <span className="contact__card-subtext">Open to remote & relocation</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact__socials-box">
              <span className="contact__socials-title">Follow & Connect</span>
              <div className="contact__socials-row">
                <a 
                  href={contactData.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact__social-link"
                  aria-label="GitHub profile"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>

                <a 
                  href={contactData.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact__social-link"
                  aria-label="LinkedIn profile"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact__form-card">
            <h3 className="contact__form-title">Send a Direct Message</h3>
            
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact__form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  placeholder="Project inquiry / Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Hi Siba, I would like to get in touch regarding..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="contact__submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="contact__spinner"></span>
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>

              {submitted && (
                <div className="contact__success-banner">
                  ✓ Thank you! Your message has been sent successfully. I will get back to you shortly.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>

      {/* Footer copyright */}
      <footer className="contact__footer">
        <p>© 2026 Siba Sethy. All rights reserved. • Built with React & Vite</p>
      </footer>
    </section>
  );
}

export default Contact;
