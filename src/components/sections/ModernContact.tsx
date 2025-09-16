import { useState } from "react";
import { SpotlightCard } from "../ui/spotlight";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";

export const ModernContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <SpotlightCard className="modern-card p-8">
            <div className="space-small">
              <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105 group"
                    style={{ 
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)'
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ 
                        background: 'var(--bg-tertiary)',
                        color: 'var(--accent-primary)'
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1" 
                           style={{ color: 'var(--text-muted)' }}>
                        {label}
                      </div>
                      <div className="font-medium" 
                           style={{ color: 'var(--text-primary)' }}>
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="mt-8 p-4 rounded-xl" 
                   style={{ background: 'var(--bg-secondary)' }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Available for projects
                  </span>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  I'm currently available for freelance work and full-time opportunities
                </p>
              </div>
            </div>
          </SpotlightCard>

          {/* Contact Form */}
          <SpotlightCard className="modern-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Send Message
              </h3>

              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:border-2"
                  style={{ 
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                  style={{ 
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none"
                  style={{ 
                    background: 'var(--bg-secondary)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <CheckCircle size={20} className="text-green-500" />
                  <p className="text-green-600">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <AlertCircle size={20} className="text-red-500" />
                  <p className="text-red-600">Failed to send message. Please try again later.</p>
                </div>
              )}
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};