import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";

const productData = {
  1: {
    name: "Rose Water Toner",
    image: "https://i.pinimg.com/736x/38/17/c3/3817c37dbb8f09c0e0630b9841a297a1.jpg",
    description: "Detailed info about the rose water toner...",
    price: 200,
  },
  2: {
    name: "Matte Lipstick",
    image: "https://i.pinimg.com/736x/7d/06/9f/7d069fd1801bec30b26e1ca627035481.jpg",
    description: "Detailed info about the matte lipstick...",
    price: 350,
  },
  3: {
    name: "Organic Moisturizer",
    image: "https://i.pinimg.com/736x/f5/fd/e0/f5fde0b1a169f058a1e3f086b469eb36.jpg",
    description: "Detailed info about the moisturizer...",
    price: 300,
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const product = productData[id];

  if (!product) return <h2>Product not found</h2>;

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "300px",
          height: "250px",
          borderRadius: "12px",
          marginTop: "20px"
        }}
      />
      <p style={{ marginTop: "20px", fontSize: "18px" }}>{product.description}</p>
      <h3>Price: ₹{product.price}</h3>

      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => addToCart(product)}
          style={btnStyle}
        >
          Add to Cart
        </button>

        <button
          onClick={handleBuyNow}
          style={{ ...btnStyle, backgroundColor: "#2196f3", marginLeft: "15px" }}
        >
          Buy Now
        </button>

        <button
          onClick={() => navigate("/products")}
          style={{
            ...btnStyle,
            backgroundColor: "#888",
            marginLeft: "15px"
          }}
        >
          ← Back to Products
        </button>
      </div>
    </div>
  );
};

const btnStyle = {
  padding: "10px 20px",
  backgroundColor: "#ff6f61",
  color: "#fff",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px"
};

export default ProductDetail;
