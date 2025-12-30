"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationConfig = {
  trigger: React.RefObject<HTMLElement | null>;
  elements?: React.RefObject<HTMLElement | null>[];
  stagger?: number;
  duration?: number;
  delay?: number;
  y?: number;
  start?: string;
};

export const useScrollAnimation = ({
  trigger,
  elements = [],
  stagger = 0.1,
  duration = 0.8,
  delay = 0,
  y = 30,
  start = "top 85%",
}: AnimationConfig) => {
  useGSAP(() => {
    if (!trigger.current) return;

    const targets = elements.length 
      ? elements.map(ref => ref.current).filter(Boolean)
      : trigger.current.children;

    if (!targets.length) return;

    gsap.from(targets, {
      scrollTrigger: {
        trigger: trigger.current,
        start: start,
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: y,
      duration: duration,
      stagger: stagger,
      delay: delay,
      ease: "power3.out",
    });
  }, { scope: trigger });
};
