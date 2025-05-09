
import React from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
