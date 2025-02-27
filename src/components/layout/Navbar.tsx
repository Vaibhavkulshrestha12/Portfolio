import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Cat, Fish } from 'lucide-react'; 
import { useTheme } from '../../hooks/useTheme';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Navbar = ({ toggleNeko, toggleMouse }: { toggleNeko: () => void, toggleMouse: () => void }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('contact');
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/10 backdrop-blur-md dark:bg-black/10' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-violet-500 hover:scale-110 transition-transform">
                <img
                  src="https://avatars.githubusercontent.com/u/137729638?v=4"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-violet-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-violet-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Projects
              </button>
              <Link
                to="/experience"
                className="text-gray-300 hover:text-violet-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Experience
              </Link>
              <button
                onClick={handleContactClick}
                className="text-gray-300 hover:text-violet-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100/10 transition-colors hidden md:block"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100/10 transition-colors absolute top-4 right-4"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="hidden md:flex gap-4">
              <button
                onClick={toggleNeko}
                className="p-2 rounded-lg hover:bg-gray-100/10 transition-colors"
                aria-label="Toggle cat"
              >
                <Cat className="w-6 h-6" />
              </button>

              <button
                onClick={toggleMouse}
                className="p-2 rounded-lg hover:bg-gray-100/10 transition-colors"
                aria-label="Toggle mouse"
              >
                <Fish className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-md dark:bg-black/10">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-violet-500 hover:bg-gray-100/10 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-violet-500 hover:bg-gray-100/10 transition-colors"
            >
              Projects
            </button>
            <Link
              to="/experience"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-violet-500 hover:bg-gray-100/10 transition-colors"
            >
              Experience
            </Link>
            <button
              onClick={handleContactClick}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-violet-500 hover:bg-gray-100/10 transition-colors"
            >
              Contact
            </button>

            <div className="px-4 py-2 flex gap-4">
              <button
                onClick={toggleNeko}
                className="p-2 rounded-lg hover:bg-gray-100/10 transition-colors"
                aria-label="Toggle cat"
              >
                <Cat className="w-6 h-6" />
              </button>

              <button
                onClick={toggleMouse}
                className="p-2 rounded-lg hover:bg-gray-100/10 transition-colors"
                aria-label="Toggle mouse"
              >
                <Fish className="w-6 h-6" />
              </button>
            </div>

            <div className="px-4 py-2">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-gray-300 hover:text-violet-500 transition-colors"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-5 h-5" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
