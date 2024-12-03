import React from 'react';
import About from './components/About';
import Heros from './components/Heros';

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Heros/>
      <About/>
    </main>

  );
}

export default App;