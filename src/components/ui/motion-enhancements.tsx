"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
function MotionObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const active = new Set<Animation>();
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (preference.matches) continue;
          const animation = entry.target.animate(
            [
              { opacity: 0.65, transform: "translateY(18px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 550, easing: "cubic-bezier(.2,.7,.3,1)" },
          );
          active.add(animation);
          animation.onfinish = () => active.delete(animation);
        }
      },
      { threshold: 0.12 },
    );
    const timer = window.setTimeout(
      () =>
        document
          .querySelectorAll(
            ".section-heading,.project-card,.post-card,.step,.institution-card,.about-visual",
          )
          .forEach((element) => observer.observe(element)),
      100,
    );
    const stop = () => {
      if (preference.matches) {
        observer.disconnect();
        active.forEach((animation) => animation.cancel());
      }
    };
    preference.addEventListener("change", stop);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      active.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", stop);
    };
  }, [pathname]);
  return null;
}
export function MotionEnhancements() {
  return (
    <Suspense fallback={null}>
      <MotionObserver />
    </Suspense>
  );
}
