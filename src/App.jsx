import React from 'react';
import About from './components/About';
import Heros from './components/Heros';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Heros/>
      <About/>
    </main>

  );
}

export default App;