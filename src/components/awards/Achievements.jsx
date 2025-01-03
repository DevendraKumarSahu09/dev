import React from 'react';
import { Award, GraduationCap, Medal, Star, Trophy, Crown } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const awards = [
    {
      id: 1,
      type: 'award',
      title: "STARS Scholarship",
      detail: "100% Education Scholarship",
      organization: "VIT Bhopal",
      icon: <Star className="card-icon" size={24} />
    },
    {
      id: 2,
      type: 'award',
      title: "12th Class Topper",
      detail: "District Level Achievement",
      organization: "State Board",
      icon: <Trophy className="card-icon" size={24} />
    },
    {
      id: 3,
      type: 'award',
      title: "10th Class Topper",
      detail: "District Level Achievement",
      organization: "State Board",
      icon: <Medal className="card-icon" size={24} />
    }
  ];

  const certifications = [
    {
      id: 4,
      type: 'certification',
      title: "Google Cloud Computing Foundations Program",
      detail: "association with Google and VIT on Dec 2023",
      organization: "Google",
      icon: <Award className="card-icon" size={24} />
    },
    {
      id: 5,
      type: 'certification',
      title: "MERN Full Stack Internship Program",
      detail: "From Aug 2023 to Nov 2023",
      organization: "Ethnus",
      icon: <Award className="card-icon" size={24} />
    },
    {
      id: 6,
      type: 'certification',
      title: "Natural Language Processing",
      detail: "Jan-Apr 2024",
      organization: "NPTEL",
      icon: <Award className="card-icon" size={24} />
    }
  ];

  return (
    <section className="awards container section" id="awards">
      <h2 className="section__title">Achievements & Certifications</h2>
      
      <div className="categories">
          <h3 >Awards</h3>
        <div className="category awards">
          <div className="cards-grid">
            {awards.map((item) => (
              <div className="achievement-card" key={item.id}>
                <div className="card-content">
                  <div className="icon-container">
                    {item.icon}
                  </div>
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-detail">{item.detail}</p>
                  <span className="card-org">{item.organization}</span>
                </div>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>

          <h3 >Certifications</h3>
        <div className="category certifications">
          <div className="cards-grid">
            {certifications.map((item) => (
              <div className="achievement-card" key={item.id}>
                <div className="card-content">
                  <div className="icon-container">
                    {item.icon}
                  </div>
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-detail">{item.detail}</p>
                  <span className="card-org">{item.organization}</span>
                </div>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;