import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Tagline */}
        <div className="footer-tagline">
          Where Strategy Meets Creativity, Turning Attention Into Authority.
        </div>
        <div className="footer-attribution">
          — Pilgrif Ventures
        </div>

        {/* Logo */}
        <div className="footer-logo">
          <img 
            src="https://customer-assets.emergentagent.com/job_11adb678-f32d-457d-9662-a7feb0b96738/artifacts/vfebr6op_IMG_1204.png"
            alt="Pilgrif Ventures"
            className="footer-logo-img"
          />
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <div className="footer-contact-item">
            <span className="contact-label">EMAIL</span>
            <span className="contact-value">pilgrifventures@gmail.com</span>
          </div>
          <div className="footer-contact-item">
            <span className="contact-label">PHONE</span>
            <span className="contact-value">+91 8791468197</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          © 2025 Pilgrif Ventures. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
