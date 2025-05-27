import React from "react";
import { motion } from "framer-motion";
import "./css/Home.css";

function Home() {
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
    >
      <motion.section
        className="hero-section"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 2 }}
      >
        <div className="hero-content">
          <h1>Welcome to Organic Beauty</h1>
          <p>A place to share and discover your favorite beauty products with the world.</p>
          <button className="btn-primary">Join Now</button>
        </div>
      </motion.section>

      <motion.section
        className="features-section"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
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
      </motion.section>

      <motion.section
        className="cta-section"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        <h2>Ready to Share Your Style?</h2>
        <p>Join GlamShare today and connect with beauty lovers everywhere.</p>
        <button className="btn-light">Get Started</button>
      </motion.section>
    </motion.div>
  );
}

export default Home;
