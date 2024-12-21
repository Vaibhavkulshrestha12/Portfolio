
import { Navbar } from './components/layout/Navbar';
import { SocialLinks } from './components/sections/SocialLinks';
import { Hero } from './components/sections/hero';
import { Skills } from './components/sections/skills';
import { Projects } from './components/sections/projects';
import { Achievements } from './components/sections/Achievements';
import { GithubSection } from './components/sections/github/GithubSection';
import { Contact } from './components/sections/contact';
import { Footer } from './components/layout/Footer';

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
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;