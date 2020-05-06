import React from 'react';
import './App.css';

/** Modules **/
import AboutSection from '../about/AboutSection';
import StacksSection from '../stacks/StacksSection';
import ProjectSection from '../projects/ProjectSection';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-main container">
          <AboutSection />
          <StacksSection />
          <ProjectSection />
        </div>
      </header>
    </div>
  );
}

export default App;
