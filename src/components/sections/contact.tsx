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

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <AnimatedText
          text="Get in Touch"
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MovingBorder className="h-full">
            <div className="space-y-6 bg-white dark:bg-black">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <Mail size={20} />
                <span>vaibhavkulshrestha55@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <Phone size={20} />
                <span>+91 7355479199</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <MapPin size={20} />
                <span>Delhi, India</span>
              </div>
            </div>
          </MovingBorder>

          <MovingBorder className="h-full">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-black">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-500 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </MovingBorder>
        </div>
      </div>
    </section>
  );
};