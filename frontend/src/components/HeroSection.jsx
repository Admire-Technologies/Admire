export default function HeroSection() {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 4rem",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            paddingBottom:"8rem",
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
              View our solutions
            </button>
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
      </main>
    </div>
  );
}
