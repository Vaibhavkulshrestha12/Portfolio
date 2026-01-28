import ShinyText from '../ui/ShinyText';
import StarBorder from '../ui/StarBorder';

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
            // color: 'var(--accent-primary)' 
          }}>
          <ShinyText
            text="Full Stack Developer"
            disabled={false}
            speed={3}
            className="text-sm font-semibold tracking-wider uppercase"
            color="#FFCB05"
            shineColor="#ffffff"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 animate-slide-up"
          style={{ animationDelay: '0.2s' }}>
          <span style={{ color: 'var(--text-primary)' }}>Vaibhav</span>
          <br />
          <span className="text-gradient">Kulshrestha</span>
        </h1>

        {/* Tagline & Bio */}
        <div className="space-y-6 mb-12 max-w-4xl mx-auto">
          {/* Main tagline */}
          <p className="text-xl md:text-2xl font-light leading-relaxed animate-slide-up"
            style={{ color: 'var(--text-secondary)', animationDelay: '0.4s' }}>
            Full-Stack Engineer & Product Architect crafting scalable applications
          </p>

          {/* Key highlights with staggered animations */}
          {/* Key highlights with staggered animations */}
          {/* Key highlights with staggered animations */}
          <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            <StarBorder as="div" color="#FFCB05" speed="5s">
              <div className="flex items-start gap-3 p-4 rounded-lg animate-slide-up"
                style={{
                  background: 'var(--bg-secondary)',
                  animationDelay: '0.6s',
                }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: 'var(--accent-primary)' }} />
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--accent-primary)' }}>
                    OCI 2025 Certified
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    DevOps Professional & AI Foundations
                  </p>
                </div>
              </div>
            </StarBorder>

            <StarBorder as="div" color="#3C5AA6" speed="5s">
              <div className="flex items-start gap-3 p-4 rounded-lg animate-slide-up"
                style={{
                  background: 'var(--bg-secondary)',
                  animationDelay: '0.7s',
                }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: '#3C5AA6' }} />
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#3C5AA6' }}>
                    Co-Founder & Winner
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    MSME-funded Kisan Connect, Ideathon 2024
                  </p>
                </div>
              </div>
            </StarBorder>

            <StarBorder as="div" color="#FF0000" speed="5s">
              <div className="flex items-start gap-3 p-4 rounded-lg animate-slide-up"
                style={{
                  background: 'var(--bg-secondary)',
                  animationDelay: '0.8s',
                }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: '#FF0000' }} />
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#FF0000' }}>
                    Tech Leadership
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Leading dev teams & scaling to production
                  </p>
                </div>
              </div>
            </StarBorder>

            <StarBorder as="div" color="#4CAF50" speed="5s">
              <div className="flex items-start gap-3 p-4 rounded-lg animate-slide-up"
                style={{
                  background: 'var(--bg-secondary)',
                  animationDelay: '0.9s',
                }}>
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: '#4CAF50' }} />
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#4CAF50' }}>
                    Tech Stack
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    React, Node.js, Firebase & Cloud DevOps
                  </p>
                </div>
              </div>
            </StarBorder>
          </div>

          {/* Closing statement */}
          <p className="text-base md:text-lg font-light leading-relaxed animate-slide-up opacity-80"
            style={{ color: 'var(--text-secondary)', animationDelay: '1.0s' }}>
            Delivering secure, high-impact solutions while contributing to community
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up"
          style={{ animationDelay: '1.1s' }}>
          <a
            href="/Vaibhav Kulshreshta resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Download CV
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