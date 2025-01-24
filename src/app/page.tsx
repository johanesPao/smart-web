"use client";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="h-screen w-screen content-center text-center">
      <motion.div 
        className="font-bold"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1.2
          }
        }}
      >
        hello to SMART!
      </motion.div>
      <motion.div 
        className="text-sm"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 1,
          transition: {
            duration: 1.2
          }
        }}
      >
        SOSCO Merchandising Analytics and Reporting Tools
      </motion.div>
    </div>
  );
}
