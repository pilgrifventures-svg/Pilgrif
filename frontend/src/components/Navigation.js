import React, { useState } from "react";
import { Search, Menu } from "lucide-react";
import "./Navigation.css";

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { label: "SERVICES", id: "services" },
    { label: "PORTFOLIO", id: "portfolio" },
    { label: "CLIENTS", id: "clients" },
    { label: "CONTACT", id: "contact" }
  ];

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-content">
        {/* Logo */}
        <div className="nav-logo">
          <img
            className="logo-image"
            src="https://customer-assets.emergentagent.com/job_11adb678-f32d-457d-9662-a7feb0b96738/artifacts/vfebr6op_IMG_1204.png"
            alt="Pilgrif Ventures logo"
          />
        </div>

        {/* Navigation Items */}
        <div className="nav-items">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${hoveredItem === item.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Icons */}
        <div className="nav-icons">
          <button className="nav-icon">
            <Search size={28} />
          </button>
          <button className="nav-icon">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;