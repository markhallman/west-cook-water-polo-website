import React from 'react';

const Calendar: React.FC = () => {
  return (
    <section id="calendar" className="section section-gray">
    <div className="container text-center">
        <h1 className="text-center mb-8">Team Calendar</h1>
        <div style={{ display: 'inline-block' }}>
        <iframe 
            src="https://calendar.google.com/calendar/embed?src=87ace08c867e9c0d0a10d32c439e5be491e5d4ebf382089868bd0a9bca2d4516%40group.calendar.google.com&ctz=America%2FChicago"
            style={{ border: 0 }} 
            width="800" 
            height="600" 
            frameBorder="0" 
            scrolling="no"
        ></iframe>
        </div>
    </div>
    </section>
  );
};

export default Calendar;