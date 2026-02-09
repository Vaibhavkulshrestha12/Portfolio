import { SpotlightCard } from "../ui/spotlight";
import { AnimatedText } from "../ui/animated-text";
import { Gamepad2, Terminal, Cpu, Star, Rocket, Shield, Database, Monitor } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="min-h-screen section-padding relative overflow-hidden">
      {/* Gaming/Coding inspired background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Matrix-style code rain effect */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating tech elements */}
        <div className="absolute top-20 left-10 opacity-5 animate-float">
          <div className="text-6xl font-mono text-orange-500">{'<>'}</div>
        </div>
        <div className="absolute bottom-40 right-16 opacity-5 animate-float" style={{ animationDelay: '1s' }}>
          <div className="text-6xl font-mono text-amber-500">{'{ }'}</div>
        </div>
        <div className="absolute top-1/2 left-16 opacity-5 animate-float" style={{ animationDelay: '2s' }}>
          <div className="text-4xl font-mono text-yellow-500">console.log();</div>
        </div>
        
        {/* Gaming UI elements */}
        <div className="absolute top-32 right-20 opacity-10">
          <div className="w-20 h-20 border-2 border-orange-500 rounded-lg p-2 animate-pulse">
            <div className="w-full h-2 bg-orange-500 rounded mb-1" />
            <div className="w-3/4 h-2 bg-orange-500/60 rounded mb-1" />
            <div className="w-1/2 h-2 bg-orange-500/40 rounded" />
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header with terminal-style design */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 sm:mb-8"
          >
            <div className="panel-background rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm backdrop-blur-sm">
              <div className="flex items-center gap-1 sm:gap-2 mb-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                <span className="ml-1 sm:ml-2 text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>~/about-vaibhav.js</span>
              </div>
              <div className="text-orange-400 text-xs sm:text-sm break-all">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-400">aboutMe</span>{' '}
                <span className="text-white">=</span>{' '}
                <span className="text-yellow-400">"passionate developer"</span>
              </div>
            </div>
          </motion.div>
          
          <AnimatedText
            text="About Me"
            className="text-3xl sm:text-5xl md:text-7xl font-display font-bold mb-6 sm:mb-8"
          />
          
          {/* Role tags with emerald highlighting */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-2 sm:gap-4 flex-wrap mb-8 sm:mb-12 px-4"
          >
            <div className="px-3 sm:px-4 py-1.5 sm:py-2 panel-background rounded-full backdrop-blur-sm">
              <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent font-medium dark:from-orange-300 dark:to-amber-400 text-xs sm:text-sm">
                Full-Stack Engineer
              </span>
            </div>
            <div className="px-3 sm:px-4 py-1.5 sm:py-2 panel-background rounded-full backdrop-blur-sm">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text font-medium text-transparent dark:from-blue-200 dark:to-cyan-400 text-xs sm:text-sm">
                Gaming Enthusiast
              </span>
            </div>
            <div className="px-3 sm:px-4 py-1.5 sm:py-2 panel-background rounded-full backdrop-blur-sm">
              <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text font-medium text-transparent dark:from-purple-200 dark:to-pink-400 text-xs sm:text-sm">
                Comic Geek
              </span>
            </div>
          </motion.div>
        </div>

        {/* Main content - Gaming HUD style */}
        <div className="max-w-7xl mx-auto">
          
          {/* Section 1: The Code Architect */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Stats panel */}
              <div className="lg:col-span-4 order-2 lg:order-1">
                <div className="panel-background rounded-xl p-4 sm:p-6 backdrop-blur-sm h-full">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold">
                      <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent dark:from-orange-300 dark:to-amber-400">
                        System.Engineer
                      </span>
                    </h3>
                  </div>
                  
                  {/* Skill bars */}
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>React & Frontend</span>
                        <span className="text-xs sm:text-sm text-orange-400">95%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-orange-500 to-amber-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '95%' }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>Node.js & Backend</span>
                        <span className="text-xs sm:text-sm text-amber-400">90%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-amber-500 to-yellow-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '90%' }}
                          transition={{ duration: 1.5, delay: 0.7 }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>DevOps & Cloud</span>
                        <span className="text-xs sm:text-sm text-yellow-400">85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '85%' }}
                          transition={{ duration: 1.5, delay: 0.9 }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Certifications */}
                  <div className="mt-4 sm:mt-6 space-y-2">
                    <div className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                      <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>OCI DevOps Professional</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                      <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>AI Foundations</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main content */}
              <div className="lg:col-span-8 order-1 lg:order-2">
                <SpotlightCard className="p-6 sm:p-8 h-full">
                  <div className="mb-4">
                    <span className="text-xl sm:text-2xl"></span>
                    <span className="ml-2 text-base sm:text-lg font-semibold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent dark:from-orange-300 dark:to-amber-400">
                      console.log("Hello World!")
                    </span>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    Hello there!  I'm a{' '}
                    <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent font-medium dark:from-orange-300 dark:to-amber-400">
                      Full-Stack Engineer and Product Architect
                    </span>{' '}
                    who loves building robust, scalable, and impactful digital products . From crafting intuitive frontends with{' '}
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text font-medium text-transparent dark:from-blue-200 dark:to-cyan-400">
                      React & Tailwind
                    </span>{' '}
                    to designing secure backends with{' '}
                    <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent font-medium dark:from-amber-300 dark:to-yellow-400">
                      Node.js, Firebase, and PostgreSQL
                    </span>
                    , I thrive on turning complex ideas into seamless experiences. With{' '}
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-medium dark:from-orange-300 dark:to-red-400">
                      Oracle Cloud Infrastructure DevOps Professional and AI Foundations
                    </span>{' '}
                    certifications, I bring a strong DevOps mindset to ensure every project I work on is not just functional, but also cloud-ready, secure, and future-proof
                  </p>
                </SpotlightCard>
              </div>
            </div>
          </motion.div>

          {/* Section 2: The Business Builder */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              {/* Main content */}
              <div className="lg:col-span-8 lg:order-1 order-1">
                <SpotlightCard className="p-6 sm:p-8 h-full">
                  <div className="mb-4">
                    <span className="text-xl sm:text-2xl"></span>
                    <span className="ml-2 text-base sm:text-lg font-semibold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent dark:from-amber-300 dark:to-orange-400">
                      Entrepreneur.prototype
                    </span>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    For me, innovation is about solving real problems that matter .Like{' '}
                    <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent font-medium dark:from-orange-300 dark:to-amber-400">
                      Co-Founder of Kisan Connect
                    </span>{' '}
                    (an MSME-funded agri-tech startup), I co-led development of a farmer buyer marketplace. This not only supported the farmers but also generated the wealth! , proof that a good engineering drives the buisness values.
                  </p>
                </SpotlightCard>
              </div>
              
              {/* Achievement panel */}
              <div className="lg:col-span-4 lg:order-2 order-2">
                <div className="panel-background rounded-xl p-4 sm:p-6 backdrop-blur-sm h-full">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold">
                      <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent dark:from-amber-300 dark:to-yellow-400">
                        Achievements.unlock()
                      </span>
                    </h3>
                  </div>
                  
                  {/* Achievement cards */}
                  <div className="space-y-2 sm:space-y-3">
                    <motion.div 
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-green-500/10 border border-green-500/30 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">Co</span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-green-300 text-xs sm:text-sm">Co-Founder</p>
                        <p className="text-xs text-green-400 break-words">Kisan Connect</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-yellow-300 text-xs sm:text-sm">Winner</p>
                        <p className="text-xs text-yellow-400 break-words">MSME Hackathon 2024</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Database className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-blue-300 text-xs sm:text-sm">MSME Funded</p>
                        <p className="text-xs text-blue-400 break-words">Agri-Tech Startup</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 3: The Gaming Virtuoso */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Gaming stats panel */}
              <div className="lg:col-span-4">
                <div className="panel-background rounded-xl p-6 backdrop-blur-sm h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <Gamepad2 className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent dark:from-yellow-300 dark:to-orange-400">
                        GameProfile.load()
                      </span>
                    </h3>
                  </div>
                  
                  {/* Gaming achievements */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-red-500/10 rounded">
                      <span className="text-sm text-red-300">🤠 RDR2</span>
                      <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">100%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-500/10 rounded">
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>⚔️ Dark Souls</span>
                      <span className="text-xs bg-gray-500 text-white px-2 py-1 rounded">MASTER</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-orange-500/10 rounded">
                      <span className="text-sm text-orange-300">🥷 Sekiro</span>
                      <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded">BEAT</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-blue-500/10 rounded">
                      <span className="text-sm text-blue-300">🪲 Hollow Knight</span>
                      <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">DONE</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-green-500/10 rounded">
                      <span className="text-sm text-green-300">🚀 Ghostrunner</span>
                      <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">SPEED</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-yellow-500/10 rounded">
                      <span className="text-sm text-yellow-300">🌱 Stardew Valley</span>
                      <span className="text-xs bg-yellow-500 text-black px-2 py-1 rounded">CHILL</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/30 rounded">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-purple-300">Ex-Esports Athlete</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main content */}
              <div className="lg:col-span-8">
                <SpotlightCard className="p-8 h-full">
                  <div className="mb-4">
                    <span className="ml-2 text-lg font-semibold bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent dark:from-yellow-300 dark:to-amber-400">
                      Player.getPassions()
                    </span>
                  </div>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    While I love developing software, I also believe in hobbies.be it geeking myself for{' '}
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text font-medium text-transparent dark:from-purple-200 dark:to-pink-400">
                      comics and novels
                    </span>{' '}
                    or it's 100% completing{' '}
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-medium dark:from-orange-300 dark:to-red-400">
                      Red Dead Redemption 2
                    </span>
                    , mastering the{' '}
                    <span className="bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text font-medium text-transparent dark:from-gray-200 dark:to-gray-400">
                      Dark Souls series
                    </span>
                    , or exploring worlds like{' '}
                    <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent font-medium dark:from-amber-300 dark:to-orange-400">
                      Sekiro, Hollow Knight, Ghostrunner, and Stardew Valley
                    </span>
                    . I've even pursued gaming professionally as an{' '}
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent font-medium dark:from-yellow-300 dark:to-orange-400">
                      esports athlete
                    </span>{' '}
                    in past, an experience that taught me discipline, strategy, and resilience. Whatever I do be it engineering, founding startups, or gaming, I do it with passion and  profession
                  </p>
                </SpotlightCard>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};