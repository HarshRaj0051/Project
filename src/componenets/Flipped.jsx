

import React, { useEffect, useState } from 'react';
import './Flipped.css';

const items = [
  // {
  //   id: 1,
  //   heading: 'Career at Luytens',
  //   paragraph: ' Innovate with a passionate team & tackle exciting challenges. Grow your skills & make a real impact.Join a collaborative team & work on meaningful projects. We value your ideas & celebrate success together. ',
  //   imageUrl: './images/bg1.jpg',
  // },
  {
    id: 2,
    heading: 'Encouraging growth and learning for all.',
    paragraph: 'Embrace a culture of continuous learning and personal development with us. We believe in nurturing growth, both professionally and personally, for everyone. Our inclusive approach fosters a community where individuals thrive, supported by valuable resources and opportunities. Join us in a journey of discovery and empowerment, where learning knows no bounds.',
    imageUrl: './images/carrerGrowth.jpeg',
  },
  {
    id: 3,
    heading: 'Focus on the benefit to the learner',
    paragraph: 'You take charge of your learning path, and we support you every step of the way.Build your skills the way you want to by customizing your learning experience.Own your development journey. We will fuel your growth. We prioritize your professional development by providing opportunities for personalized learning. ',
    imageUrl: './images/learning.jpeg',
  },
];

const App = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const visible = items.filter(item => {
        const el = document.getElementById(`item-${item.id}`);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= windowHeight;
      });

      setVisibleItems(visible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <div className="flip">
      {items.map(item => (
        <div key={item.id} id={`item-${item.id}`} className={`item ${visibleItems.includes(item) ? 'visible' : ''}`}>
          <div className="left">
            <h2>{item.heading}</h2>
            <p>{item.paragraph}</p>
          </div>
          <div className="right">
            <img src={item.imageUrl} alt="" />
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default App;
