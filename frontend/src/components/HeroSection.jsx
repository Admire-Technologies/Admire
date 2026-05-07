import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentDevice, setCurrentDevice] = useState(0);

  // Device rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDevice((prev) => (prev + 1) % 3);
    }, 2500); // Change device every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  const devices = [
    {
      name: "laptop",
      src: "/images/laptop.png",
      alt: "Laptop Device",
      width: "60px",
      height: "auto",
    },
    {
      name: "smartphone",
      src: "/images/smartphone.png",
      alt: "Smartphone Device",
      width: "40px",
      height: "auto",
    },
    {
      name: "tablet",
      src: "/images/tablet.png",
      alt: "Tablet Device",
      width: "55px",
      height: "auto",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes popIn {
          0% {
            transform: rotate(15deg) translateY(15px) scale(0.6);
            opacity: 0;
          }
          50% {
            transform: rotate(15deg) translateY(-3px) scale(1.05);
          }
          100% {
            transform: rotate(15deg) translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        .device-container {
          position: relative;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .device-icon {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .device-icon.active {
          animation: popIn 0.6s ease-out;
        }
        
        .device-image {
          display: block;
          object-fit: contain;
        }
      `}</style>

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 4rem 4rem",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
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
            We're Admire — tech innovators and digital marketing experts
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
            We help businesses grow through cutting-edge{" "}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                verticalAlign: "middle",
              }}
            >
              <span
                className="device-container"
                style={{
                  backgroundColor: "#000",
                  borderRadius: "16px",
                  transform: "rotate(-15deg)",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  overflow: "visible",
                }}
              >
                {/* Animated device images */}
                {devices.map((device, index) => (
                  <div
                    key={device.name}
                    className={`device-icon ${
                      currentDevice === index ? "active" : ""
                    }`}
                    style={{
                      transform: `
                        rotate(15deg) 
                        translateY(${currentDevice === index ? "0" : "15px"}) 
                        scale(${currentDevice === index ? "1" : "0.7"})
                      `,
                      opacity: currentDevice === index ? 1 : 0,
                    }}
                  >
                    <img
                      src={device.src}
                      alt={device.alt}
                      className="device-image"
                      style={{
                        width: device.width,
                        height: device.height,
                        filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))",
                      }}
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML =
                          device.name === "laptop"
                            ? "💻"
                            : device.name === "smartphone"
                            ? "📱"
                            : "📟";
                        e.target.parentElement.style.fontSize = "35px";
                      }}
                    />
                  </div>
                ))}
              </span>
              technology
            </span>
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
                }}
              >
                <span
                  style={{
                    color: "#ff4d4d",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  A
                </span>
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
    </>
  );
}
