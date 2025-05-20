import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import TechStack from './Components/TechStack';
import UniversityProjects from './Components/UniversityProjects';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-100px] left-[-100px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,0,182,0.2),transparent)] z-0" />
      <div className="absolute top-[-100px] right-[-100px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,0,182,0.2),transparent)] z-0" />

      {/* Foreground content */}
      <Navbar />
      <Hero />
      <TechStack />
      <UniversityProjects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
