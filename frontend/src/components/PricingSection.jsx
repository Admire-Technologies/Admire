import React from "react";

const pricingStyles = {
  section: {
    width: "100%",
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
  sectionLabel: {
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
    color: "#ccc",
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
    gap: "2rem",
    width: "100%",
  },
  // LEFT PANEL - Ongoing Partnership
  leftPanel: {
    background: "#1a1a1a",
    padding: "3rem",
    minHeight: "280px",
    color: "#fff",
    position: "relative",
  },
  planHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  planTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#fff",
    margin: "0",
  },
  toggle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "12px",
    color: "#999",
  },
  toggleSwitch: {
    width: "40px",
    height: "20px",
    backgroundColor: "#c4ff4d",
    borderRadius: "10px",
    position: "relative",
    cursor: "pointer",
  },
  toggleKnob: {
    width: "16px",
    height: "16px",
    backgroundColor: "#000",
    borderRadius: "50%",
    position: "absolute",
    top: "2px",
    right: "2px",
    transition: "all 0.3s ease",
  },
  description: {
    fontSize: "14px",
    color: "#999",
    lineHeight: "1.5",
    marginBottom: "2rem",
  },
  price: {
    fontSize: "48px",
    fontWeight: "300",
    color: "#fff",
    margin: "0",
    marginBottom: "2rem",
  },
  priceUnit: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#999",
  },
  featureList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
    fontSize: "14px",
    color: "#fff",
  },
  checkIcon: {
    width: "16px",
    height: "16px",
    backgroundColor: "#c4ff4d",
    borderRadius: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    color: "#000",
    fontWeight: "bold",
  },
  includedBadge: {
    backgroundColor: "#c4ff4d",
    color: "#000",
    padding: "2px 8px",
    borderRadius: "12px",
    fontSize: "10px",
    fontWeight: "600",
    textTransform: "uppercase",
    marginLeft: "8px",
  },
  ctaButton: {
    backgroundColor: "#c4ff4d",
    color: "#000",
    border: "none",
    borderRadius: "25px",
    padding: "12px 24px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "2rem",
    width: "fit-content",
  },
  // RIGHT PANEL - Design Sprint
  rightPanel: {
    background: "#f5f5f5",
    padding: "3rem",
    minHeight: "280px",
    color: "#000",
    position: "relative",
  },
  sprintTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#000",
    margin: "0 0 0.5rem 0",
  },
  sprintDescription: {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.5",
    marginBottom: "2rem",
  },
  sprintPrice: {
    fontSize: "48px",
    fontWeight: "300",
    color: "#000",
    margin: "0",
    marginBottom: "0.5rem",
  },
  oneTimeLabel: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "2rem",
  },
  deliverablesList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  deliverableItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
    fontSize: "14px",
    color: "#000",
  },
  deliverableIcon: {
    width: "16px",
    height: "16px",
    backgroundColor: "#e0e0e0",
    borderRadius: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buyButton: {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    padding: "12px 24px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "2rem",
    width: "fit-content",
  },
};

export default function PricingSection() {
  return (
    <section style={pricingStyles.section}>
      <div style={pricingStyles.container}>
        {/* Header */}
        <div style={pricingStyles.header}>
          <p style={pricingStyles.sectionLabel}>PRICING</p>
          <h2 style={pricingStyles.mainTitle}>Choose your plan</h2>
          <h2 style={pricingStyles.subTitle}>Start building today</h2>
        </div>

        {/* Pricing Cards */}
        <div style={pricingStyles.wrapper}>
          {/* LEFT PANEL - Ongoing Partnership */}
          <div style={pricingStyles.leftPanel}>
            <div style={pricingStyles.planHeader}>
              <h3 style={pricingStyles.planTitle}>Ongoing partnership</h3>
              <div style={pricingStyles.toggle}>
                <span>Monthly</span>
                <div style={pricingStyles.toggleSwitch}>
                  <div style={pricingStyles.toggleKnob}></div>
                </div>
                <span>Fixed</span>
              </div>
            </div>

            <p style={pricingStyles.description}>
              A dedicated design team. Unlimited output. Design, strategy, and
              no-code delivery — on retainer.
            </p>

            <div style={pricingStyles.price}>
              ₹4,99,995
              <span style={pricingStyles.priceUnit}>/month</span>
            </div>

            <ul style={pricingStyles.featureList}>
              <li style={pricingStyles.featureItem}>
                <span style={pricingStyles.checkIcon}>✓</span>
                Webflow or Framer development
                <span style={pricingStyles.includedBadge}>INCLUDED</span>
              </li>
              <li style={pricingStyles.featureItem}>
                <span style={pricingStyles.checkIcon}>✓</span>
                Up to two designers on your project
              </li>
              <li style={pricingStyles.featureItem}>
                <span style={pricingStyles.checkIcon}>✓</span>
                Unlimited design requests & revisions
              </li>
              <li style={pricingStyles.featureItem}>
                <span style={pricingStyles.checkIcon}>✓</span>
                48-hour turnarounds, weekdays
              </li>
              <li style={pricingStyles.featureItem}>
                <span style={pricingStyles.checkIcon}>✓</span>
                Weekly strategy calls + Slack integration
              </li>
              <li style={pricingStyles.featureItem}>
                <span style={pricingStyles.checkIcon}>✓</span>
                Built for 3+ month engagements
              </li>
            </ul>

            <button style={pricingStyles.ctaButton}>Book a call</button>
          </div>

          {/* RIGHT PANEL - Design Sprint */}
          <div style={pricingStyles.rightPanel}>
            <h3 style={pricingStyles.sprintTitle}>2-week design sprint</h3>
            <p style={pricingStyles.sprintDescription}>
              One focused build. A landing page, dashboard, brand starter, or up
              to 8 mobile screens.
            </p>

            <div style={pricingStyles.sprintPrice}>₹3,29,995</div>
            <p style={pricingStyles.oneTimeLabel}>One-time price</p>

            <ul style={pricingStyles.deliverablesList}>
              <li style={pricingStyles.deliverableItem}>
                <span style={pricingStyles.deliverableIcon}>🎯</span>
                Landing page
              </li>
              <li style={pricingStyles.deliverableItem}>
                <span style={pricingStyles.deliverableIcon}>📊</span>
                Dashboard
              </li>
              <li style={pricingStyles.deliverableItem}>
                <span style={pricingStyles.deliverableIcon}>📱</span>
                Mobile app
              </li>
              <li style={pricingStyles.deliverableItem}>
                <span style={pricingStyles.deliverableIcon}>🎨</span>
                Branding
              </li>
              <li style={pricingStyles.deliverableItem}>
                <span style={pricingStyles.deliverableIcon}>📋</span>
                Pitch Deck
              </li>
            </ul>

            <button style={pricingStyles.buyButton}>Buy now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
