import React, { useEffect, useRef, useState } from "react";
import "./DeadpoolPosterSection.css";

const DeadpoolPosterSection = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let obs;
    try {
      obs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) setActive(true);
        },
        { root: null, rootMargin: "-20% 0px -20% 0px", threshold: 0 }
      );
      obs.observe(el);
    } catch (e) {
      const onScroll = () => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.7) setActive(true);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }
    return () => { if (obs) obs.disconnect(); };
  }, []);

  return (
    <section className="dp-poster" ref={ref} aria-label="Company Milestone">
      <div className={`dp-wrap ${active ? "active" : ""}`}>
        <div className="dp-halo" aria-hidden="true" />
        <div className="dp-kicker">ESTABLISHED</div>
        <h2 className="dp-title" data-anchor="red-mid">PILGRIF VENTURES</h2>
        <div className="dp-meta">
          <span className="left">FOUNDED</span>
          <span className="right">2025</span>
        </div>
      </div>
    </section>
  );
};

export default DeadpoolPosterSection;