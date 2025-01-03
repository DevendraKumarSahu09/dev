import React from 'react';
import './codingPlatforms.css';
import leetcode from './../../assets/Leetcode-Graph.png';
import gfg from './../../assets/gfg.png';
import cc from './../../assets/cc.png';
import cn from './../../assets/cn.png';
import cf from './../../assets/cf.png';

const CodingPlatforms = () => {
  const platforms = [
    {
      id: 1,
      name: 'LeetCode',
      image: leetcode,
      rating: '1853',
      solved: '200+ Problems',
      rank: 'Knight',
      description: 'Data Structures & Algorithms'
    },
    {
      id: 2,
      name: 'GeeksForGeeks',
      image: gfg,
      rating: '1863+',
      solved: '600+ Problems',
      rank: '4★',
      description: 'DSA & Interview Prep'
    },
    {
      id: 3,
      name: 'Codechef',
      image: cc,
      rating: '1602',
      solved: '50+ Problems',
      rank: '3★',
      description: 'Problem Solving'
    },
    {
      id: 4,
      name: 'Coding Ninja',
      image: cn,
      rating: '1891',
      solved: '150+ Problems',
      rank: 'Specialist',
      description: 'Problem Solving & Learning'
    }
    ,
    {
      id: 5,
      name: 'CodeForces',
      image: cf,
      rating: '1120',
      solved: '40+ Problems',
      rank: 'Newbie',
      description: 'Competitive Programming'
    }
  ];

  return (
    <section className="codePlatform container section" id="codePlatform">
      <h2 className="section__title">Platforms Where I Code</h2>
      
      <div className="platforms-grid">
        {platforms.map((platform) => (
          <div key={platform.id} className="platform-card">
            <div className="platform-header">
              <h2 className="platform-name">{platform.name}</h2>
            </div>
            
            <div className="platform-content">
              <div className="platform-image-container">
                <img 
                  src={platform.image} 
                  alt={`${platform.name} stats`}
                  className="platform-image"
                />
              </div>
              
              <div className="platform-stats">
                <div className="stat-item">
                  <span className="stat-label">Rating:</span>
                  <span className="stat-value">{platform.rating}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Problems Solved:</span>
                  <span className="stat-value">{platform.solved}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Rank:</span>
                  <span className="stat-value">{platform.rank}</span>
                </div>
                <div className="stat-description">
                  {platform.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingPlatforms;