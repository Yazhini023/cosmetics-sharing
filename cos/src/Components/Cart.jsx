import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                margin: "15px auto",
                padding: "10px",
                borderRadius: "12px",
                maxWidth: "500px",
                position: "relative"
              }}
            >
              <h3>{item.name}</h3>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "200px", borderRadius: "12px" }}
              />
              <p>Price: ₹{item.price}</p>

              <button
                onClick={() => removeFromCart(index)}
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#e53935",
                  color: "#fff",
                  border: "none",
                  borderRadius: "20px",
                  marginTop: "10px",
                  cursor: "pointer"
                }}
              >
                🗑 Remove
              </button>
            </div>
          ))}
          <h2>Total: ₹{total}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
