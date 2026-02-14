"use client";

import { motion } from "framer-motion";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

const DURATION = 0.3;
const DELAY = DURATION;
const EASE_OUT = "easeOut";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center text-center max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION, ease: EASE_OUT }}
      >
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl italic text-foreground">
          Sai Prajwal P M
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION, delay: DELAY, ease: EASE_OUT }}
      >
        <p className="text-lg sm:text-xl lg:text-xl text-foreground/80">
          Exploring AI · Software · and Human-centered design
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION, delay: DELAY * 2, ease: EASE_OUT }}
        className="text-base sm:text-lg text-foreground/60 max-w-2xl leading-relaxed"
      >
        Crafting elegant solutions with AI, Python, and web development.
        Focused on building meaningful projects with clean code and thoughtful design.

      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION, delay: DELAY * 3, ease: EASE_OUT }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <Link href="#projects" className={buttonVariants({ variant: "default" })}>
          View Projects
        </Link>
        <Link href="#contact" className={buttonVariants({ variant: "outline" })}>
          Get in Touch
        </Link>
      </motion.div>
    </div>
  );
};
