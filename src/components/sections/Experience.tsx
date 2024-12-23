import { AnimatedText } from "../ui/animated-text";
import { MovingBorder } from "../ui/moving-border";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Tech Manager",
    company: "Pentaomnia Pvt ltd",
    period: "2023 - Present",
    description: "Led development of various projects and spearheaded the tech team",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80"
  },
  {
    title: "Full Stack Developer",
    company: "Pentaomnia Pvt ltd",
    period: "2023 - 2024",
    description: "Developed and maintained multiple web applications using modern technologies",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80"
  },
  {
    title: "Frontend Developer",
    company: "Pentaomnia pvt ltd",
    period: "2023 - 2024",
    description: "Created responsive and interactive user interfaces for various clients",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=80"
  },
  {
    title: "Marketing intern",
    company: "Soch/Warriors Without cause",
    period: "2024 - present",
    description: "SEO, SMM, and marketing management for the clothing brand -SOCH",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=80"
  }
];

export const Experience = () => {
  return (
    <section className="py-20 px-4" id="experience">
      <div className="max-w-7xl mx-auto">
        <AnimatedText
          text="Professional Journey"
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        />

        <div className="relative">
          
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-violet-200 dark:bg-violet-900" />

          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} md:w-1/2`}
              >
                <MovingBorder>
                  <div className="bg-white dark:bg-black p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-1/3">
                        <img
                          src={exp.image}
                          alt={exp.company}
                          className="w-full h-28 object-cover rounded-lg"
                        />
                      </div>
                      <div className="w-full md:w-2/3">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-violet-600 dark:text-violet-400 font-medium mb-2">
                          {exp.company}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.period}</p>
                        <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
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
  );
};