export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full bg-gradient-radial from-primary-500/5 via-surface-50 dark:via-surface-900 to-surface-50 dark:to-surface-900" />
      
      {/* Matrix Rain Animation - DISABLED FOR TESTING */}
      {/* <MatrixRain /> */}
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Animated Role Title - DISABLED FOR TESTING */}
        <div className="text-sm font-bold text-primary-500 tracking-wider uppercase mb-4 h-6">
          Full Stack Developer
        </div>

        {/* Main Title - DISABLED ANIMATION */}
        <div className="text-4xl md:text-6xl font-bold text-surface-900 dark:text-surface-50 mb-8 text-gradient-professional leading-tight">
          Who is not yet another developer
        </div>

        {/* Subtitle - DISABLED ANIMATION */}
        <div className="text-lg text-surface-600 dark:text-surface-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences with modern technologies and creative solutions
        </div>
        
        {/* CTA Buttons - DISABLED ANIMATION */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <div className="border border-surface-200 dark:border-surface-700 rounded-lg p-1">
            <a 
              href="#contact" 
              className="px-8 py-4 text-surface-900 dark:text-surface-50 font-medium hover:text-primary-500 dark:hover:text-primary-300 transition-colors inline-block"
            >
              Get in Touch
            </a>
          </div>
          
          <div className="border border-surface-200 dark:border-surface-700 rounded-lg p-1">
            <a 
              href="#projects" 
              className="px-8 py-4 text-surface-900 dark:text-surface-50 font-medium hover:text-primary-500 dark:hover:text-primary-300 transition-colors inline-block"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500 mb-1">15+</div>
            <div className="text-sm text-surface-600 dark:text-surface-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500 mb-1">3+</div>
            <div className="text-sm text-surface-600 dark:text-surface-400">Years Exp</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-500 mb-1">10+</div>
            <div className="text-sm text-surface-600 dark:text-surface-400">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};