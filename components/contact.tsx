"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { GitHubLogoIcon, InstagramLogoIcon, EnvelopeOpenIcon } from "@radix-ui/react-icons";
import XLogoIcon from "./icons/x";
import { Pin } from "lucide-react";

const DURATION = 0.3;
const EASE_OUT = "easeOut";

export const Contact = () => {
  return (
    <div className="flex flex-col gap-12 max-w-2xl mx-auto w-full text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION, ease: EASE_OUT }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="font-serif text-4xl sm:text-5xl italic text-foreground mb-6">
          Get in Touch
        </h2>
        <p className="text-foreground/70 text-lg">
          Interested in collaborating or have a question? Feel free to reach out. 
          I'd love to hear from you!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: DURATION,
          delay: DURATION,
          ease: EASE_OUT,
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-4"
      >
        <Link
          href="mailto:hello@example.com"
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          <EnvelopeOpenIcon className="w-5 h-5" />
          Send an Email
        </Link>
        <p className="text-sm text-foreground/50">
          Or connect with me on social platforms
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: DURATION,
          delay: DURATION * 2,
          ease: EASE_OUT,
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex gap-6 justify-center"
      >
        <Link
          target="_blank"
          className={buttonVariants({ size: "icon-xl" })}
          href="https://github.com"
        >
          <GitHubLogoIcon className="size-6" />
        </Link>
        <Link
          target="_blank"
          className={buttonVariants({ size: "icon-xl" })}
          href="https://x.com"
        >
          <XLogoIcon className="size-6" />
        </Link>
        <Link
          target="_blank"
          className={buttonVariants({ size: "icon-xl" })}
          href="https://instagram.com"
        >
          <InstagramLogoIcon className="size-6" />
        </Link>
        <Link
          target="_blank"
          className={buttonVariants({ size: "icon-xl" })}
          href="https://in.pinterest.com/saiprajwalcharan5/"
        >
          <Pin className="size-6" />
        </Link>
      </motion.div>
    </div>
  );
};
