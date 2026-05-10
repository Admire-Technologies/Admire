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
              fontSize: "70px",
              fontWeight: "600",
              lineHeight: "1.1",
              margin: "0 0 3rem 0",
              color: "#000",
              letterSpacing: "-2px",
            }}
          >
Empowering business growth with smart technology
          </h1>
          <div
            className="hero-actions"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <Link to="/work" style={{ textDecoration: "none" }}>
            <button
              style={{
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "30px",
                padding: "16px 32px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "500",
                whiteSpace: "nowrap",
              }}
            >
              View our work
            </button>
            </Link>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/admire-logo.png"
                  alt="Admire Logo"
                  style={{
                    width: "20px",
                    height: "20px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div style={{ display: "flex", gap: "3px" }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{ color: "#ff4d4d", fontSize: "16px" }}
                  >
                    ★
                  </span>
                ))}
              </div>
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
