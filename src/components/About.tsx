import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section section-gray">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About West Cook Water Polo
          </h2>
          <p className="text-xl text-gray-600" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Serving the West Cook County area 
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12" style={{ alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              To offer
            </p>
          </div>
          
          <div className="card">
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>What We Offer</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{
                  flexShrink: 0,
                  width: '1.5rem',
                  height: '1.5rem',
                  backgroundColor: '#0066cc',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '0.25rem'
                }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: 'white', borderRadius: '50%' }}></div>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <strong style={{ color: '#111827' }}>High School Program:</strong>
                  <span style={{ color: '#374151', marginLeft: '0.5rem' }}>Serving ages 14-18</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{
                  flexShrink: 0,
                  width: '1.5rem',
                  height: '1.5rem',
                  backgroundColor: '#0066cc',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '0.25rem'
                }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: 'white', borderRadius: '50%' }}></div>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <strong style={{ color: '#111827' }}>Expert Coaching:</strong>
                  <span style={{ color: '#374151', marginLeft: '0.5rem' }}>Former collegiate players and current high school coaches</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{
                  flexShrink: 0,
                  width: '1.5rem',
                  height: '1.5rem',
                  backgroundColor: '#0066cc',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '0.25rem'
                }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: 'white', borderRadius: '50%' }}></div>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <strong style={{ color: '#111827' }}>Competition:</strong>
                  <span style={{ color: '#374151', marginLeft: '0.5rem' }}>Participating in local and regional competitions</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
