import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 4rem",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="/admire-logo.png"
            alt="Admire Logo"
            style={{
              width: "158px",
              height: "48px",
              cursor: "pointer",
              flexShrink: 0,
              objectFit: "contain",
            }}
          />
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <button
            style={{
              backgroundColor: "#c4ff4d",
              border: "none",
              borderRadius: "30px",
              padding: "14px 28px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "500",
              whiteSpace: "nowrap",
            }}
          >
            Start your project
            <span style={{ fontSize: "20px" }}>→</span>
          </button>
        </Link>
      </header>
    </div>
  );
}
