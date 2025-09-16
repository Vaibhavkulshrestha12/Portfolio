import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const MovingBorder = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-lg blur-sm opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:duration-300 animate-gradient-x"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
        className={cn(
          "relative bg-surface-50 dark:bg-surface-900 rounded-lg p-6 shadow-xl border border-surface-200 dark:border-surface-700",
          className
        )}
      >
        {children}
      </motion.div>
    </div>
  );
};