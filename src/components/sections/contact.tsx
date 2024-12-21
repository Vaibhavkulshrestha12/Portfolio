import { AnimatedText } from "../ui/animated-text";
import { MovingBorder } from "../ui/moving-border";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <AnimatedText
          text="Get in Touch"
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MovingBorder className="h-full">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="flex items-center gap-4 text-gray-400">
                <Mail size={20} />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Phone size={20} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <MapPin size={20} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </MovingBorder>

          <MovingBorder className="h-full">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </MovingBorder>
        </div>
      </div>
    </section>
  );
};