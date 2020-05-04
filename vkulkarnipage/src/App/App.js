import React from 'react';
import './App.css';

/** Modules **/
import AboutSection from '../about/AboutSection';
import StacksSection from '../stacks/StacksSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-main container">
          <AboutSection />
          <StacksSection />
        </div>
      </header>
    </div>
  );
}

export default App;
