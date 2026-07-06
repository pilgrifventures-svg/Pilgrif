import React from "react";
import "./OurClients.css";

const OurClients = () => {
  return (
    <section className="our-clients-section" aria-label="Our Clients">
      <div className="clients-header">
        <h2 className="clients-title">OUR CLIENTS</h2>
        <p className="clients-subtitle">Trusted by India&apos;s Leading Brands</p>
      </div>
      
      <div className="clients-logos-grid">
        <img 
          src="https://static.prod-images.emergentagent.com/jobs/11adb678-f32d-457d-9662-a7feb0b96738/images/37c9ae005987e90c0afe556fa4aedeb52b30b18098e4a4a96e18e920248d53b7.png" 
          alt="Client Logos - Fastrack, Lifebuoy, NIVEA, BG BGAUSS, SBI, Mirabelle Korea, Mamaearth"
          className="clients-image"
        />
      </div>

      <div className="clients-description">
        <p className="description-text">
          Our portfolio includes successful campaigns for some of India&apos;s most recognized brands, including <strong>Fastrack</strong>, <strong>Lifebuoy</strong>, <strong>NIVEA</strong>, <strong>BG BGAUSS</strong>, <strong>Mirabelle Korea</strong>, <strong>Mamaearth</strong>, and <strong>State Bank of India (SBI)</strong>. We have also conceptualized and created the official regional mascot for SBI Uttarakhand Circle, showcasing our ability to build memorable brand assets beyond traditional marketing campaigns.
        </p>
        <div className="stats-row">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Campaigns Delivered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30M+</span>
            <span className="stat-label">Monthly Views</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">7+</span>
            <span className="stat-label">Major Brands</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
