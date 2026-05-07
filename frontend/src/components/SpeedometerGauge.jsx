import { useEffect, useRef, useState } from "react";

const TOTAL_TICKS = 22;
const CX = 150;
const CY = 155;
const R = 118;
const START_ANGLE = -180;
const END_ANGLE = 0;

function getTick(i) {
  const angle = START_ANGLE + (i / (TOTAL_TICKS - 1)) * (END_ANGLE - START_ANGLE);
  const rad = (angle * Math.PI) / 180;
  const isActive = i <= 14;
  const tickLen = isActive ? 14 : 10;
  const innerR = R - tickLen;
  const x1 = CX + innerR * Math.cos(rad);
  const y1 = CY + innerR * Math.sin(rad);
  const x2 = CX + R * Math.cos(rad);
  const y2 = CY + R * Math.sin(rad);
  return { x1, y1, x2, y2, isActive };
}

function getNeedleCoords(angleDeg, length = 105) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + length * Math.cos(rad),
    y: CY + length * Math.sin(rad),
  };
}

export default function SpeedometerGauge({
  conversionRate = 6.84,
  activeTicks = 14,
  title = "Conversion-centric design",
  label = "Conversion rate",
  logo = "RH",
}) {
  const targetAngle = START_ANGLE + (activeTicks / (TOTAL_TICKS - 1)) * 180;
  const [currentAngle, setCurrentAngle] = useState(START_ANGLE);
  const rafRef = useRef(null);

  useEffect(() => {
    let angle = START_ANGLE;
    const animate = () => {
      if (angle < targetAngle) {
        angle = Math.min(angle + 3, targetAngle);
        setCurrentAngle(angle);
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [targetAngle]);

  const needle = getNeedleCoords(currentAngle);
  const ticks = Array.from({ length: TOTAL_TICKS }, (_, i) => getTick(i));

  return (
    <div style={styles.card}>
      <p style={styles.title}>{title}</p>
      <div style={styles.gaugeWrapper}>
        <svg
          width="300"
          height="170"
          viewBox="0 0 300 170"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          {ticks.map((tick, i) => (
            <line
              key={i}
              x1={tick.x1.toFixed(2)}
              y1={tick.y1.toFixed(2)}
              x2={tick.x2.toFixed(2)}
              y2={tick.y2.toFixed(2)}
              stroke={tick.isActive ? "#c8c8c0" : "#d8d8d0"}
              strokeWidth={tick.isActive ? 2 : 1.5}
              strokeLinecap="round"
              opacity={tick.isActive ? 1 : 0.45}
            />
          ))}
          <line
            x1={CX}
            y1={CY}
            x2={needle.x.toFixed(2)}
            y2={needle.y.toFixed(2)}
            stroke="#1a1a1a"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        {/* Center badge */}
        <div style={styles.badge}>
          <span style={styles.logo}>{logo}</span>
        </div>
      </div>
      <div style={styles.info}>
        <div style={styles.rateLabel}>{label}</div>
        <div style={styles.rateValue}>
          <span style={styles.dot} />
          {conversionRate.toFixed(2)}%
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "transparent",
    borderRadius: 20,
    padding: "32px 28px 24px",
    maxWidth: 360,
    margin: "0 auto",
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    color: "#1a1a1a",
    margin: "0 0 20px 0",
    letterSpacing: "-0.3px",
    lineHeight: 1.35,
  },
  gaugeWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  badge: {
    position: "absolute",
    bottom: -4,
    left: "50%",
    transform: "translateX(-50%)",
    width: 58,
    height: 58,
    background: "#c4ff4d",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "4px solid #f5f5f5",
  },
  logo: {
    fontSize: 11,
    fontWeight: 700,
    color: "#1a1a1a",
    letterSpacing: "-0.5px",
    fontFamily: "serif",
    fontStyle: "italic",
  },
  info: {
    textAlign: "right",
    marginTop: 8,
  },
  rateLabel: {
    fontSize: 11,
    color: "#888",
    fontWeight: 400,
  },
  rateValue: {
    fontSize: 26,
    fontWeight: 600,
    color: "#1a1a1a",
    letterSpacing: "-1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    background: "#1a1a1a",
    borderRadius: "50%",
    display: "inline-block",
  },
};