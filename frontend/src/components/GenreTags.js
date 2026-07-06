import React from "react";
import "./GenreTags.css";

const GenreTags = () => {
  const services = [
    { id: "media-strategy", label: "MEDIA STRATEGY CONSULTANCY" },
    { id: "creator-marketing", label: "CREATOR MARKETING" },
    { id: "branding", label: "BRANDING" },
    { id: "campaign-strategy", label: "CAMPAIGN STRATEGY" },
    { id: "influencer-marketing", label: "INFLUENCER MARKETING" }
  ];

  return (
    <div className="genre-tags">
      {services.map((service) => (
        <div key={service.id} className="genre-tag">
          {service.label}
        </div>
      ))}
    </div>
  );
};

export default GenreTags;