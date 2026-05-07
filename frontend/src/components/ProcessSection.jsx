import React from "react";

const NetworkIcon = () => (
  <svg
    viewBox="0 0 260 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
  >
    <line x1="130" y1="40" x2="210" y2="85" stroke="#c8c8c8" strokeWidth="1" />
    <line x1="210" y1="85" x2="210" y2="175" stroke="#c8c8c8" strokeWidth="1" />
    <line
      x1="210"
      y1="175"
      x2="130"
      y2="220"
      stroke="#c8c8c8"
      strokeWidth="1"
    />
    <line x1="130" y1="220" x2="50" y2="175" stroke="#c8c8c8" strokeWidth="1" />
    <line x1="50" y1="175" x2="50" y2="85" stroke="#c8c8c8" strokeWidth="1" />
    <line x1="50" y1="85" x2="130" y2="40" stroke="#c8c8c8" strokeWidth="1" />
    <line x1="130" y1="40" x2="210" y2="175" stroke="#c8c8c8" strokeWidth="1" />
    <line x1="210" y1="85" x2="50" y2="175" stroke="#c8c8c8" strokeWidth="1" />
    <line x1="210" y1="85" x2="130" y2="220" stroke="#c8c8c8" strokeWidth="1" />
    <line x1="50" y1="85" x2="210" y2="175" stroke="#c8c8c8" strokeWidth="1" />
    <line x1="50" y1="85" x2="130" y2="220" stroke="#c8c8c8" strokeWidth="1" />
    <line x1="130" y1="40" x2="50" y2="175" stroke="#c8c8c8" strokeWidth="1" />
    <circle
      cx="130"
      cy="40"
      r="10"
      fill="white"
      stroke="#c0c0c0"
      strokeWidth="1.5"
    />
    <circle
      cx="210"
      cy="85"
      r="10"
      fill="white"
      stroke="#c0c0c0"
      strokeWidth="1.5"
    />
    <circle
      cx="210"
      cy="175"
      r="10"
      fill="white"
      stroke="#c0c0c0"
      strokeWidth="1.5"
    />
    <circle
      cx="130"
      cy="220"
      r="10"
      fill="white"
      stroke="#c0c0c0"
      strokeWidth="1.5"
    />
    <circle
      cx="50"
      cy="175"
      r="10"
      fill="white"
      stroke="#c0c0c0"
      strokeWidth="1.5"
    />
    <circle
      cx="50"
      cy="85"
      r="10"
      fill="white"
      stroke="#c0c0c0"
      strokeWidth="1.5"
    />
  </svg>
);

const WireframeIcon = () => (
  <svg
    viewBox="0 0 260 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
  >
    <rect
      x="55"
      y="55"
      width="150"
      height="150"
      stroke="#c8c8c8"
      strokeWidth="1.5"
      fill="white"
    />
    <rect
      x="130"
      y="55"
      width="75"
      height="75"
      stroke="#c8c8c8"
      strokeWidth="1"
      fill="none"
    />
    <circle
      cx="93"
      cy="167"
      r="37"
      stroke="#c8c8c8"
      strokeWidth="1.5"
      fill="none"
    />
    <line
      x1="130"
      y1="130"
      x2="205"
      y2="205"
      stroke="#c8c8c8"
      strokeWidth="1"
    />
    <circle
      cx="167"
      cy="93"
      r="18"
      stroke="#c8c8c8"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

const ConcentricIcon = () => (
  <svg
    viewBox="0 0 260 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
  >
    <circle cx="130" cy="130" r="110" stroke="#c8c8c8" strokeWidth="1" />
    <circle cx="130" cy="130" r="90" stroke="#c8c8c8" strokeWidth="1" />
    <circle cx="130" cy="130" r="70" stroke="#c8c8c8" strokeWidth="1" />
    <circle cx="130" cy="130" r="50" stroke="#c8c8c8" strokeWidth="1" />
    <line x1="130" y1="20" x2="130" y2="240" stroke="#c8c8c8" strokeWidth="1" />
    <line x1="20" y1="130" x2="240" y2="130" stroke="#c8c8c8" strokeWidth="1" />
    <line x1="52" y1="52" x2="208" y2="208" stroke="#c8c8c8" strokeWidth="1" />
    <line x1="208" y1="52" x2="52" y2="208" stroke="#c8c8c8" strokeWidth="1" />
  </svg>
);

const ArrowConnector = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: "0 8px",
      paddingBottom: "80px",
    }}
  >
    <svg
      viewBox="0 0 80 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 80, height: 16 }}
    >
      <line
        x1="0"
        y1="8"
        x2="70"
        y2="8"
        stroke="#999"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <polygon points="70,4 80,8 70,12" fill="#999" />
    </svg>
  </div>
);

