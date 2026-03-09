import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import logo from '/public/images/icons/logo.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
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
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500 hover:scale-110 transition-transform">
                <img src={logo} alt="Profile" />
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/about"
                className="text-surface-400 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-surface-400 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Projects
              </button>
              <Link
                to="/experience"
                className="text-surface-400 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Experience
              </Link>
              <button
                onClick={handleContactClick}
                className="text-surface-400 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100/10 transition-colors absolute top-4 right-4"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-md dark:bg-black/10">
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-violet-500 hover:bg-gray-100/10 transition-colors"
            >
              About
            </Link>
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

            {/* Social Links */}
            <div className="pt-3 mt-1 border-t border-white/10">
              <p className="px-3 pb-2 text-xs font-semibold tracking-widest uppercase text-gray-500">Connect</p>
              <div className="flex items-center gap-1 px-3 flex-wrap">
                {[
                  { href: "https://github.com/Vaibhavkulshrestha12",             icon: <FaGithub size={18} />,   label: "GitHub" },
                  { href: "https://www.linkedin.com/in/vaibhav-kulshrestha-053924283/", icon: <FaLinkedin size={18} />, label: "LinkedIn" },
                  { href: "https://x.com/Vaibhav_1208",                          icon: <FaTwitter size={18} />,  label: "Twitter" },
                  { href: "mailto:vaibhavkulshrestha55@gmail.com",                icon: <FaEnvelope size={18} />, label: "Email" },
                  { href: "https://wa.me/+917355479199",                          icon: <FaWhatsapp size={18} />, label: "WhatsApp" },
                  { href: "https://discord.com/users/idk_alpha_",                 icon: <FaDiscord size={18} />,  label: "Discord" },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 rounded-lg text-gray-400 hover:text-amber-400 hover:bg-white/10 transition-colors"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>


          </div>
        </div>
      )}
    </nav>
  );
};
