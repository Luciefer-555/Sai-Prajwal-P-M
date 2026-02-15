"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const DURATION = 0.3;
const EASE_OUT = "easeOut";

const PROJECTS = [
  {
    name: "Rhiley",
    description: "An AI system that helps generate frontend code with attention to UI/UX structure, layout, and usability. Rhiley combines AI reasoning with design awareness to assist in building thoughtful interfaces.",
    tags: ["AI", "Ollama", "Frontend AI"],
    link: "#",
  },
  {
    name: "Cipherchat",
    description: "A computer networks project where messages exist only during an active session and are deleted once both users disconnect. The platform supports communication through encoded formats like Morse code and binary, exploring concepts of encryption, protocols, and transient communication.",
    tags: ["Networking", "Encryption", "Protocols"],
    link: "https://cipher-chat-two.vercel.app/",
  },
  {
    name: "Eternal Epics",
    description: "A digital reading and listening experience for Indian epics like the Ramayana and Srimad Bhagavatam, designed to make traditional texts accessible through structured reading and audio narration.",
    tags: ["Frontend", "Audio", "Web Platform"],
    link: "https://the-eternal-epics-dmfq.vercel.app/",
  },
  {
    name: "SyncIn",
    description: "A real-time collaboration platform enabling seamless teamwork. Features live updates, presence awareness, and instant synchronization across devices.",
    tags: ["Real-time", "Web", "Collaborative"],
    link: "#",
  },
  {
    name: "CODDOC",
    description: "Comprehensive analysis of data structures and algorithms. Includes implementations, complexity analysis, and visualizations for learning and reference.",
    tags: ["Algorithms", "Python", "DSA"],
    link: "#",
  },
  {
    name: "Art Gallery Slider",
    description: "An interactive art gallery slider showcasing images with smooth transitions and responsive layout. Focused on animation, layout design, and user interaction.",
    tags: ["Frontend", "Animation", "UI", "React"],
    link: "https://v0-art-gallery-slider-two-iota.vercel.app/",
  },
  {
    name: "Valentine-day ask out",
    description: "Add a Valentine’s Day interaction: When the user clicks a jukebox object in the scene, show a centered modal card.",
    tags: ["Html", "JavaScript", "CSS","Pixel art"],
    link: "https://valentine-day-k9lv.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <div className="flex flex-col gap-12 max-w-4xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION, ease: EASE_OUT }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="font-serif text-4xl sm:text-5xl italic text-foreground">
          Projects
        </h2>
      </motion.div>

      <div className="grid gap-6 lg:gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: DURATION,
              delay: DURATION * index,
              ease: EASE_OUT,
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="border border-border/50 rounded-lg p-6 md:p-8 hover:border-border transition-colors"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-melodrame italic text-2xl text-foreground">
                  {project.name}
                </h3>
              </div>

              <p className="text-foreground/70 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={project.link}
                target="_blank"
                className={`${buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })} w-fit gap-2`}
              >
                Learn More
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
