import { SpotlightCard } from "../ui/spotlight";
import { Mail, MapPin, Phone } from "lucide-react";

export const ModernContact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vaibhavkulshrestha55@gmail.com",
      href: "mailto:vaibhavkulshrestha55@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7355479199",
      href: "tel:+917355479199"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: "#"
    }
  ];

  return (
    <section className="section-padding" id="contact">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-element">
          <div className="inline-flex items-center px-4 py-2 rounded-full border mb-6"
               style={{ 
                 background: 'var(--bg-secondary)', 
                 borderColor: 'var(--accent-primary)',
                 color: 'var(--accent-primary)' 
               }}>
            <span className="text-sm font-semibold tracking-wider uppercase">Contact</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span style={{ color: 'var(--text-primary)' }}>Get in</span>
            <span className="text-gradient"> Touch</span>
          </h2>
          
          <p className="text-lg max-w-2xl mx-auto leading-relaxed"
             style={{ color: 'var(--text-secondary)' }}>
            Let's discuss your project or just say hello. I'm always excited to work on new challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <SpotlightCard className="modern-card p-6 sm:p-8 order-2 lg:order-1">
            <div className="space-small">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8" style={{ color: 'var(--text-primary)' }}>
                Contact Information
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105 group"
                    style={{ 
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)'
                    }}
                  >
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0"
                      style={{ 
                        background: 'var(--bg-tertiary)',
                        color: 'var(--accent-primary)'
                      }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-medium mb-1" 
                           style={{ color: 'var(--text-muted)' }}>
                        {label}
                      </div>
                      <div className="font-medium text-sm sm:text-base break-words" 
                           style={{ color: 'var(--text-primary)' }}>
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-xl" 
                   style={{ background: 'var(--bg-secondary)' }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>
                    Available for projects
                  </span>
                </div>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                  I'm currently available for freelance work and full-time opportunities
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* Map and Contact Section */}
          <SpotlightCard className="modern-card p-6 sm:p-8 order-1 lg:order-2">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--text-primary)' }}>
                Location
              </h3>

              {/* Map Container */}
              <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden border-2 border-orange-500/30 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4734716065933!2d77.2090212741885!3d28.613939382421508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb1ad40639d7%3A0x9ff7e7beb8c1b58!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1697485936148!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map - Delhi, India"
                />
              </div>

              {/* Location Description */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Delhi, India
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-400 mb-6">
                  Available for remote work and on-site projects across India
                </p>
              </div>

              {/* Contact Me Button */}
              <div className="text-center">
                <a
                  href="mailto:vaibhavkulshrestha55@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white border-orange-500 hover:border-orange-600 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Me</span>
                </a>
                <p className="text-xs sm:text-sm text-gray-400 mt-3">
                  Click to send me an email directly
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};