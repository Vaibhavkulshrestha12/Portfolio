import { 
  SiReact,
  SiTypescript, 
  SiNextdotjs, 
  SiNodedotjs,
  SiPostgresql,
  SiFirebase,
  SiTailwindcss,
  SiEthereum 
} from 'react-icons/si';

const TechBadge = ({ icon: Icon, name }: { icon: React.ComponentType<{ className?: string }>, name: string }) => (
  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border mx-1 my-0.5 transition-all duration-200 hover:scale-105"
        style={{ 
          background: 'var(--bg-secondary)', 
          borderColor: 'var(--border)',
          borderStyle: 'dashed',
          color: 'var(--text-secondary)',
          fontSize: '0.875rem'
        }}>
    <Icon className="w-3.5 h-3.5" />
    <span className="font-medium">{name}</span>
  </span>
);

export const ModernHero = () => {
  return (
    <section className="section-padding min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Elements - More subtle */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 animate-float" 
             style={{ background: 'var(--gradient-primary)' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 animate-float" 
             style={{ background: 'var(--gradient-secondary)', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full opacity-20 animate-float" 
             style={{ background: 'var(--gradient-tertiary)', animationDelay: '4s' }} />
      </div>
      
      <div className="container-custom relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Role Indicator */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border mb-10 animate-slide-up"
             style={{ 
               background: 'var(--bg-secondary)', 
               borderColor: 'var(--accent-primary)',
               color: 'var(--accent-primary)' 
             }}>
          <span className="text-xs font-semibold tracking-wider uppercase">Full Stack Developer</span>
        </div>

        {/* Main Title with Introduction */}
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight animate-slide-up" 
            style={{ animationDelay: '0.1s' }}>
          <span style={{ color: 'var(--text-secondary)' }}>Hi, I'm Vaibhav — </span>
          <span className="text-gradient">A Full Stack developer.</span>
        </h1>

        {/* Description with Tech Badges */}
        <div className="space-y-6 mb-12 max-w-3xl mx-auto">
          {/* Interactive description with inline tech badges */}
          <p className="text-base md:text-lg font-normal leading-relaxed animate-slide-up"
             style={{ color: 'var(--text-secondary)', animationDelay: '0.2s' }}>
            I build interactive apps using 
            <TechBadge icon={SiTypescript} name="TypeScript" />, <></>
            <TechBadge icon={SiReact} name="React" />, <></>
            <TechBadge icon={SiNextdotjs} name="Next.js" />, <></>
            <TechBadge icon={SiNodedotjs} name="Node.js" />, <></>
            <TechBadge icon={SiTailwindcss} name="Tailwind CSS" />,<></> 
            <TechBadge icon={SiFirebase} name="Firebase" /> <></>
           <></> and <></>
            <TechBadge icon={SiPostgresql} name="PostgreSQL" />
            that are not only functional but also visually appealing, with a strong focus on
            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}> UI and Interactive</span> design. Enthusiastic about  
            <span className="font-semibold" style={{ color: 'var(--text-primary)' }}> Game development</span> and <TechBadge icon={SiEthereum } name="Blockchain" /> <></>.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up"
             style={{ animationDelay: '0.4s' }}>
          <a 
            href="/Vaibhav Kulshreshta resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)'
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume / CV
          </a>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: 'var(--accent-primary)',
              color: '#ffffff'
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Get in touch
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