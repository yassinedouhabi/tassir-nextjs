'use client';

import { Truck, Leaf, Headset } from 'lucide-react';
import {
  motion,
  useViewportScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

export default function FeaturesSection() {
  // For parallax: track scroll progress and map to y offset for shapes
  const ref = useRef(null);
  const { scrollYProgress } = useViewportScroll();

  // Parallax transforms for two shapes with different speeds
  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 100]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120]
  );

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden"
    >
      {/* Parallax SVG Background */}
      <motion.svg
        style={{ y: y1 }}
        className="absolute top-0 left-0 w-64 h-64 text-emerald-200 dark:text-emerald-700 opacity-30 -z-10"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="50" />
      </motion.svg>

      <motion.svg
        style={{ y: y2 }}
        className="absolute bottom-0 right-0 w-72 h-72 text-cyan-200 dark:text-cyan-700 opacity-30 -z-10"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <rect width="100" height="100" rx="20" />
      </motion.svg>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-12">
          Experience the best food delivery service with
          these amazing benefits.
        </p>

        <div className="flex flex-col md:flex-row md:justify-center md:space-x-12 space-y-10 md:space-y-0">
          <Feature
            icon={
              <FloatingIcon>
                <Truck className="w-12 h-12 text-emerald-500" />
              </FloatingIcon>
            }
            title="Fast Delivery"
            description="Get your meals delivered quickly and fresh, right to your doorstep."
            delay={0}
          />
          <Feature
            icon={
              <FloatingIcon>
                <Leaf className="w-12 h-12 text-green-500" />
              </FloatingIcon>
            }
            title="Fresh Ingredients"
            description="We partner with local restaurants to ensure quality and freshness."
            delay={0.2}
          />
          <Feature
            icon={
              <FloatingIcon>
                <Headset className="w-12 h-12 text-cyan-500" />
              </FloatingIcon>
            }
            title="24/7 Support"
            description="Our friendly support team is always ready to assist you."
            delay={0.4}
          />
        </div>
      </div>

      {/* Floating Illustrations */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 left-10 w-20 h-20 opacity-30 pointer-events-none"
      >
        {/* Example: A plate or food svg here */}
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-emerald-300 dark:text-emerald-700"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            d="M16 32h32M32 16v32"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      </motion.div>

      <motion.div
        animate={{ x: [0, -20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 right-20 w-24 h-24 opacity-20 pointer-events-none"
      >
        {/* Example: Another food or abstract shape */}
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-cyan-300 dark:text-cyan-700"
        >
          <rect
            x="8"
            y="8"
            width="48"
            height="48"
            rx="12"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      </motion.div>
    </section>
  );
}

function FloatingIcon({ children }) {
  return (
    <motion.div
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
}

function Feature({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: 0 }}
      className="flex flex-col items-center text-center max-w-xs mx-auto border backdrop-blur-lg rounded-xl p-6 shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </motion.div>
  );
}
