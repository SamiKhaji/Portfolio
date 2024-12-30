import { useState } from 'react'
import Header from './components/Header';
import Home from './components/Home';
import ProfessionalProfiles from './components/CodingProfiles';
import Educa from './components/Educa';
import './App.css'
import Projects from './components/Projects';
import CombinedComponent from './components/CombinedComponent';
function App() {

  return (
  
      <div>
      <Header/>
      <Home/>
      <CombinedComponent/>
      <Projects/>
      </div>
      
  )
}

export default App
