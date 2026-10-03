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
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  const contactData = {
    email: 'sibasethy10032001@gmail.com',
    phone: '+91 9777069513',
    whatsappNumber: '919777069513',
    location: 'Digapahandi, Odisha, India',
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

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    // Format clean WhatsApp message text
    const textMessage = 
      `*Hello Siba!* 👋\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Subject:* ${subject}\n\n` +
      `*Message:*\n${message}`;

    const whatsappUrl = `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
    setLastWhatsAppUrl(whatsappUrl);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 8000);
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

            {/* Direct WhatsApp Card */}
            <div className="contact__card">
              <div className="contact__icon-box contact__icon-box--whatsapp">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.04.8 1.01-2.96-.19-.3a8.17 8.17 0 0 1-1.25-4.51c0-4.54 3.7-8.24 8.24-8.24m4.53 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.06 0 1.21.88 2.39 1.01 2.56.12.17 1.74 2.66 4.21 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29z"/>
                </svg>
              </div>
              <div className="contact__card-details">
                <span className="contact__card-label">WhatsApp</span>
                <a 
                  href={`https://wa.me/${contactData.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact__card-value"
                >
                  {contactData.phone}
                </a>
                <span className="contact__card-subtext">Click to chat directly</span>
              </div>
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
                    <span>Opening WhatsApp...</span>
                  </>
                ) : (
                  <>
                    {/* WhatsApp Icon */}
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.04.8 1.01-2.96-.19-.3a8.17 8.17 0 0 1-1.25-4.51c0-4.54 3.7-8.24 8.24-8.24m4.53 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.06 0 1.21.88 2.39 1.01 2.56.12.17 1.74 2.66 4.21 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29z"/>
                    </svg>
                    <span>Send Message on WhatsApp</span>
                  </>
                )}
              </button>

              {submitted && (
                <div className="contact__success-banner">
                  ✓ Opening WhatsApp with your message! If it did not open automatically,{' '}
                  <a 
                    href={lastWhatsAppUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact__success-link"
                  >
                    click here to open WhatsApp
                  </a>.
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
