import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section section-gray">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Ready to join our water polo family? Contact us today to learn more about our programs
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div>
            <div className="card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Contact Information</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0,
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: '#0066cc',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="24" height="24" fill="none" stroke="white" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div style={{ marginLeft: '1rem' }}>
                    <h4 style={{ fontWeight: '600', color: '#111827' }}>Phone</h4>
                    <p style={{ color: '#4b5563' }}>(555) 123-4567</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0,
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: '#0066cc',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="24" height="24" fill="none" stroke="white" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div style={{ marginLeft: '1rem' }}>
                    <h4 style={{ fontWeight: '600', color: '#111827' }}>Email</h4>
                    <p style={{ color: '#4b5563' }}>info@westcookwaterpolo.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0,
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: '#0066cc',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="24" height="24" fill="none" stroke="white" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div style={{ marginLeft: '1rem' }}>
                    <h4 style={{ fontWeight: '600', color: '#111827' }}>Pool Location</h4>
                    <p style={{ color: '#4b5563' }}>Morton East High School<br />2423 S Austin Blvd, Cicero, IL 60804</p>
                  </div>
                </div>


              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>Send us a Message</h3>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="program" className="form-label">
                    Interested Program
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select a program</option>
                    <option value="youth">Youth Development (8U-12U)</option>
                    <option value="competitive">Competitive Training (14U-16U)</option>
                    <option value="elite">Elite Program (18U)</option>
                    <option value="masters">Adult Masters</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="form-textarea"
                    placeholder="Tell us about your water polo experience and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: '0.75rem 1.5rem', fontWeight: '600' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
