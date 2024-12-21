import { useState } from 'react';
import { Sun, Moon, Home } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/10 backdrop-blur-md dark:bg-black/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-violet-500 hover:scale-110 transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80"
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
              <NavLink href="#achievements">Achievements</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100/10 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-violet-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);