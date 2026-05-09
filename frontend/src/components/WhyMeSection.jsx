import { useEffect, useRef, useState } from "react";
import SpeedometerGauge from "./SpeedometerGauge";

// Counter component with scroll trigger
function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const startValue = 0;
    const endValue = target;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(
        easeOutQuart * (endValue - startValue) + startValue
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <div
      ref={counterRef}
      style={{
        fontSize: "72px",
        fontWeight: "300",
        color: "#000",
        marginBottom: "0.5rem",
        lineHeight: "1",
      }}
    >
      {count}
      {suffix}
    </div>
  );
}

// SkipMiddlemen Component
const skipMiddlemenStyles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "2rem",
    width: "100%",
    fontFamily: "'DM Sans', sans-serif",
  },
  // LEFT
  leftPanel: {
    background: "#f5f5f5",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem",
    minHeight: "280px",
  },
  verticalFlow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
  },
  dotGreen: {
    width: 22,
    height: 22,
    background: "#c4ff4d",
    borderRadius: "50%",
    flexShrink: 0,
  },
  dashedLine: {
    width: 1,
    height: 50,
    borderLeft: "1.5px dashed #888",
  },
  arrowChar: {
    fontSize: 14,
    color: "#555",
    lineHeight: 1,
  },
  labelSkip: {
    fontSize: 26,
    fontWeight: 600,
    color: "#1a1a1a",
    letterSpacing: "-0.03em",
    textAlign: "center",
  },
  dotBlack: {
    width: 22,
    height: 22,
    background: "#1a1a1a",
    borderRadius: "50%",
    flexShrink: 0,
  },
  // RIGHT
  rightPanel: {
    background: "#f5f5f5",
    borderRadius: "20px",
    padding: "3rem",
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gridTemplateRows: "auto 1fr",
    position: "relative",
    overflow: "hidden",
    minHeight: "280px",
  },
  headline: {
    fontSize: 36,
    fontWeight: 500,
    color: "#1a1a1a",
    lineHeight: 1.2,
    letterSpacing: "-0.03em",
    gridColumn: "1 / 3",
    alignSelf: "start",
    margin: "0 0 3rem 0",
  },
  priceCards: {
    alignSelf: "end",
    gridColumn: 1,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: "auto",
  },
  cardSubscription: {
    background: "#1a1a1a",
    borderRadius: 50,
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 40,
  },
  cardSubLabel: {
    fontSize: 15,
    fontWeight: 500,
    color: "white",
    letterSpacing: "-0.01em",
  },
  cardSubPrice: {
    fontSize: 16,
    fontWeight: 600,
    color: "#c4ff4d",
  },
  cardAgency: {
    background: "#dcdcdc",
    borderRadius: 50,
    padding: "16px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 40,
  },
  cardAgencyLabel: {
    fontSize: 15,
    fontWeight: 400,
    color: "#555",
    letterSpacing: "-0.01em",
  },
  cardAgencyPrice: {
    fontSize: 15,
    fontWeight: 400,
    color: "#555",
  },
  statBlock: {
    gridColumn: 2,
    gridRow: "2 / 4",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  statUpto: {
    fontSize: 14,
    color: "#888",
    fontWeight: 400,
    marginBottom: 4,
    letterSpacing: "-0.01em",
  },
  statNumber: {
    fontSize: 100,
    fontWeight: 300,
    color: "#1a1a1a",
    lineHeight: 1,
    letterSpacing: "-0.05em",
  },
  statLabel: {
    fontSize: 14,
    color: "#555",
    fontWeight: 400,
    textAlign: "right",
    marginTop: 4,
    letterSpacing: "-0.01em",
  },
};

function SkipMiddlemen() {
  return (
    <div style={skipMiddlemenStyles.wrapper}>
      {/* LEFT PANEL */}
      <div style={skipMiddlemenStyles.leftPanel}>
        <div style={skipMiddlemenStyles.verticalFlow}>
          <div style={skipMiddlemenStyles.dotGreen} />
          <div style={skipMiddlemenStyles.dashedLine} />
          <span style={skipMiddlemenStyles.arrowChar}>↑</span>
          <div style={skipMiddlemenStyles.dashedLine} />
          <span style={skipMiddlemenStyles.labelSkip}>Skip middlemen</span>
          <div style={skipMiddlemenStyles.dashedLine} />
          <span style={skipMiddlemenStyles.arrowChar}>↓</span>
          <div style={skipMiddlemenStyles.dashedLine} />
          <div style={skipMiddlemenStyles.dotBlack} />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div style={skipMiddlemenStyles.rightPanel}>
        <h2 style={skipMiddlemenStyles.headline}>
          Senior-level work.
          <br />
          No agency markup
        </h2>
        <div style={skipMiddlemenStyles.priceCards}>
          <div style={skipMiddlemenStyles.cardSubscription}>
            <span style={skipMiddlemenStyles.cardSubLabel}>
              My subscription
            </span>
            <span style={skipMiddlemenStyles.cardSubPrice}>$</span>
          </div>
          <div style={skipMiddlemenStyles.cardAgency}>
            <span style={skipMiddlemenStyles.cardAgencyLabel}>Agency</span>
            <span style={skipMiddlemenStyles.cardAgencyPrice}>$$$</span>
          </div>
        </div>
        <div style={skipMiddlemenStyles.statBlock}>
          <span style={skipMiddlemenStyles.statUpto}>Up to</span>
          <span style={skipMiddlemenStyles.statNumber}>5×</span>
          <span style={skipMiddlemenStyles.statLabel}>Lower average price</span>
        </div>
      </div>
    </div>
  );
}

