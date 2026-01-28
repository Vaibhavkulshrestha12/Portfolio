import { AnimatedText } from "../ui/animated-text";
import { MovingBorder } from "../ui/moving-border";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, ZoomIn } from "lucide-react";
import { useState } from "react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  image: string;
  certificate?: string;
}


const experiences = [
  {
    title: "(Co-Founder)",
    company: "Kisan Connect (MSME Funded Startup)",
    period: "May 2025 - Present",
    description: "CO-Led a 5-member dev team to build a farmer-buyer digital marketplace. Farmers onboarded with Secured 5 Lakh MSME funding, and scaled app to production. Designed mobile UI & chatbot, Firebase Auth with reduced onboarding time by 35%.",
    image: "/images/Kisaanconnect.jpg"
  },
  {
    title: "Tech Lead",
    company: "Pentaomnia Pvt. Ltd.",
    period: "May 2024 - Feb 2025",
    description: "Spearheaded development of EdTech platform Nirmaan(comprehensive blogging platform). Implemented CI workflows, reducing dev cycle time by 25%. Managed company web app (pentaomnia.com), reaching 1k+ monthly visitors.",
    image: "/images/page.png",
  },
  {
    title: "Frontend Developer Intern",
    company: "Pentaomnia Pvt. Ltd.",
    period: "Feb 2024 - May 2024",
    description: "Developed client projects using React, Tailwind, MERN, WordPress and HTML. Improved UI/UX and performance, boosting engagement by 40%.",
    image: "/images/page.png",
    certificate: "/images/Pentaomnia frontend intern.pdf"
  },
  {
    title: "Marketing Volunteer",
    company: "Soch by WWC (NGO)",
    period: "June 2024 - August 2024",
    description: "Increased SEO-driven reach by 60% via targeted campaigns.",
    image: "/images/WWE intern.jpg"
  }
];

export const Experience = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  const openModal = (imageSrc: string, imageAlt: string, title: string) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt, title });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20 px-4" id="experience">
        <div className="max-w-7xl mx-auto">
          <AnimatedText
            text="Professional Journey"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12 text-center"
          />

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200 dark:bg-red-900" />

            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative w-full ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} md:w-1/2`}
                >
                  <MovingBorder>
                    <div className="bg-white dark:bg-black p-4 sm:p-6">
                      <div className="flex flex-col gap-4 sm:gap-6">
                        {/* Image */}
                        <div className="w-full">
                          <div
                            className="relative group cursor-pointer overflow-hidden rounded-lg"
                            onClick={() => openModal(exp.image, exp.company, exp.title)}
                          >
                            <img
                              src={exp.image}
                              alt={exp.company}
                              className="w-full h-32 sm:h-28 md:h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Overlay with zoom icon */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                              <ZoomIn
                                size={24}
                                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="w-full">
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 break-words">
                            {exp.title}
                          </h3>
                          <h4 className="text-red-600 dark:text-red-400 font-medium mb-2 text-sm sm:text-base break-words">
                            {exp.company}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm sm:text-base">{exp.period}</p>
                          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed break-words mb-3">
                            {exp.description}
                          </p>

                          {/* Certificate download button */}
                          {exp.certificate && (
                            <a
                              href={exp.certificate}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors duration-200"
                            >
                              <Download size={16} />
                              View Offer letter
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </MovingBorder>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {selectedImage.title} - {selectedImage.alt}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Image */}
              <div className="p-4">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[calc(90vh-120px)] object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};