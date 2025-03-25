import React from "react";

const TravelCard = ({ name, location, description, price, image }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div style={{ padding: "24px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>{name}</h2>
        <p style={{ color: "#6B7280" }}>{location}</p>
        <p style={{ marginTop: "8px", color: "#374151" }}>{description}</p>
        <p
          style={{
            marginTop: "16px",
            fontSize: "18px",
            fontWeight: "600",
            color: "#2563EB",
          }}
        >
          {price}
        </p>
      </div>
    </div>
  );
};

export default TravelCard;
