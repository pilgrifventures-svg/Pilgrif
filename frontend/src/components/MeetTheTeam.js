import React from "react";
import "./MeetTheTeam.css";
import founderKaran from "../assets/founderKaran.webp";
import FinancePriyanshu from "../assets/FinancePriyanshu.webp";
import RMRiddhi from "../assets/RMRiddhi.webp";
import MarketingIsha from "../assets/MarketingIsha.webp";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      id: "karan-kukreti",
      name: "Karan Kukreti",
      designation: "Founder & CEO",
      image: founderKaran,
    },
    {
      id: "priyanshu-bhatt",
      name: "Priyanshu Bhatt",
      designation: "Chief Financial Officer",
      image: FinancePriyanshu,
    },
    {
      id: "riddhi-naithani",
      name: "Riddhi Naithani",
      designation: "Relationships Manager",
      image: RMRiddhi,
    },
    {
      id: "isha-kukreti",
      name: "Isha Kukreti",
      designation: "Content Marketing Manager",
      image: MarketingIsha,
    }
  ];

  return (
    <section className="meet-the-team-section">
      <div className="team-header">
        <h2 className="team-title">MEET THE TEAM</h2>
        <p className="team-subtitle">The Creative Minds Behind Pilgrif Ventures</p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member-card">
            <div className="member-image-container">
              <img 
                src={member.image} 
                alt={member.name}
                className="member-image"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-designation">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
