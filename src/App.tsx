import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { SocialLinks } from './components/sections/SocialLinks';
import { Hero } from './components/sections/hero';
import { Skills } from './components/sections/skills';
import { Projects } from './components/sections/projects';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      <SocialLinks />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;