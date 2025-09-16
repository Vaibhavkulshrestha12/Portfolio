import { useState } from "react";
import { AnimatedText } from "../ui/animated-text";
import { MovingBorder } from "../ui/moving-border";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Implement contact form submission later
    alert('Contact form functionality will be implemented soon! For now, please reach out via email directly.');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <AnimatedText
          text="Get in Touch"
          className="text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-50 mb-12 text-center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MovingBorder className="h-full">
            <div className="space-y-6 bg-surface-50 dark:bg-surface-900">
              <h3 className="text-2xl font-semibold text-surface-900 dark:text-surface-50 mb-4">Contact Information</h3>
              <div className="flex items-center gap-4 text-surface-600 dark:text-surface-400">
                <Mail size={20} />
                <a href="mailto:vaibhavkulshrestha55@gmail.com" className="hover:text-primary-500 transition-colors">
                  vaibhavkulshrestha55@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-surface-600 dark:text-surface-400">
                <Phone size={20} />
                <a href="tel:+917355479199" className="hover:text-primary-500 transition-colors">
                  +91 7355479199
                </a>
              </div>
              <div className="flex items-center gap-4 text-surface-600 dark:text-surface-400">
                <MapPin size={20} />
                <span>Delhi, India</span>
              </div>
              <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
                <p className="text-sm text-primary-700 dark:text-primary-300">
                  💡 <strong>Note:</strong> Contact form functionality is coming soon! For immediate response, please email directly.
                </p>
              </div>
            </div>
          </MovingBorder>

          <MovingBorder className="h-full">
            <form onSubmit={handleSubmit} className="space-y-6 bg-surface-50 dark:bg-surface-900">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-surface-600 dark:text-surface-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-4 py-2 bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-surface-900 dark:text-surface-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-surface-600 dark:text-surface-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full px-4 py-2 bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-surface-900 dark:text-surface-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-surface-600 dark:text-surface-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                  className="w-full px-4 py-2 bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-surface-900 dark:text-surface-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-500 text-surface-50 font-medium rounded-lg hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Send Message (Demo)
              </button>
              <p className="text-sm text-surface-500 dark:text-surface-400 text-center">
                This form is currently a demo. Please use the email link above for actual contact.
              </p>
            </form>
          </MovingBorder>
        </div>
      </div>
    </section>
  );
};