export default function WhyMeSection() {
  return (
    <>
      <style>
        {`
          @keyframes scrollLeftToRight {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          
          @keyframes scrollRightToLeft {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
      <section
        style={{
          width: "100%",
          padding: "8rem 4rem",
          fontFamily: "'DM Sans', sans-serif",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "6rem",
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
              WHY ADMIRE
            </p>
            <h2
              style={{
                fontSize: "64px",
                fontWeight: "600",
                lineHeight: "1.1",
                margin: "0 0 0.5rem 0",
                color: "#000",
              }}
            >
              Tech solutions
            </h2>
            <h2
              style={{
                fontSize: "64px",
                fontWeight: "600",
                lineHeight: "1.1",
                margin: "0",
                color: "#ccc",
              }}
            >
              That drive results
            </h2>
          </div>

          {/* Feature Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 1fr",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            {/* Card 1 - Cross-industry experience */}
            <div
              style={{
                backgroundColor: "#f5f5f5",
                borderRadius: "20px",
                padding: "3rem",
                minHeight: "280px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  lineHeight: "1.3",
                  margin: "0 0 3rem 0",
                  color: "#000",
                }}
              >
                Full-stack development
                <br />& digital marketing
              </h3>

              <div style={{ position: "relative", height: "80px" }}>
                {/* Top row - scrolling left to right */}
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    overflow: "hidden",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      animation: "scrollLeftToRight 20s linear infinite",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {[
                      "React",
                      "Node.js",
                      "SEO",
                      "Python",
                      "AWS",
                      "Analytics",
                      "React",
                      "Node.js",
                      "SEO",
                      "Python",
                      "AWS",
                      "Analytics",
                    ].map((tag, index) => (
                      <span
                        key={index}
                        style={{
                          backgroundColor:
                            tag === "React" || tag === "SEO"
                              ? "#000"
                              : "#e0e0e0",
                          color:
                            tag === "React" || tag === "SEO" ? "#fff" : "#000",
                          padding: "8px 16px",
                          borderRadius: "20px",
                          fontSize: "13px",
                          fontWeight: "500",
                          flexShrink: 0,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom row - scrolling right to left */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      animation: "scrollRightToLeft 25s linear infinite",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {[
                      "PPC Ads",
                      "Social Media",
                      "E-commerce",
                      "Mobile Apps",
                      "Branding",
                      "Marketing",
                      "PPC Ads",
                      "Social Media",
                      "E-commerce",
                      "Mobile Apps",
                      "Branding",
                      "Marketing",
                    ].map((tag, index) => (
                      <span
                        key={index}
                        style={{
                          backgroundColor: "#e0e0e0",
                          color: "#000",
                          padding: "8px 16px",
                          borderRadius: "20px",
                          fontSize: "13px",
                          fontWeight: "500",
                          flexShrink: 0,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Conversion-centric design with Speedometer */}
            <div
              style={{
                backgroundColor: "#f5f5f5",
                borderRadius: "20px",
                padding: "3rem",
                minHeight: "280px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <SpeedometerGauge
                conversionRate={6.84}
                activeTicks={14}
                title="Conversion-centric design"
                label="Conversion rate"
                logo="A"
              />
            </div>
          </div>

          {/* Skip Middlemen Component */}
          <div style={{ marginBottom: "10rem" }}>
            <SkipMiddlemen />
          </div>

          {/* Statistics */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "6rem",
              width: "100%",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <AnimatedCounter target={5} suffix="+" duration={2000} />
              <div
                style={{
                  fontSize: "14px",
                  color: "#666",
                }}
              >
                Years of innovation
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <AnimatedCounter target={200} suffix="+" duration={2500} />
              <div
                style={{
                  fontSize: "14px",
                  color: "#666",
                }}
              >
                Successful projects
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <AnimatedCounter target={50} suffix="M+" duration={3000} />
              <div
                style={{
                  fontSize: "14px",
                  color: "#666",
                }}
              >
                Users reached through our solutions
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
