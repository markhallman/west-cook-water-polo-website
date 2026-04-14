import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Programs />
      <Calendar />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
