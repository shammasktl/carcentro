import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import BrowseContent from './Components/BrowseContent/BrowseContent'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <BrowseContent />
    </div>
  )
}

export default App
