import React from "react";
import { motion } from "framer-motion";

export const AnimatedGridPattern = ({
  numSquares = 20,
  duration = 3,
  className = "",
}) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
    >
      {[...Array(numSquares)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-10 h-10 border border-white opacity-90"
          animate={{
            opacity: [1, 0.5, 1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: i * 0.1,
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};
