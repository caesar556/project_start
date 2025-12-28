"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

type AnimationRefs = {
  descRef: RefObject<HTMLElement | null>;
  actionsRef: RefObject<HTMLDivElement | null>;
  cardsRef?: RefObject<HTMLDivElement | null>;
};

export const useAnimationGsap = ({
  descRef,
  actionsRef,
  cardsRef,
}: AnimationRefs) => {
  useGSAP(() => {
    if (!descRef.current || !actionsRef.current) return;

    const descSplit = new SplitText(descRef.current, {
      type: "lines",
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: actionsRef.current,
        start: "top 85%",
      },
    });

    tl.from(descSplit.lines, {
      opacity: 0,
      y: 40,
      stagger: 0.18,
      duration: 0.6,
    });

    tl.from(
      actionsRef.current.children,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
        stagger: 0.15,
        duration: 0.5,
      },
      "-=0.3",
    );

    if (cardsRef?.current) {
      tl.from(
        cardsRef.current.children,
        {
          opacity: 0,
          y: 60,
          stagger: 0.15,
          duration: 0.6,
        },
        "-=0.4",
      );
    }

    return () => {
      descSplit.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
};
