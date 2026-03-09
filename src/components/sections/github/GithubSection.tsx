import { motion } from 'framer-motion';
import { GithubStats } from './GithubStats';

export const GithubSection = () => {
  const githubUsername = "Vaibhavkulshrestha12";

  return (
    <section className="py-20 px-4" id="github">
        <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-14"
        >
          <span className="mb-4 inline-block rounded-full border border-white/20 px-4 py-1 text-xs font-semibold tracking-widest text-white/70 uppercase">
            Open Source
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center leading-tight">
            <span className="text-white">GitHub </span>
            <span className="text-[#f59e0b]">Stats</span>
          </h2>
        </motion.div>

        <GithubStats username={githubUsername} />
      </div>
    </section>
  );
};