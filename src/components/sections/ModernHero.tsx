export const ModernHero = () => {
  return (
    <section className="section-padding min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 animate-float" 
             style={{ background: 'var(--gradient-primary)' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 animate-float" 
             style={{ background: 'var(--gradient-secondary)', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full opacity-10 animate-float" 
             style={{ background: 'var(--gradient-tertiary)', animationDelay: '4s' }} />
      </div>
      
      <div className="container-custom relative z-10 text-center">
        {/* Role Indicator */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border mb-8 animate-slide-up"
             style={{ 
               background: 'var(--bg-secondary)', 
               borderColor: 'var(--accent-primary)',
               color: 'var(--accent-primary)' 
             }}>
          <span className="text-sm font-semibold tracking-wider uppercase">Full Stack Developer</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 animate-slide-up" 
            style={{ animationDelay: '0.2s' }}>
          <span style={{ color: 'var(--text-primary)' }}>Vaibhav</span>
          <br />
          <span className="text-gradient">Kulshrestha</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up font-light"
           style={{ color: 'var(--text-secondary)', animationDelay: '0.4s' }}>
          Who is not yet another developer—crafting exceptional digital experiences with modern technologies and creative solutions
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up"
             style={{ animationDelay: '0.6s' }}>
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
          
          <a href="#projects" className="btn-secondary">
            View Projects
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center"
               style={{ borderColor: 'var(--accent-primary)' }}>
            <div className="w-1 h-3 rounded-full mt-2 animate-pulse"
                 style={{ background: 'var(--accent-primary)' }} />
          </div>
        </div>
      </div>
    </section>
  );
};