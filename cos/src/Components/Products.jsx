import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  WhatsappShareButton,
  FacebookShareButton,
  WhatsappIcon,
  FacebookIcon,
} from "react-share";
import "./css/Products.css";

const sampleProducts = [
  {
    id: 1,
    name: "Rose Water Toner",
    description: "Refresh, hydrate, and restore your skin’s natural glow with our Rose Water Toner — a gentle yet powerful formula crafted from pure rose extracts.",
    image: "https://i.pinimg.com/736x/38/17/c3/3817c37dbb8f09c0e0630b9841a297a1.jpg"
  },
  {
    id: 2,
    name: "Matte Lipstick",
    description: "Make a bold statement with our Matte Lipstick, where rich color meets velvety comfort.",
    image: "https://i.pinimg.com/736x/7d/06/9f/7d069fd1801bec30b26e1ca627035481.jpg"
  },
  {
    id: 3,
    name: "Organic Moisturizer",
    description: "Nourish your skin the natural way with our Organic Moisturizer, crafted with a blend of pure botanical extracts and skin-loving ingredients.",
    image: "https://i.pinimg.com/736x/f5/fd/e0/f5fde0b1a169f058a1e3f086b469eb36.jpg"
  },
  {
    id: 4,
    name: "Eyeliner",
    description: "Elevate your eye game with our precision-tip eyeliner, designed for effortless application and long-lasting wear. ",
    image: "https://www.lakmeindia.com/cdn/shop/files/24894_S3-8901030979552_1000x.jpg?v=1709807082"
  },
  {
    id: 5,
    name: "Face Mask",
    description: "Give your skin the ultimate reset with our Face Mask, a powerful yet gentle treatment designed to purify, hydrate, and rejuvenate.",
    image: "https://image.made-in-china.com/202f0j00NCmhOBLkPcbV/Belleza-Korea-Skin-Care-Facial-Mask-Fruit-Beauty-Face-Mask-Mascarillasl-Facial-Carrot-Kiwi-Whitening-Face-Sheet-Mask.webp"
  }
];

const Products = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-wrapper">
      {/* ✅ Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
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
          })
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
