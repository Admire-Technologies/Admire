import { useState, useEffect, useRef } from "react";

const PortfolioImage1 = () => (
  <div
    style={{
      overflow: "hidden",
      minWidth: "600px",
      height: "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      backgroundColor: "#f5f5f5",
      border: "1px solid #c4ff4d",
    }}
  >
    <img
      src="/admire-hrms.png"
      alt="Admire HRMS"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
);

const PortfolioImage2 = () => (
  <div
    style={{
      overflow: "hidden",
      minWidth: "600px",
      height: "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      backgroundColor: "#f5f5f5",
      border: "1px solid #c4ff4d",
    }}
  >
    <img
      src="/toyalumbunaties.png"
      alt="Toyalumbunaties"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
);

const PortfolioImage3 = () => (
  <div
    style={{
      overflow: "hidden",
      minWidth: "600px",
      height: "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      backgroundColor: "#f5f5f5",
      border: "1px solid #c4ff4d",
    }}
  >
    <img
      src="/admire-ecommerce.png"
      alt="Admire E-commerce"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
);

const PortfolioImage4 = () => (
  <div
    style={{
      overflow: "hidden",
      minWidth: "600px",
      height: "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      backgroundColor: "#f5f5f5",
      border: "1px solid #c4ff4d",
    }}
  >
    <img
      src="/parikarna.png"
      alt="Parikarna"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
);

const PortfolioImage5 = () => (
  <div
    style={{
      overflow: "hidden",
      minWidth: "600px",
      height: "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      backgroundColor: "#f5f5f5",
      border: "1px solid #c4ff4d",
    }}
  >
    <img
      src="/admire-salesforce.png"
      alt="Admire Salesforce"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
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
    <div style={{ backgroundColor: "#f2f2f2" }}>
      {/* Auto-Scrolling Portfolio Section */}
      <section
        ref={portfolioRef}
        style={{
          display: "flex",
          overflowX: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        <PortfolioImage1 />
        <PortfolioImage2 />
        <PortfolioImage3 />
        <PortfolioImage4 />
        <PortfolioImage5 />
        <PortfolioImage1 />
        <PortfolioImage2 />
        <PortfolioImage3 />
        <PortfolioImage4 />
        <PortfolioImage5 />
        <PortfolioImage1 />
        <PortfolioImage2 />
        <PortfolioImage3 />
        <PortfolioImage4 />
        <PortfolioImage5 />
      </section>
    </div>
  );
}
