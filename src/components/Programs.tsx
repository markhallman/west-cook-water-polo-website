import React from 'react';

const Programs: React.FC = () => {
  const programs = [
    {
      title: "High School (18U)",
      description: "Our high school program for athletes aged 14-18. Runs June 1st - July 31st",
      features: ["All skill levels welcome", "Both boys and girls teams available"],
      schedule: "Boys M/W 5:30-7:30",
      schedule2: "Girls T/Tr 5:30-7:30",
      price: "$100"
    }
  ];

  return (
    <section id="programs" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Current Programs
          </h2>
          <p className="text-xl text-gray-600" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Offering premier water polo coaching and training for high school athletes.
          </p>
          <p className="text-lg text-red-600" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
            West Cook Water Polo is currently completing administrative setup. 
            The link below is for pre-registration. If you pre-register, registration info will be sent directly to you when it is available
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="card" style={{
              border: '1px solid #e5e7eb',
              transition: 'box-shadow 0.3s ease'
            }}>
              <div style={{
                backgroundColor: '#0066cc',
                color: 'white',
                textAlign: 'center',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                {program.title.split('(')[0].trim()}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem' }}>{program.title}</h3>
              <p style={{ color: '#4b5563', marginBottom: '1rem' }}>{program.description}</p>
              
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    fontSize: '0.875rem', 
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{
                      width: '0.5rem',
                      height: '0.5rem',
                      backgroundColor: '#0066cc',
                      borderRadius: '50%',
                      marginRight: '0.5rem',
                      flexShrink: 0
                    }}></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#4b5563' }}>Schedule:</span>
                  <div style={{ display: 'flex',   flexDirection: 'column', alignItems: 'flex-end', fontSize: '0.875rem' }}>
                    <span style={{ fontWeight: '500', color: '#111827' }}>{program.schedule}</span>
                    <br />
                    <span style={{ fontWeight: '500', color: '#111827' }}>{program.schedule2}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                  <span style={{ color: '#4b5563' }}>Price:</span>
                  <span style={{ fontWeight: 'bold', color: '#0066cc' }}>{program.price}</span>
                </div>
              </div>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe-LmeOd0LB9li_R5UM2bbn99WxJaz9NC4-NvP9gPEvOCZeDw/viewform?usp=publish-editor" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: 'none', display: 'inline-block', width: '100%' }}
              >
                <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
                  Pre-Register
                </button>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Programs;
