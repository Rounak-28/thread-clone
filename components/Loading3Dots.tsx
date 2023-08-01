"use client";

import { motion } from "framer-motion";
import React from "react";

// const loadingContainer = {
//   width: "6rem",
//   height: "10rem",
//   display: "flex",
//   justifyContent: "space-around",
// };

const loadingCircle = {
  display: "block",
  width: "0.8rem",
  height: "0.8rem",
  backgroundColor: "white",
  borderRadius: "0.5rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "250%",
  },
};

const loadingCircleTransition = {
  duration: 0.2,
  repeat: Infinity,
  repeatDelay: 1,
  ease: "easeInOut",
};
const loadingContainer = {
  width: "6rem",
  height: "10rem",
  display: "flex",
  justifyContent: "space-around",
};

export default function Loading3Dots() {
  return (
    <div className="w-screen flex justify-around">
      <motion.div
        style={loadingContainer}
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </div>
  );
}
