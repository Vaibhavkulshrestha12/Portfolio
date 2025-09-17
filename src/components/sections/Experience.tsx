import { AnimatedText } from "../ui/animated-text";
import { MovingBorder } from "../ui/moving-border";
import { motion } from "framer-motion";


const experiences = [
  {
    title: "VP of Engineering",
    company: "Kisan Connect (MSME Funded Startup)",
    period: "May 2025 - Present",
    description: "CO-Led a 5-member dev team to build a farmer-buyer digital marketplace. Farmers onboarded with Secured 5 Lakh MSME funding, and scaled app to production. Designed mobile UI & chatbot, Firebase Auth with reduced onboarding time by 35%.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80"
  },
  {
    title: "Tech Manager",
    company: "Pentaomnia Pvt. Ltd.",
    period: "May 2024 - Feb 2025",
    description: "Spearheaded development of EdTech platform WriterSpace (comprehensive blogging platform). Implemented CI workflows, reducing dev cycle time by 25%. Managed company web app (pentaomnia.com), reaching 1k+ monthly visitors.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80"
  },
  {
    title: "Frontend Developer Intern",
    company: "Pentaomnia Pvt. Ltd.",
    period: "Feb 2024 - May 2024",
    description: "Developed client projects using React, Tailwind, MERN, WordPress and HTML. Improved UI/UX and performance, boosting engagement by 40%.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=80"
  },
  {
    title: "Marketing Volunteer",
    company: "Soch by WWC (NGO)",
    period: "May 2024 - July 2024",
    description: "Increased SEO-driven reach by 60% via targeted campaigns.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
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