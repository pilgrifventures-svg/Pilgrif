import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import "./StorySection.css";

const StorySection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const storyText = `Strategic storytelling meets creator economy. We bridge the gap between brands and audiences through authentic influencer marketing, data-driven campaigns, and cinematic content that drives measurable results.`;

  return (
    <div className="story-section">
      <div className="story-content">
        <div className="story-text">
          <h3 className="story-title">CREATOR-LED MARKETING EXCELLENCE</h3>
          <p className="story-description">
            {storyText}
          </p>
        </div>
        
        {/* Logo display - replace circle image placeholder */}
        <div className="company-logo-display">
          <img 
            src="https://customer-assets.emergentagent.com/job_11adb678-f32d-457d-9662-a7feb0b96738/artifacts/vfebr6op_IMG_1204.png"
            alt="Pilgrif Ventures"
            className="company-logo-image"
          />
        </div>
      </div>
    </div>
  );
};

export default StorySection;