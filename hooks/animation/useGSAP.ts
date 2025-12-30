"use client";

import { useEffect } from "react";
import gsap from "gsap";

type GsapCallback = (context: gsap.Context) => void;

export function useGsap(callback: GsapCallback, deps: any[] = []) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(ctx);
    });

    return () => {
      ctx.revert();
    };
  }, deps);
}
