import React, { useEffect, useRef } from "react";
import "./ReferenceSection.css";
import leftImgAsset from "../assets/left.jpg";
import centerImgAsset from "../assets/centre.jpg";
import rightImgAsset from "../assets/right.jpg";

// Safe scroll reveal hook declared BEFORE usage to avoid hoisting runtime errors
const useScrollReveal = (rootMargin = "-20% 0px -70% 0px") => {
  const ref = useRef(null);
  const [active, setActive] = React.useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target || typeof window === "undefined") return;

    let observer;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setActive(entry.isIntersecting);
        },
        { root: null, rootMargin, threshold: 0 }
      );
      observer.observe(target);
    } catch (e) {
      // Fallback: no IntersectionObserver — degrade gracefully
      const onScroll = () => {
        const rect = target.getBoundingClientRect();
        setActive(rect.top < window.innerHeight * 0.3);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }
    return () => {
      if (observer && target) observer.unobserve(target);
      if (observer) observer.disconnect();
    };
  }, [rootMargin]);

  return { ref, active };
};

const ReferenceSection = () => {
  // Scroll reveal for the bridge scroller
  const { ref: topRef, active: scrollerActive } = useScrollReveal("0px 0px -100% 0px");
  // Reveal animations for white section
  const { ref: leftTitleRef, active: leftVisible } = useScrollReveal("-20% 0px -40% 0px");
  const { ref: rightTitleRef, active: rightVisible } = useScrollReveal("-20% 0px -40% 0px");
  const { ref: releaseRef, active: releaseVisible } = useScrollReveal("-25% 0px -50% 0px");
  // Independent reveal for top chips in black section
  const { ref: chipsRef, active: chipsVisible } = useScrollReveal("-15% 0px -85% 0px");

  return (

    <section className="cine-section" id="portfolio" aria-label="Cine Daily Reference Section">
      {/* Top dark panel */}
      <div className="cine-top">
        <div className="cine-top-inner">
          {/* Left column: Production */}
          <div className="cine-left">
            <div className="cine-subtitle">EXPERTISE</div>
            <div className="marvel-badge" aria-label="Pilgrif Ventures">PILGRIF VENTURES</div>
            <div className="cine-left-meta">
              <div className="counter-circle">02</div>
              <div className="stars" aria-label="Rating 5 of 5">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
              </div>
            </div>
          </div>

          {/* Center stack image placeholder */}
          <div className="cine-center">
            <div className={`card-stack ${leftVisible || rightVisible ? 'fan-in' : ''}`}>
              <div className="card bg1">
                <img className="card-img" src={leftImgAsset} alt="Left card" />
              </div>
              <div className="card bg2">
                <img className="card-img" src={rightImgAsset} alt="Right card" />
              </div>
              <div className="card main">
                <img className="card-img" src={centerImgAsset} alt="Center card" />
                <div className="deadpool-emblem" />
              </div>
            </div>
          </div>

          {/* Right column: Quote */}
          <div className="cine-right">
            <div className="quote">
              <span className="quote-mark">“</span>
              COMBINING STRATEGIC THINKING, CINEMATIC STORYTELLING, AND THE CREATOR ECONOMY TO BUILD BRAND EQUITY.
            </div>
            <div className="pager-dots" aria-hidden="true">
              <span className="dot active" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>
        </div>

        {/* Founder Image - placed after quote text, before chips */}
        <div className="founder-image-section" aria-hidden="true">
          <div className="founder-image-container">
            <img 
              src="https://customer-assets.emergentagent.com/job_11adb678-f32d-457d-9662-a7feb0b96738/artifacts/m8ncr2lz_74A9A33B-91F3-4617-88BE-3EA98AE7BF6D.png" 
              alt="Karan Kukreti - Founder & CEO" 
              className="founder-portrait"
            />
          </div>
        </div>

        {/* Floating chips */}
        <div className={`chips ${chipsVisible ? 'in' : ''}`}>
          <div ref={chipsRef} className="chip white">
            <div className="chip-title">CREATOR VIEWS</div>
            <div className="chip-value">100M+</div>
          </div>
          <div className="chip red">
            <div className="chip-title">MONTHLY REACH</div>
            <div className="chip-value">30M+</div>
          </div>
          <div className="chip dark">
            <div className="chip-title">CAMPAIGNS</div>
            <div className="chip-value">50+</div>
          </div>
        </div>
      </div>

      {/* Divider arrows only */}
      <div className="cine-divider">
        <button className="edge-arrow left" aria-label="Previous">‹</button>
        <button className="edge-arrow right" aria-label="Next">›</button>
      </div>

      {/* Bottom light panel */}
      <div className="cine-bottom">
        <div className="bottom-bar" />

        {/* Centered BY overlay (non-interactive) */}
        <div className="by-overlay" aria-hidden="true">BY</div>

        {/* New independent layout per reference */}
        <div className="directed-grid">
          <div className="col-left">
            <h2 ref={leftTitleRef} className={`big-direct fade-slide-left ${leftVisible ? 'in' : ''}`}>FOUNDED BY</h2>
            <div className="release-left">ESTABLISHED :</div>
          </div>
          <div className="col-right">
            <div ref={releaseRef} className={`release-detail fade-slide-top ${releaseVisible ? 'in' : ''}`} role="region" aria-label="Founder details">
              <p className="release-copy-right">
                <strong>Karan Kukreti</strong> is the Founder & CEO of Pilgrif Ventures, a next-generation media strategy consultancy founded in 2025. With a B.Sc. in Cinematography from the Asian Academy of Film & Television, Karan brings over five years of industry experience in creative strategy, brand storytelling, and commercial filmmaking.
              </p>
              <p className="release-copy-right" style={{marginTop: '16px'}}>
                Prior to founding Pilgrif Ventures, he served as Creative Lead at Pulkitxx Films, contributing to campaigns for globally recognized brands including VOGUE, BMW Motorrad, and Meta. As the creator behind <strong>@runeandriddhi</strong>, a lifestyle and UGC platform with 30,000+ followers and 30+ million monthly Instagram views, Karan has firsthand insight into audience behavior, platform algorithms, and creator-brand relationships.
              </p>
              <p className="release-copy-right" style={{marginTop: '16px'}}>
                His vision is to redefine modern brand communication by combining strategic thinking, cinematic storytelling, and the power of the creator economy—helping brands build authentic connections and drive measurable growth.
              </p>
            </div>
            <h2 ref={rightTitleRef} className={`big-right fade-slide-right ${rightVisible ? 'in' : ''}`}>KARAN KUKRETI</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceSection;