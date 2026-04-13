import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-gradient text-white">
      <div className="container" style={{ paddingTop: '6rem', paddingBottom: '8rem' }}>
        <div className="text-center">
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            West Cook Water Polo
          </h1>
          <p style={{ 
            fontSize: '1.5rem', 
            marginBottom: '2rem',
            color: '#dbeafe',
            maxWidth: '48rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Building Champions in and out of the Water
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            marginBottom: '3rem',
            color: '#bfdbfe',
            maxWidth: '32rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Join our premier water polo club serving the West Cook County area. 
            From beginners to elite athletes, we help every player reach their potential.
          </p>
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <button style={{
              backgroundColor: 'white',
              color: '#0066cc',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s ease'
            }}>
              Start Your Journey
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