const steps = [
  {
    number: "01",
    Icon: NetworkIcon,
    title: "Discovery & Strategy",
    description:
      "We dive into your goals, audience, and market to uncover real opportunities. In a matter of days we'll validate your ideas, map user journeys, and outline an MVP that's worth building.",
  },
  {
    number: "02",
    Icon: WireframeIcon,
    title: "Design & Prototyping",
    description:
      "From UX flows to pixel-perfect UI, I turn your ideas into an interactive product. Expect high-fidelity prototypes, intuitive layouts, and micro-interactions that elevate the experience.",
  },
  {
    number: "03",
    Icon: ConcentricIcon,
    title: "Testing & Validation",
    description:
      "Before launch, we stress-test the product with users, refine what matters most, and ensure your design decisions are backed by data — not guesses.",
  },
];

const styles = {
  section: {
    background: "#ebebeb",
    padding: "8rem 4rem",
    fontFamily: "'DM Sans', sans-serif",
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "6rem",
  },
  processLabel: {
    fontSize: "14px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#666",
    marginBottom: "2rem",
    fontWeight: "500",
  },
  mainTitle: {
    fontSize: "64px",
    fontWeight: "600",
    lineHeight: "1.1",
    margin: "0 0 0.5rem 0",
    color: "#000",
  },
  subTitle: {
    fontSize: "64px",
    fontWeight: "600",
    lineHeight: "1.1",
    margin: "0",
    color: "#d0d0d0",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr auto 1fr",
    alignItems: "center",
    maxWidth: 1200,
    margin: "0 auto",
  },
  step: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 32,
  },
  visual: {
    position: "relative",
    width: 260,
    height: 260,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    position: "relative",
    zIndex: 10,
    width: 72,
    height: 72,
    background: "#1a1a1a",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 0 10px white",
  },
  badgeText: {
    fontSize: 13,
    fontWeight: 500,
    color: "#b8ff3a",
    letterSpacing: "0.03em",
  },
  content: {
    textAlign: "center",
    maxWidth: 280,
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    color: "#1a1a1a",
    marginBottom: 14,
    letterSpacing: "-0.02em",
  },
  desc: {
    fontSize: 14,
    lineHeight: 1.7,
    color: "#888",
    fontWeight: 400,
  },
};

export default function ProcessSection() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Title Header */}
        <div style={styles.header}>
          <p style={styles.processLabel}>PROCESS</p>
          <h2 style={styles.mainTitle}>From idea to launch</h2>
          <p style={styles.subTitle}>I got you covered</p>
        </div>

        <div style={styles.grid}>
          {steps.map((step, i) => (
            <React.Fragment key={step.number}>
              <div style={styles.step}>
                <div style={styles.visual}>
                  <step.Icon />
                  <div style={styles.badge}>
                    <span style={styles.badgeText}>{step.number}</span>
                  </div>
                </div>
                <div style={styles.content}>
                  <h3 style={styles.title}>{step.title}</h3>
                  <p style={styles.desc}>{step.description}</p>
                </div>
              </div>
              {i < steps.length - 1 && <ArrowConnector />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
