import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Inline SVG icons — no lucide dependency
const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const ZoomIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    <line x1="11" y1="8" x2="11" y2="14"/>
    <line x1="8" y1="11" x2="14" y2="11"/>
  </svg>
);

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

  // Re-usable card
  const ExpCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => (
    <div className="rounded-xl border border-[#2a2a2a] bg-[#111111] hover:border-[#f59e0b]/40 hover:shadow-[0_0_24px_rgba(245,158,11,0.07)] transition-all duration-300 overflow-hidden">
      {/* Image banner */}
      <div
        className="relative w-full h-36 sm:h-44 cursor-pointer overflow-hidden group"
        onClick={() => openModal(exp.image, exp.company, exp.title)}
      >
        <img
          src={exp.image}
          alt={exp.company}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300">
            <ZoomIcon />
          </span>
        </div>
        <span className="absolute bottom-2 right-3 text-xs font-medium text-white/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
          {exp.period}
        </span>
      </div>
      {/* Body */}
      <div className="p-5">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-0.5">{exp.title}</h3>
        <p className="text-[#f59e0b] text-sm font-medium mb-3">{exp.company}</p>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{exp.description}</p>
        {exp.certificate && (
          <a
            href={exp.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#f59e0b]/40 text-[#f59e0b] text-xs font-medium hover:bg-[#f59e0b]/10 transition-colors duration-200"
          >
            <DownloadIcon />
            View Offer Letter
          </a>
        )}
      </div>
    </div>
  );

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20 px-4" id="experience">
        <div className="max-w-5xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mb-16"
          >
            <span className="mb-4 inline-block rounded-full border border-white/20 px-4 py-1 text-xs font-semibold tracking-widest text-white/70 uppercase">
              Career
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center leading-tight">
              <span className="text-white">Professional </span>
              <span className="text-[#f59e0b]">Journey</span>
            </h2>
          </motion.div>

          {/* ── Alternating zigzag timeline ── */}
          <div className="relative">
            {/* Center vertical line — desktop only */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#f59e0b]/70 via-[#f59e0b]/25 to-transparent" />
            {/* Left line — mobile only */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#f59e0b]/70 via-[#f59e0b]/25 to-transparent" />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isRight = index % 2 === 0; // even → card slides from right
                return (
                  <motion.div
                    key={exp.title + index}
                    initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative"
                  >
                    {/* ── Mobile layout: left-anchored ── */}
                    <div className="flex md:hidden items-start pl-12">
                      {/* dot */}
                      <div className="absolute left-[9px] top-5 w-[11px] h-[11px] rounded-full bg-[#f59e0b] ring-2 ring-[#f59e0b]/30 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                      <div className="w-full">
                        <ExpCard exp={exp} index={index} />
                      </div>
                    </div>

                    {/* ── Desktop layout: alternating ── */}
                    <div className="hidden md:flex items-start gap-0">
                      {/* LEFT SLOT */}
                      <div className={`w-[calc(50%-2rem)] pr-6 ${
                        !isRight ? '' : 'invisible pointer-events-none'
                      }`}>
                        {!isRight && <ExpCard exp={exp} index={index} />}
                      </div>

                      {/* Center dot + connector */}
                      <div className="flex-shrink-0 w-16 flex flex-col items-center pt-5">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#f59e0b] ring-[3px] ring-[#f59e0b]/25 shadow-[0_0_10px_rgba(245,158,11,0.6)]" />
                        {/* horizontal connector nub */}
                        <div className={`mt-[-7px] h-[2px] w-6 bg-[#f59e0b]/40 ${
                          isRight ? 'self-start ml-[7px]' : 'self-end mr-[7px]'
                        }`} />
                      </div>

                      {/* RIGHT SLOT */}
                      <div className={`w-[calc(50%-2rem)] pl-6 ${
                        isRight ? '' : 'invisible pointer-events-none'
                      }`}>
                        {isRight && <ExpCard exp={exp} index={index} />}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative max-w-3xl w-full bg-[#111111] border border-[#2a2a2a] rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#2a2a2a]">
                <p className="text-sm font-medium text-white">
                  {selectedImage.title} — {selectedImage.alt}
                </p>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="p-4">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};