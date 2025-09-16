import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { SocialLinks } from './components/sections/SocialLinks';
import { ModernHero } from './components/sections/ModernHero';
import { ModernSkills } from './components/sections/ModernSkills';
import { Experience } from './components/sections/Experience';
import { ModernProjects } from './components/sections/ModernProjects';
import { ModernAchievements } from './components/sections/ModernAchievements';
import { GithubSection } from './components/sections/github/GithubSection';
import { ModernContact } from './components/sections/ModernContact';
import { Footer } from './components/layout/Footer';
import { Spotlight } from './components/ui/spotlight';
import CustomCursor from './components/CustomCursor';
import Oneko from './components/oneko/oneko'; 

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToSection />
      <div className="min-h-screen transition-colors" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        {/* Global Spotlight Effect */}
        <Spotlight />
        
        {/* Custom Pokeball Cursor */}
        <CustomCursor />
        
        {/* Oneko Cat - follows the pokeball cursor */}
        <Oneko />
        
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SocialLinks />
                <main>
                  <ModernHero />
                  <section id="about">
                    <ModernSkills />
                  </section>
                  <section id="projects">
                    <ModernProjects />
                  </section>
                  <ModernAchievements />
                  <GithubSection />
                  <ModernContact />
                </main>
              </>
            }
          />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;