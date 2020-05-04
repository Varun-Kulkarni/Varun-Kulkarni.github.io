import React from 'react';
import './App.css';

/** Modules **/
import AboutSection from '../about/AboutSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-main container-fluid">
          <AboutSection />
        </div>
      </header>
    </div>
  );
}

export default App;
