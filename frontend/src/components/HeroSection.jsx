import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem 4rem 4rem",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <p
            className="hero-subtitle"
            style={{
              color: "#888",
              fontSize: "18px",
              marginBottom: "2rem",
              fontWeight: "400",
              letterSpacing: "0.5px",
            }}
          >
            Admire — tech innovators and digital marketing experts
          </p>
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "600",
              lineHeight: "1.1",
              margin: "0 0 3rem 0",
              color: "#000",
              letterSpacing: "-2px",
            }}
          >
Technology built to move your business forward
          </h1>
          <div
            className="hero-actions"
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {/* Email input box */}
            <div style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              padding: "6px 6px 6px 20px",
              maxWidth: "480px",
            }}>
              <input
                type="email"
                placeholder="Enter your business email"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "15px",
                  color: "#333",
                  backgroundColor: "transparent",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              />
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <button style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px 22px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  Connect with us
                </button>
              </Link>
            </div>

            {/* Social proof row */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              maxWidth: "480px",
              
              padding: "4px 16px",
            }}>
              <img
                  src="/admire-logo.png"
                  alt="Admire Logo"
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "contain",
                  }}
                />
              <div style={{ display: "flex", gap: "2px" }}>
                {[1,2,3,4,5].map(s => (
                  <span key={s} style={{ color: "#ff4d4d", fontSize: "14px" }}>★</span>
                ))}
              </div>
              <div style={{ width: "1px", height: "16px", backgroundColor: "#e0e0e0" }} />
              <span style={{ fontSize: "13px", color: "#666" }}>
                Trusted by <strong style={{ color: "#000" }}>20+ businesses</strong> 
              </span>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div style={{ flexShrink: 0, width: "600px", height: "600px", position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src="/to-recreate-this-illustration-as-a-clean--scalable.svg"
            alt="Hero illustration"
            style={{ width: "100%", height: "100%", objectFit: "contain", position: "relative", zIndex: 1 }}
          />
          <div style={{
            position: "absolute",
            bottom: "2px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "55%",
            height: "18px",
            background: "radial-gradient(ellipse, rgba(0,0,0,0.25) 0%, transparent 70%)",
            borderRadius: "50%",
            zIndex: 0,
          }} />
        </div>
      </main>
    </div>
  );
}
