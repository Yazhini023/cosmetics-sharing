import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./css/Home.css";

function Home() {
  const navigate = useNavigate();
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
          <h1>Welcome to Glam House</h1>
          <p>A place to wounder and discover your favorite beauty products to buy it.</p>
        </div>
      </motion.section>

      <motion.section
        className="features-section"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <h2>Why Glam House?</h2>
        <p className="features-intro">Connect with the beauty community and elevate your skincare and makeup game.</p>
        <div className="features-grid">
          <div className="feature-card">
            <img src="https://static.vecteezy.com/system/resources/previews/014/455/886/non_2x/share-icon-on-transparent-background-free-png.png" alt="Share" className="feature-icon" />
            <h3>Share Your Favorites</h3>
            <p>Post your favorite cosmetics with photos and tips.</p>
          </div>
          <div className="feature-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQv3-UE30ahGuM6sR6CPdedUmLtJGt5n4GA&s" alt="Discover" className="feature-icon" />
            <h3>Discover New Products</h3>
            <p>Explore trending beauty products from the community.</p>
          </div>
          <div className="feature-card">
            <img src="https://png.pngtree.com/png-vector/20220530/ourmid/pngtree-3d-rating-stars-icon-for-review-product-png-image_4761748.png" alt="Review" className="feature-icon" />
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
        <h2>Let's Get Started!!</h2>
        <button className="btn-light"
        onClick={() => navigate("/products")}>
        Get Started</button>
      </motion.section>
    </motion.div>
  );
}

export default Home;
