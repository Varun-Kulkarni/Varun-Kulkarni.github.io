import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Main from '../main/main';
import Resume from '../resume/resume';

function App() {
  return (
    // <div className="App">
    //   <HeroSection />
    //   <header className="App-header">
    //     <div className="App-main">
    //       <div className="container">
    //         <AboutSection />
    //         <StacksSection />
    //         <ProjectSection />
    //         <OrganizationsSection />
    //         <Footer />  
    //       </div>
          
    //     </div>
    //   </header>
    // </div>
    <main>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/resume" component={Resume} />
      {/* //todo add error component */}
      </Switch>
    </main>
  );
}

export default App;
