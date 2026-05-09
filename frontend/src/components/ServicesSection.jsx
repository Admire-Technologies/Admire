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
        alignItems: "center",
        padding: "60px 80px",
        fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
        userSelect: "none",
      }}
    >
      <div style={{ width: "100%" }}>
        {/* SERVICES label */}
        <p
          style={{
            color: "#b5f23d",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.25em",
            marginBottom: "32px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          SERVICES
        </p>

        {/* Service items */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {services.map((service, i) => {
            const isHovered = hoveredIndex === i;
            const isMotion = service.label === "MOTION";

            return (
              <div
                key={service.label}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: "relative",
                  cursor: "pointer",
                  background: isHovered ? "#b5f23d" : "transparent",
                  margin: "0 -80px",
                  padding: "0 80px",
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
    </div>
  );
}
