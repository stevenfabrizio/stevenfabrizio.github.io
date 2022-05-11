import React from 'react';

import './Landing.css';

const Landing: React.FC = () => {
  return (
    <div className="landing-container">
      <div className="empty-lc-div"></div>
      <h1 className="steven">Steven</h1>
      <h1 className="fabrizio">Fabrizio</h1>
      <h2 className="web-developer">Web Developer</h2>

      <a
        className="down-link down-arrow"
        data-ca3_iconfont="ETmodules"
        data-ca3_icon=""
        id="arrow"
        href="#about"
      />
    </div>
  );
};

export default Landing;
