import React from 'react';
import './css/About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.div 
        className="about-header"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        <h1>About Us</h1>
        <p>Empowering beauty through shared experiences.</p>
      </motion.div>

      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <h2>Our Mission</h2>
          <p>
            At <strong>CosmetoShare</strong>, we believe that beauty is best when shared. 
            We created this platform to connect makeup lovers, skincare enthusiasts, and 
            beauty experts so that everyone can share their favorite products, tips, and stories.
          </p>

          <h2>Why Cosmetics Sharing?</h2>
          <p>
            We aim to reduce waste, promote sustainability, and help users discover new 
            cosmetics through real user feedback and reviews. Our platform allows users 
            to donate, share, or trade gently used or new cosmetics within a trusted community.
          </p>

          <h2>Join Our Movement</h2>
          <p>
            Become part of a community that values beauty, trust, and transparency. 
            Sign up, explore, share your stash, and find your next favorite product today!
          </p>
        </motion.div>

        <motion.div 
          className="about-image"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
        >
          <img src='https://skyatransdermic.com/cdn/shop/articles/Top_10_Cosmetic_Companies_in_Uganda_1100x.jpg?v=1734583296' alt="Cosmetics Sharing" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
