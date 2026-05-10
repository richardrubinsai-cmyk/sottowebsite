import { useEffect, useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export default function HeroSparklesBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] min-h-full"
      aria-hidden
    >
      <SparklesCore
        id="hero-sparkles"
        background="transparent"
        minSize={0.35}
        maxSize={1.15}
        particleDensity={72}
        className="h-full w-full"
        particleColor="rgba(245, 241, 232, 0.42)"
        speed={0.9}
      />
    </div>
  );
}
