"use client";

import { motion } from "framer-motion";

const DURATION = 0.3;
const EASE_OUT = "easeOut";
const SKILL_CATEGORIES = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "CSS", "Tailwind"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "ChromaDB"],
  },
  {
    category: "AI",
    skills: ["Machine Learning", "RAG", "Fine-tuning", "Ollama"],
  },
  {
    category: "Design & Creative Tools",
    skills: ["Figma", "Spline", "Rive", "DaVinci Resolve"],
  },
  {
    category: "Tools",
    skills: ["GitHub", "VS Code", "Vercel", "Windsurf"],
  },
];


export const Skills = () => {
  return (
    <div className="flex flex-col gap-12 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION, ease: EASE_OUT }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="font-serif text-4xl sm:text-5xl italic text-foreground">
          Skills & Technologies
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: DURATION,
              delay: DURATION * groupIndex,
              ease: EASE_OUT,
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="border border-border/50 rounded-lg p-6"
          >
            <h3 className="font-serif text-xl italic text-foreground mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-primary/10 text-foreground/80 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
