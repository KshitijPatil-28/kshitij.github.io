import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills1 from './components/Skills1'   //skills
import Skills from './components/Skills'  //education ani contact me button
import Education from './components/Portfolio'
import Projects from './components/Projects'
import Contact from './components/Contact'




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div >
          <Navbar />
          <Home />        
          <Skills />     
          <Skills1 />          
          <About />
          <Projects />
          <Contact />
          
          
        </div>
      </BrowserRouter>
    );
  }
} 

export default App;
