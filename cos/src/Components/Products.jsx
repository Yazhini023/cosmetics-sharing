import React from "react";
import { Link } from "react-router-dom";
import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon
} from "react-share";
import "./css/Products.css";

const sampleProducts = [
  {
    id: 1,
    name: "Rose Water Toner",
    description: "Refreshing toner with natural rose extracts.",
    image: "https://i.pinimg.com/736x/38/17/c3/3817c37dbb8f09c0e0630b9841a297a1.jpg"
  },
  {
    id: 2,
    name: "Matte Lipstick",
    description: "Long-lasting matte lipstick in crimson red.",
    image: "https://i.pinimg.com/736x/7d/06/9f/7d069fd1801bec30b26e1ca627035481.jpg"
  },
  {
    id: 3,
    name: "Organic Moisturizer",
    description: "Gentle and hydrating moisturizer for all skin types.",
    image: "https://i.pinimg.com/736x/f5/fd/e0/f5fde0b1a169f058a1e3f086b469eb36.jpg"
  }
];

const Products = () => {
  return (
    <div className="product-list">
      {sampleProducts.map((product) => {
        const shareUrl = `https://yourwebsite.com/product/${product.id}`;
        const shareText = `Check out this awesome product: ${product.name}`;
        return (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>

            <div className="share-buttons">
              <WhatsappShareButton url={shareUrl} title={shareText}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <FacebookShareButton url={shareUrl} quote={shareText}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={shareText}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Share on Instagram"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                  alt="Instagram"
                  className="icon"
                  width="32"
                />
              </a>
            </div>

            <Link to={`/product/${product.id}`} className="view-details-btn">
              View Details
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
