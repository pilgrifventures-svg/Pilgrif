import React from "react";
import "./MeetTheTeam.css";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      id: "karan-kukreti",
      name: "Karan Kukreti",
      designation: "Founder & CEO",
      image: "https://customer-assets.emergentagent.com/job_11adb678-f32d-457d-9662-a7feb0b96738/artifacts/m8ncr2lz_74A9A33B-91F3-4617-88BE-3EA98AE7BF6D.png"
    },
    {
      id: "priyanshu-bhatt",
      name: "Priyanshu Bhatt",
      designation: "Chief Financial Officer",
      image: "https://customer-assets.emergentagent.com/job_11adb678-f32d-457d-9662-a7feb0b96738/artifacts/d7shfeob_6A6366AD-E195-4CB4-B192-243D7A055415.png"
    },
    {
      id: "riddhi-naithani",
      name: "Riddhi Naithani",
      designation: "Relationships Manager",
      image: "https://customer-assets.emergentagent.com/job_11adb678-f32d-457d-9662-a7feb0b96738/artifacts/pi5nzdim_69091E5D-AD8C-45AC-BFAC-B9A272F32C98.png"
    },
    {
      id: "isha-kukreti",
      name: "Isha Kukreti",
      designation: "Content Marketing Manager",
      image: "https://customer-assets.emergentagent.com/job_11adb678-f32d-457d-9662-a7feb0b96738/artifacts/zs0g6hxf_3D592A36-DA48-4EBE-8CDB-C5018E1BFA87.jpeg"
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
