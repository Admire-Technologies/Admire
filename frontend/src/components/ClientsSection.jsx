import { useState } from "react";

const clients = [
  {
    name: "SQUIRE",
    style: { fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "22px", fontWeight: "900", letterSpacing: "0.06em" },
    description: "End-to-end mobile product design for a category-defining barbershop platform serving tens of thousands of professionals globally.",
  },
  {
    name: "✦ reap·",
    style: { fontFamily: "Georgia, serif", fontSize: "21px", fontWeight: "400", letterSpacing: "0.02em" },
    description: "Brand identity and digital experience design for a next-generation fintech platform redefining expense management.",
  },
  {
    name: "● elumity",
    style: { fontFamily: "Arial, sans-serif", fontSize: "20px", fontWeight: "700", letterSpacing: "0.01em" },
    description: "Full product design system and UX strategy for an AI-powered personal development and coaching application.",
  },
  {
    name: "B| BOHEMIAN\nRESEARCH",
    style: { fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "12px", fontWeight: "900", letterSpacing: "0.07em", whiteSpace: "pre-line", textAlign: "center" },
    description: "Visual identity, design language, and web presence for a cutting-edge independent research organisation.",
  },
  {
    name: "Ï IRON",
    style: { fontFamily: "'Arial Black', Arial, sans-serif", fontSize: "20px", fontWeight: "900", letterSpacing: "0.07em" },
    description: "Brand strategy and digital product design for a premium fitness technology company disrupting the home gym space.",
  },
  {
    name: "nue·",
    style: { fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "28px", fontWeight: "700", letterSpacing: "0.02em" },
    description: "End-to-end UX and interface design for a modern revenue operations platform built for high-growth B2B companies.",
  },
  {
    name: "GUMroaD",
    style: { fontFamily: "Arial, sans-serif", fontSize: "20px", fontWeight: "700", letterSpacing: "0.05em" },
    description: "Product design and growth-focused UX improvements for the world's leading creator commerce platform.",
  },
  {
    name: "✦ Vannin",
    style: { fontFamily: "Arial, sans-serif", fontSize: "20px", fontWeight: "700", letterSpacing: "0.01em" },
    description: "Brand identity and digital experience for a specialist litigation funding firm operating across global markets.",
  },
];

export default function ClientsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        padding: "8rem 4rem",
        fontFamily: "'DM Sans', sans-serif",
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          fontSize: "14px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#666",
          marginBottom: "2rem",
          fontWeight: "500",
        }}
      >
        CLIENTS
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "12px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {clients.map((client, i) => {
          const isHovered = hoveredIndex === i;

          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                aspectRatio: "1 / 1",
                background: isHovered ? "#111111" : "#f5f5f3",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                cursor: "pointer",
                transition: "background 0.22s ease",
                boxSizing: "border-box",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  ...client.style,
                  color: isHovered ? "#ffffff" : "#111111",
                  lineHeight: "1.15",
                  marginBottom: isHovered ? "10px" : "0",
                  transition: "color 0.22s ease, margin-bottom 0.2s ease",
                  display: "block",
                }}
              >
                {client.name}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "400",
                  color: "#999999",
                  lineHeight: "1.5",
                  fontFamily: "Arial, sans-serif",
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 0.22s ease 0.06s, transform 0.22s ease 0.06s",
                }}
              >
                {client.description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
