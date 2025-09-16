import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface UseOptimizedInViewOptions {
  once?: boolean;
  margin?: string;
  threshold?: number;
}

export const useOptimizedInView = (options: UseOptimizedInViewOptions = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options.once ?? true, // Default to once for better performance
    margin: (options.margin ?? "-50px") as any, // Type assertion for margin
    amount: options.threshold ?? 0.1, // Lower threshold
  });

  return { ref, isInView };
};