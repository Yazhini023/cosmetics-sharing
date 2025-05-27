import React from "react";
import "./css/Home.css";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Organic Beauty</h1>
          <p>A place to share and discover your favorite beauty products with the world.</p>
          <button className="btn-primary">Join Now</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Organic Beauty?</h2>
        <p className="features-intro">Connect with the beauty community and elevate your skincare and makeup game.</p>
        <div className="features-grid">
          <div className="feature-card">
            <img src="/icons/share.png" alt="Share" className="feature-icon" />
            <h3>Share Your Favorites</h3>
            <p>Post your favorite cosmetics with photos and tips.</p>
          </div>
          <div className="feature-card">
            <img src="/icons/discover.png" alt="Discover" className="feature-icon" />
            <h3>Discover New Products</h3>
            <p>Explore trending beauty products from the community.</p>
          </div>
          <div className="feature-card">
            <img src="/icons/review.png" alt="Review" className="feature-icon" />
            <h3>Rate & Review</h3>
            <p>Leave honest reviews to help others choose wisely.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Share Your Style?</h2>
        <p>Join GlamShare today and connect with beauty lovers everywhere.</p>
        <button className="btn-light">Get Started</button>
      </section>
    </div>
  );
}
export default Home