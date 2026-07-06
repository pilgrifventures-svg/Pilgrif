import React, { useEffect, useRef, useState } from "react";
import "./ReferenceDetailsSection.css";


// Local, safe IntersectionObserver-based reveal hook for scale/fade
const useScaleReveal = (rootMargin = "-20% 0px -65% 0px") => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    let observer;
    try {
      observer = new IntersectionObserver(
        entries => {
          const entry = entries[0];
          if (entry.isIntersecting) setActive(true);
          else setActive(false);
        },
        { root: null, rootMargin, threshold: 0 }
      );
      observer.observe(el);
    } catch (e) {
      // Fallback for older browsers
      const onScroll = () => {
        const rect = el.getBoundingClientRect();
        setActive(rect.top < window.innerHeight * 0.8);
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
      if (observer && el) observer.unobserve(el);
      if (observer) observer.disconnect();
    };
  }, [rootMargin]);

  return { ref, active };
};

const ReferenceDetailsSection = () => {
  const numbers = ["01", "02", "03", "04", "05"]; // added 05 on the right

  // Scale-in effects
  const { ref: markersRef, active: markersIn } = useScaleReveal("-10% 0px -80% 0px");
  const { ref: titleRef, active: titleIn } = useScaleReveal("-20% 0px -65% 0px");

  // Pop-in avatars & right image
  const { ref: avatarsRef, active: avatarsIn } = useScaleReveal("-15% 0px -75% 0px");
  const { ref: rightImgRef, active: rightImgIn } = useScaleReveal("-15% 0px -75% 0px");

  // Scale-in center card
  const { ref: cardRef, active: cardIn } = useScaleReveal("-15% 0px -70% 0px");

  return (
    <section className="cine-details" id="services" aria-label="Spider-Man 4 Details">
      <div className="details-wrap">
        {/* Row markers */}
        <div ref={markersRef} className="top-row">
          {numbers.map((n, idx) => (
            <div
              key={n}
              className={`marker scale-reveal ${markersIn ? "in" : ""}`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {n}
            </div>
          ))}
        </div>

        {/* Center headline */}
        <h2
          ref={titleRef}
          className={`details-title scale-reveal ${titleIn ? "in" : ""}`}
        >
          COMPREHENSIVE CREATOR MARKETING & BRAND STRATEGY SOLUTIONS
        </h2>

        {/* Media row under headline: four team member avatars */}
        <div className="details-media-row" aria-hidden="true">
          <div className="media-left">
            <div className="avatar-group" ref={avatarsRef}>
              <div
                className={`avatar-lg pop-reveal ${avatarsIn ? 'in' : ''}`}
                style={{ animationDelay: `0ms` }}
              >
                <img
                  src="https://customer-assets.emergentagent.com/job_11adb678-f32d-457d-9662-a7feb0b96738/artifacts/m8ncr2lz_74A9A33B-91F3-4617-88BE-3EA98AE7BF6D.png"
                  alt="Karan Kukreti - Founder CEO"
                />
              </div>
              <div
                className={`avatar-lg pop-reveal ${avatarsIn ? 'in' : ''}`}
                style={{ animationDelay: `60ms` }}
              >
                <img
                  src="https://customer-assets.emergentagent.com/job_11adb678-f32d-457d-9662-a7feb0b96738/artifacts/d7shfeob_6A6366AD-E195-4CB4-B192-243D7A055415.png"
                  alt="Priyanshu Bhatt - CFO"
                />
              </div>
              <div
                className={`avatar-lg pop-reveal ${avatarsIn ? 'in' : ''}`}
                style={{ animationDelay: `120ms` }}
              >
                <img
                  src="https://customer-assets.emergentagent.com/job_11adb678-f32d-457d-9662-a7feb0b96738/artifacts/pi5nzdim_69091E5D-AD8C-45AC-BFAC-B9A272F32C98.png"
                  alt="Riddhi Naithani - Relationships Manager"
                />
              </div>
              <div
                className={`avatar-lg pop-reveal ${avatarsIn ? 'in' : ''}`}
                style={{ animationDelay: `180ms` }}
              >
                <img
                  src="https://customer-assets.emergentagent.com/job_11adb678-f32d-457d-9662-a7feb0b96738/artifacts/zs0g6hxf_3D592A36-DA48-4EBE-8CDB-C5018E1BFA87.jpeg"
                  alt="Isha Kukreti - Content Marketing Manager"
                />
              </div>
            </div>
          </div>
          <div className="media-center">
            <div className="arrow-stack">
              <div className="h-arrow right" />
              <div className="h-arrow left" />
            </div>
          </div>
          <div className="media-right">
            <img
              ref={rightImgRef}
              className={`right-disc pop-reveal ${rightImgIn ? 'in' : ''}`}
              src="https://customer-assets.emergentagent.com/job_11adb678-f32d-457d-9662-a7feb0b96738/artifacts/vfebr6op_IMG_1204.png"
              alt="Pilgrif Ventures"
              style={{ animationDelay: `240ms` }}
            />
          </div>
        </div>

        {/* Three-column grid */}
        <div className="details-grid">
          {/* Left column - Services Overview */}
          <div className="col left">
            <div className="kicker">OUR SERVICES :</div>
            <p className="copy services-intro">
              <strong>Media Strategy Consultancy</strong><br/>
              Brand Strategy • Brand Positioning • Marketing Strategy • Market Entry Strategy • Product Marketing • Go-to-Market Planning
            </p>
            <p className="copy services-intro">
              <strong>Campaign & Execution</strong><br/>
              Campaign Planning • Campaign Execution • Influencer Marketing • Creator Marketing • Creator Management
            </p>
            <div className="media-image left-img">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400" alt="Business Strategy" />
            </div>
          </div>

          {/* Center column (card) */}
          <div className="col center">
            <div ref={cardRef} className={`film-card scale-reveal ${cardIn ? 'in' : ''}`} data-anchor="red-origin">
              <div className="film-head">CONSULTATION</div>
              <div className="film-title">YOUR CAMPAIGN</div>

              <div className="tile-grid">
                {/* Only keep 3 tiles - remove map */}
                <div className="tile big cinema-tile">
                  <div className="tile-kicker">ENGAGEMENT</div>
                  <div className="tile-strong">CREATOR-LED</div>
                </div>

                {/* Bottom small tiles */}
                <div className="tile small">
                  <div className="small-label">BRANDS</div>
                  <div className="small-value">7+</div>
                </div>
                <div className="tile small">
                  <div className="small-label">VIEWS</div>
                  <div className="small-value">30M+</div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-title">CONTACT</div>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-label">EMAIL</div>
                    <div className="contact-value">pilgrifventures@gmail.com</div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-label">PHONE</div>
                    <div className="contact-value">+91 8791468197</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Additional Services */}
          <div className="col right">
            <div className="kicker">EXPERTISE :</div>
            <p className="copy services-intro">
              <strong>Digital & Content</strong><br/>
              Social Media Strategy • Digital Marketing • Content Marketing • Content Production • UGC Campaigns • Creative Direction
            </p>
            <p className="copy services-intro">
              <strong>Brand Building</strong><br/>
              Corporate Branding • Brand Collaborations • Performance Marketing • Visual Identity • Talent Partnerships
            </p>
            <div className="media-image right-img">
              <img src="https://customer-assets.emergentagent.com/job_11adb678-f32d-457d-9662-a7feb0b96738/artifacts/7wcnjing_IMG_9765.jpeg" alt="Brand Building" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating red origin fallback anchor */}
      <div className="red-origin-anchor" aria-hidden="true" />

      {/* Deadpool cutout placeholder overlapping bottom (hidden, replaced by floating overlay) */}
      <div className="dp-cutout" aria-hidden="true" />
    </section>
  );
};

export default ReferenceDetailsSection;