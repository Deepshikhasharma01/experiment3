import React, { useState } from "react";
function ProductCard({ name, brand, price, originalPrice, stock, tag, emoji }) {
  const [added, setAdded] = useState(false);
  const stockLabel =
    stock === 0 ? "Out of Stock" :
    stock <= 3  ? `Only ${stock} left!` :
                  "In Stock";
  const stockColor =
    stock === 0 ? "red" :
    stock <= 3  ? "orange" :
                  "green";
  const discount = originalPrice > price
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : null;
  const handleAdd = () => {
    if (stock === 0) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };
  return (
    <div style={styles.card}>
      {/* Tag */}
      {tag && <span style={styles.tag}>{tag}</span>}

      {/* Image */}
      <div style={styles.imgBox}>{emoji}</div>
      {/* Details */}
      <div style={styles.body}>
        <p style={styles.brand}>{brand}</p>
        <h3 style={styles.name}>{name}</h3>
        {/* Price */}
        <div style={styles.priceRow}>
          <span style={styles.price}>
            ₹{price.toLocaleString("en-IN")}
          </span>
          {discount && (
            <>
              <span style={styles.oldPrice}>
                ₹{originalPrice.toLocaleString("en-IN")}
              </span>
              <span style={styles.discBadge}>-{discount}%</span>
            </>
          )}
        </div>

        {/* Stock Status */}
        <p style={{ ...styles.stock, color: stockColor }}>
          {stockLabel}
        </p>

        {/* Button */}
        <button
          onClick={handleAdd}
          disabled={stock === 0}
          style={{
            ...styles.btn,
            background: stock === 0 ? "#ccc"
                      : added       ? "#22c55e"
                      : "#222",
            cursor: stock === 0 ? "not-allowed" : "pointer",
          }}
        >
          {stock === 0 ? "Unavailable" : added ? "✓ Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
const styles = {
  card: {
    width: "220px",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    overflow: "hidden",
    fontFamily: "sans-serif",
    background: "#fff",
    position: "relative",
  },
  tag: {
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "#1e293b",
    color: "#fff",
    fontSize: "10px",
    fontWeight: "bold",
    padding: "3px 8px",
    borderRadius: "999px",
  },
  imgBox: {
    height: "130px",
    background: "#f3f4f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "52px",
  },
  body: {
    padding: "14px",
  },
  brand: {
    fontSize: "11px",
    color: "#9ca3af",
    margin: "0 0 4px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  name: {
    fontSize: "15px",
    fontWeight: "600",
    margin: "0 0 10px",
    color: "#111",
  },
  priceRow: {
    display: "flex",
    alignItems: "baseline",
    gap: "8px",
    marginBottom: "8px",
  },
  price: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#111",
  },
  oldPrice: {
    fontSize: "12px",
    color: "#9ca3af",
    textDecoration: "line-through",
  },
  discBadge: {
    fontSize: "11px",
    background: "#dcfce7",
    color: "#15803d",
    padding: "2px 6px",
    borderRadius: "999px",
  },
  stock: {
    fontSize: "12px",
    fontWeight: "500",
    margin: "0 0 12px",
  },
  btn: {
    width: "100%",
    padding: "9px",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
    transition: "background 0.2s",
  },
};
const products = [
  {
    id: 1,
    name: "Air Zoom Pro",
    brand: "Nike",
    price: 3499,
    originalPrice: 4999,
    stock: 10,
    tag: "SALE",
    emoji: "👟",
  },
  {
    id: 2,
    name: "Leather Wallet",
    brand: "Fossil",
    price: 1299,
    originalPrice: 1299,
    stock: 2,
    tag: "NEW",
    emoji: "👜",
  },
  {
    id: 3,
    name: "Smart Watch X1",
    brand: "Noise",
    price: 2999,
    originalPrice: 4499,
    stock: 0,
    tag: "HOT",
    emoji: "⌚",
  },
];
function App() {
  return (
    <div style={{
      padding: "40px",
      background: "#f9fafb",
      minHeight: "100vh",
    }}>
      <h2 style={{
        fontFamily: "sans-serif",
        marginBottom: "8px",
        color: "#111",
      }}>
        🛒 Product Cards
      </h2>
      <p style={{
        fontFamily: "sans-serif",
        fontSize: "14px",
        color: "#6b7280",
        marginBottom: "28px",
      }}>
        React Props · Conditional Rendering · Component Architecture
      </p>

      {/* Render all 3 cards using .map() */}
      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}>
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}

export default App;
