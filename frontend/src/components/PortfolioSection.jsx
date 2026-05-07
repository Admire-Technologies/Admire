import { useState, useEffect, useRef } from "react";

const PortfolioCard1 = () => (
  <div
    style={{
      backgroundColor: "#fff",
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      minWidth: "400px",
      height: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      flexShrink: 0,
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        right: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "12px",
        color: "#666",
      }}
    >
      <span>🎯 Carousel</span>
      <div style={{ display: "flex", gap: "12px" }}>
        <span>New to 3</span>
        <span>Chart View</span>
      </div>
      <button
        style={{
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "20px",
          padding: "6px 16px",
          fontSize: "11px",
          cursor: "pointer",
        }}
      >
        Contact sales
      </button>
    </div>
    <div style={{ fontSize: "80px", color: "#ddd" }}>📦</div>
  </div>
);

const PortfolioCard2 = () => (
  <div
    style={{
      backgroundColor: "#000",
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      minWidth: "400px",
      height: "400px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      flexShrink: 0,
    }}
  >
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "20px", color: "#c4ff4d", fontSize: "14px" }}>
        zone
      </div>
      <div
        style={{ fontSize: "64px", fontWeight: "300", marginBottom: "10px" }}
      >
        $ 32<span style={{ fontSize: "32px", color: "#666" }}>.2</span>
      </div>
      <div style={{ fontSize: "12px", color: "#666" }}>
        EURO CURRENCY EXCHANGE
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "40px",
        }}
      >
        <div>
          <div style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>
            1
          </div>
          <div style={{ fontSize: "32px" }}>💵</div>
        </div>
        <div>
          <div style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>
            2
          </div>
          <div style={{ fontSize: "32px" }}>📊</div>
        </div>
        <div>
          <div style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>
            3
          </div>
          <div style={{ fontSize: "32px" }}>⚙️</div>
        </div>
      </div>
    </div>
  </div>
);

const PortfolioCard3 = () => (
  <div
    style={{
      backgroundColor: "#fff",
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      minWidth: "400px",
      height: "400px",
      padding: "20px",
      flexShrink: 0,
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <div style={{ fontSize: "14px", fontWeight: "600" }}>📊 Flatbush</div>
      <div style={{ fontSize: "12px", color: "#666" }}>
        Wednesday, October 14
      </div>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "12px",
        fontSize: "12px",
      }}
    >
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "12px",
          borderRadius: "8px",
        }}
      >
        <div style={{ color: "#666", marginBottom: "4px" }}>Admin 7</div>
        <div style={{ fontWeight: "600" }}>Jan 11</div>
      </div>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "12px",
          borderRadius: "8px",
        }}
      >
        <div style={{ color: "#666", marginBottom: "4px" }}>Jan 7</div>
        <div style={{ fontWeight: "600" }}>Jan 11</div>
      </div>
    </div>
  </div>
);

export default function PortfolioSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const portfolioRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        if (portfolioRef.current) {
          const maxScroll =
            portfolioRef.current.scrollWidth - portfolioRef.current.clientWidth;
          const newPosition = prev + 1;
          if (newPosition >= maxScroll) {
            return 0;
          }
          return newPosition;
        }
        return prev;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Apply scroll position
  useEffect(() => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <>
      {/* Auto-Scrolling Portfolio Section */}
      <section
        ref={portfolioRef}
        style={{
          margin: "4rem auto 0",
          padding: "0 4rem",
          display: "flex",
          gap: "2rem",
          overflowX: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        <PortfolioCard1 />
        <PortfolioCard2 />
        <PortfolioCard3 />
        <PortfolioCard1 />
        <PortfolioCard2 />
        <PortfolioCard3 />
      </section>
    </>
  );
}
