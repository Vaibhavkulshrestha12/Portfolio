import { useNavigate, useLocation } from 'react-router-dom';
import PillNav from '../ui/PillNav';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    scrollToSection('contact');
  };

  return (
    <PillNav
      logo="https://avatars.githubusercontent.com/u/137729638?v=4"
      logoAlt="Vaibhav Kulshrestha"
      logoHref="/"
      items={[
        { label: 'About', href: '/about' },
        {
          label: 'Projects',
          href: '#projects',
          onClick: () => scrollToSection('projects')
        },
        { label: 'Experience', href: '/experience' },
        {
          label: 'Contact',
          href: '#contact',
          onClick: handleContactClick
        }
      ]}
      activeHref={location.pathname}
      baseColor="#111111"
      pillColor="#1a1a1a"
      pillTextColor="#ffffff"
      hoveredPillTextColor="#ffcb05"
      className="fixed top-4 left-1/2 transform -translate-x-1/2"
    />
  );
};
