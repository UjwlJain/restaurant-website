import React from 'react';
import logo from '../assets/logo.png'; // Import the logo image
import indoorImage from '../assets/restaurant.png'; // Import the indoor image
import awardImage1 from '../assets/award1.png'; // Import award images
import awardImage2 from '../assets/award2.png';
import awardImage3 from '../assets/award3.png';
import './Home.css'
function Home() {
  const taglines = ["Delicious food served with love.", " Experience the taste of joy.", " Savor the flavors of happiness"];

  return (
    <div className="home-container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Restaurant Logo" />
        </div>
        <div className="timings">
          <div>Mon-Wed: 11am - 10pm</div>
          <div>Thurs: Closed</div>
          <div>Fri-Sun: 10am - 11pm</div>
        </div>
      </div>
      <div className="tagline-container">
        <img src={indoorImage} alt="Restaurant Indoor" />
        <p className="tagline">
          {taglines.map((tagline, index) => (
            <span key={index} className={`tagline-item ${index === 0 ? 'active' : ''}`}>
              {tagline}
            </span>
          ))}
        </p>
      </div>
      <section className="awards">
        <h2>Awards & Recognition</h2>
        <div className="award-images">
          <img src={awardImage1} alt="Award 1" />
          <img src={awardImage2} alt="Award 2" />
          <img src={awardImage3} alt="Award 3" />
        </div>
      </section>
      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        <div className="review">
          <p>"Amazing food and great service! Highly recommended."</p>
          <p>- John Doe</p>
        </div>
        <div className="review">
          <p>"The ambiance of the restaurant is wonderful. The food was delicious!"</p>
          <p>- Jane Smith</p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2016, FOOD & CURIOUS. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
