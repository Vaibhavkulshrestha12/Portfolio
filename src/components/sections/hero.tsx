import { AnimatedText } from "../ui/animated-text";
import { MovingBorder } from "../ui/moving-border";
//import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-white dark:via-black to-white dark:to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <AnimatedText
          text="Full Stack Developer"
          className="text-sm font-bold text-violet-500 tracking-wider uppercase mb-4"
        />
        <AnimatedText
          text="Who is not yet another developer"
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500"
        />
        <AnimatedText
          text="Specialized in MERN stack, Python, SEO and Project Management"
          className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        />
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <MovingBorder>
            <a 
              href="#contact" 
              className="px-8 py-4 text-gray-900 dark:text-white font-medium hover:text-violet-600 dark:hover:text-violet-300 transition-colors"
            >
              Get in Touch
            </a>
          </MovingBorder>
        </div>
      </div>
    </section>
  );
};