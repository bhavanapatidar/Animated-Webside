import React from 'react';
import About from './components/About';
import Heros from './components/Heros';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Story from './components/Story';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Heros/>
      <About/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>
    </main>

  );
}

export default App;