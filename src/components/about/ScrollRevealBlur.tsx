"use client";

import { Column } from "@once-ui-system/core";
import { type ReactNode, useEffect, useState } from "react";

type ScrollRevealBlurProps = {
  children: ReactNode;
};

const MAX_BLUR_PX = 4;
const REVEAL_DISTANCE_PX = 250;

export default function ScrollRevealBlur({ children }: ScrollRevealBlurProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      const y = window.scrollY || 0;
      const nextProgress = Math.min(1, Math.max(0, y / REVEAL_DISTANCE_PX));
      setProgress(nextProgress);
      rafId = 0;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const blur = MAX_BLUR_PX * (1 - progress);
  const opacity = 0.55 + progress * 0.45;

  return (
    <Column
      fillWidth
      style={{
        filter: `blur(${blur}px)`,
        opacity,
        transition: "filter 120ms linear, opacity 120ms linear",
        willChange: "filter, opacity",
      }}
    >
      {children}
    </Column>
  );
}
