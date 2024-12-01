import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import BrowseContent from './Components/BrowseContent/BrowseContent'
import Effortless from './Components/Effortless/Effortless'
import Explore from './Components/Explore/Explore'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <BrowseContent />
      <Effortless />
      <Explore />
    </div>
  )
}

export default App
