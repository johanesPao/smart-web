"use client";
import { motion } from "motion/react";
import Image from "next/image";
import logo from "@/app/fred_perry.jpg";
export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="grid grid-cols-2 place-content-stretch gap-4 h-full">
        {/* Title Container */}
        <motion.div 
          className="content-end text-end"
          initial={{ opacity: 0, x: -6000 }}
            animate={{ 
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.2
              }
            }}
        >
          <div 
            className="font-bold"
          >
            SMART
          </div>
          <div className="text-sm">
            SOSCO Merchandising Analytics and Reporting Tools
          </div>
        </motion.div>
        {/* Picture 1 Container */}
        <motion.div 
          className="relative overflow-hidden"
          initial={{ opacity: 0, x: 2000 }}
            animate={{ 
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.2
              }
            }}
        >
          {/* Random Picture 1 */}
          <Image
            src={logo}
            alt="random-image1"
            layout="contain"
          />
        </motion.div>
        {/* Picture 2 Container */}
        <motion.div 
          className="flex flex-col items-end relative overflow-hidden"
          initial={{ opacity: 0, x: -3000 }}
            animate={{ 
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.2
              }
            }}
        >
          {/* Random Picture 2 */}
          <Image
            src={logo}
            alt="random-image1"
            layout="contain"
          />
        </motion.div>
        {/* Login Box Container */}
        <motion.div 
          className="content-start text-start "
          initial={{ opacity: 0, x: 500 }}
            animate={{ 
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.2
              }
            }}
        >
          Login Box 
        </motion.div>
      </div>
    </div>
  );
}
