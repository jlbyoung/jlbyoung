import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <div id="experience">
          <Experience id="experience"/>
        </div>
        <div id="projects">
          <Projects id="projects"/>
        </div>
        <div id="about">
          <About id="about"/>
        </div>
      </header>
    </div>
  );
}

export default App;
