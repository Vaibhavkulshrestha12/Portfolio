import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white/10 backdrop-blur-md dark:bg-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-violet-500 hover:scale-110 transition-transform">
                <img
                  src="https://avatars.githubusercontent.com/u/137729638?v=4"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <Link
                to="/experience"
                className="text-gray-300 hover:text-violet-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Experience
              </Link>
              <NavLink href="#contact">Contacts</NavLink>
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
              className="md:hidden p-2 rounded-lg hover:bg-gray-100/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-md dark:bg-black/10">
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </MobileNavLink>
            <Link
              to="/experience"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-violet-500 hover:bg-gray-100/10 transition-colors"
            >
              Experience
            </Link>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contacts
            </MobileNavLink>
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

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href.startsWith('#') ? `/${href}` : href} 
    className="text-gray-300 hover:text-violet-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a
    href={href.startsWith('#') ? `/${href}` : href} 
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-violet-500 hover:bg-gray-100/10 transition-colors"
  >
    {children}
  </a>
);
