import React from 'react';
import './App.css';

/** Modules **/
import HeroSection from '../hero/HeroSection';
import AboutSection from '../about/AboutSection';
import StacksSection from '../stacks/StacksSection';
import ProjectSection from '../projects/ProjectSection';
import OrganizationsSection from '../orgs/Organizations';
import Footer from '../footer/Footer'
function App() {
  return (
    <div className="App">
      <HeroSection />
      <header className="App-header">
        <div className="App-main">
          <div className="container">
            <AboutSection />
            <StacksSection />
            <ProjectSection />
            <OrganizationsSection />
            <Footer />  
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
