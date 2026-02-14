"use client";

import { motion } from "framer-motion";

const DURATION = 0.3;
const EASE_OUT = "easeOut";

export const About = () => {
  return (
    <div className="flex flex-col gap-12 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION, ease: EASE_OUT }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="font-serif text-4xl sm:text-5xl italic text-foreground mb-8">
          About Me
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION, delay: DURATION, ease: EASE_OUT }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6 text-foreground/80"
      >
        <p className="text-lg leading-relaxed">
          I'm a Data Science student passionate about exploring the intersection of AI, Python, 
          and full-stack web development. With a focus on clean code and thoughtful design, I enjoy 
          building projects that solve real problems and provide meaningful user experiences.
        </p>

        <p className="text-lg leading-relaxed">
          Currently, I'm working on diverse projects ranging from AI-powered applications to 
          real-time collaboration tools. I believe in continuous learning and pushing the boundaries 
          of what's possible with modern technology.
        </p>

        <p className="text-lg leading-relaxed">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source, 
          or discussing the latest trends in AI and software development.
        </p>
      </motion.div>
    </div>
  );
};
