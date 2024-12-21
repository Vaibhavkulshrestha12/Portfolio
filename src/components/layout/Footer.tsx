import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp ,FaDiscord} from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <FaEnvelope size={16} />
                <span>vaibhavkulshrestha55@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <FaPhoneAlt size={16} />
                <span>+91 7355479199</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt size={16} />
                <span>Sunny Apartments, Law Gate Road, Chehru, Phagwara - 144402, Punjab, India</span>
              </div>
            </div>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a href="#about" className="block text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400">About</a>
              <a href="#projects" className="block text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400">Projects</a>
              <a href="#github" className="block text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400">GitHub</a>
              <a href="#contact" className="block text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400">Contact</a>
            </div>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/Vaibhavkulshrestha12" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vaibhav-kulshrestha-053924283/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400">
                <FaLinkedin size={20} />
              </a>
              <a href="https://x.com/Vaibhav_1208" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.instagram.com/potato_o_0/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400">
                <FaInstagram size={20} />
              </a>
              <a href="https://wa.me/+917355479199" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://discord.com/users/idk_alpha_" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400">
                <FaDiscord size={20} />
              </a>
            </div>
          </div>
        </div>

        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Vaibhav Kulshrestha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
