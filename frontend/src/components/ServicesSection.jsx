import { useState } from "react";

const services = [
  { label: "BRANDING", count: 5 },
  { label: "WEBSITES", count: 17 },
  { label: "MOBILE APPS", count: 12 },
  { label: "PRODUCT DESIGN", count: 21 },
  { label: "MOTION", count: 12 },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      style={{
        background: "#111111",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px 0",
        fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
        userSelect: "none",
      }}
    >
      {/* Header — constrained */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", padding: "0 4rem", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            style={{
              color: "#b5f23d",
              fontSize: "14px",
              fontWeight: "500",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "2rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            SERVICES
          </p>
          <h2 style={{ fontSize: "64px", fontWeight: "600", lineHeight: "1.1", margin: "0 0 0.5rem 0", color: "#ffffff", fontFamily: "'DM Sans', sans-serif" }}>
            What we do
          </h2>
          <p style={{ fontSize: "64px", fontWeight: "600", lineHeight: "1.1", margin: "0", color: "#444", fontFamily: "'DM Sans', sans-serif" }}>
            Best in class
          </p>
        </div>
      </div>

      {/* Service items — full width bleed */}
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {services.map((service, i) => {
          const isHovered = hoveredIndex === i;

          return (
            <div
              key={service.label}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                cursor: "pointer",
                background: isHovered ? "#b5f23d" : "transparent",
                padding: "0 4rem",
                transition: "background 0.2s ease",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(48px, 7vw, 96px)",
                  fontWeight: "900",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.05",
                  color: isHovered ? "#111111" : "#ffffff",
                  transition: "color 0.2s ease",
                  display: "block",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }}
              >
                {service.label}
              </span>
              <sup
                style={{
                  fontSize: "clamp(10px, 1.2vw, 16px)",
                  fontWeight: "400",
                  color: isHovered ? "#111111" : "#666666",
                  marginLeft: "8px",
                  verticalAlign: "super",
                  lineHeight: "1",
                  transition: "color 0.2s ease",
                  fontFamily: "Arial, sans-serif",
                  marginTop: "-20px",
                }}
              >
                {service.count}
              </sup>
            </div>
          );
        })}
      </div>
    </div>
  );
}
