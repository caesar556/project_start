import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

type AnimationRefs = {
  titleRef: RefObject<HTMLElement | null>;
  descRef: RefObject<HTMLElement | null>;
  cardsRef: RefObject<HTMLDivElement[]>;
};

export const useFeaturesGsap = ({
  titleRef,
  cardsRef,
  descRef,
}: AnimationRefs) => {
  useGSAP(() => {
    if (!cardsRef.current) return;

    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    const descSplit = new SplitText(descRef.current, { type: "lines" });

    gsap.from(titleSplit.words, {
      opacity: 0,
      y: 80,
      rotationX: -90,
      stagger: 0.08,
      ease: "power2.inOut",
      duration: 0.8,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 75%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(descSplit.lines, {
      opacity: 0,
      y: -80,
      skewY: 5,
      stagger: 0.3,
      ease: "power3.out",
      duration: 0.8,
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 75%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
    });

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
          rotateY: 40,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 0.8,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            end: "bottom 60%",
          },
          delay: index * 0.3,
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      titleSplit.revert();
      descSplit.revert();
    };
  }, []);
};
