import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Experience from './components/experience/Experience'
import Projects  from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
