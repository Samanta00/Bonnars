import React from 'react';
import './App.css'
import Cards from './components/Cards'
import Footer from './components/Footer';
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Cards />
      <Footer />
    </div>
  )
}

export default App