import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { SocialLinks } from './components/sections/SocialLinks';
import { Hero } from './components/sections/hero';
import { Skills } from './components/sections/skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/projects';
import { Achievements } from './components/sections/Achievements';
import { GithubSection } from './components/sections/github/GithubSection';
import { Contact } from './components/sections/contact';
import { Footer } from './components/layout/Footer';

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
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SocialLinks />
                <main>
                  <Hero />
                  <section id="about">
                    <Skills />
                  </section>
                  <section id="projects">
                    <Projects />
                  </section>
                  <Achievements />
                  <GithubSection />
                  <Contact />
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