import React, { useState } from 'react'
import './App.css'
import Hobbies from './components/Hobbies'

function App() {
  return (
    <div className="App">
      <div className="grid-container">
      <div className="picture">Picture</div>
      <div className="contact">Contact</div>
      <div className="introduction">Introduction</div>
      <div className="softskills">Soft-Skills</div>
      <div className="education">Education</div>
      <div className="experience">Experiences</div>
      <div className="hardskills">Hard-Skills</div>
        <Hobbies />
      </div>
    </div>
  );
}

export default App;
