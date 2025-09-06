import React, { useEffect, useState } from "react";
import starImage from "../../../assets/master_home.jpg";

interface FloatingShape {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  speed: number;
  rotationSpeed: number;
  gradientStops: { stop1: number; stop2: number; stop3: number };
}

const SHAPE_COUNT_DESKTOP = 25;
const SHAPE_COUNT_MOBILE = 10;

const GenAIMasterclassHero: React.FC = () => {
  const [shapes, setShapes] = useState<FloatingShape[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 500 : false
  );

  // Track window resize for responsiveness
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 500);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Generate & animate shapes
  useEffect(() => {
    const count = isMobile ? SHAPE_COUNT_MOBILE : SHAPE_COUNT_DESKTOP;

    const generateShapes = (): FloatingShape[] =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        size: Math.random() * 60 + 20,
        speed: Math.random() * 0.5 + 0.1,
        rotationSpeed: Math.random() * 2 - 1,
        gradientStops: {
          stop1: Math.random() * 0.4 + 0.1,
          stop2: Math.random() * 0.6 + 0.2,
          stop3: Math.random() * 0.3 + 0.1,
        },
      }));

    setShapes(generateShapes());

    const interval = setInterval(() => {
      setShapes((prev) =>
        prev.map((shape) => ({
          ...shape,
          y: (shape.y + shape.speed) % 110,
          rotation: shape.rotation + shape.rotationSpeed,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, [isMobile]);

  // Inline responsive styles
  const shapeStyles = {
    container: {
      position: "relative" as const,
      height: "100dvh", // better for mobile toolbars
      backgroundImage: `url(${starImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    shapesContainer: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none" as const,
    },
    shape: (shape: FloatingShape) => ({
      position: "absolute" as const,
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size * 0.6}px`,
      background: `linear-gradient(45deg,
        rgba(138, 43, 226, ${shape.gradientStops.stop1}),
        rgba(75, 0, 130, ${shape.gradientStops.stop2}),
        rgba(138, 43, 226, ${shape.gradientStops.stop3}))`,
      transform: `rotate(${shape.rotation}deg) perspective(100px) rotateX(${
        Math.sin(shape.rotation * 0.01) * 15
      }deg)`,
      borderRadius: "4px",
      boxShadow: `0 0 ${shape.size * 0.5}px rgba(138, 43, 226, 0.3)`,
      transition: "transform 0.05s linear",
    }),
    contentCard: {
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      borderRadius: "16px",
      padding: isMobile ? "24px 32px" : "60px 80px",
      maxWidth: isMobile ? "90%" : "600px",
      boxShadow:
        "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(138, 43, 226, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      zIndex: 10,
      position: "relative" as const,
    },
    title: {
      fontSize: isMobile ? "26px" : "40px",
      fontWeight: 500,
      color: "#1a1a1a",
      lineHeight: "1.2",
      marginBottom: "24px",
      letterSpacing: "-0.02em",
    },
    highlight: {
      color: "#663898",
    },
    subtitle: {
      fontSize: isMobile ? "16px" : "22px",
      color: "#666",
      marginBottom: isMobile ? "24px" : "40px",
      fontWeight: 500,
    },
    subtitleHighlight: {
      color: "#663898",
      fontWeight: 500,
    },
    button: {
      backgroundColor: "#f9b233",
      color: "#000",
      border: "none",
      padding: isMobile ? "10px 18px" : "12px 24px",
      borderRadius: 4,
      fontSize: isMobile ? 14 : 16,
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    buttonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 12px 32px rgba(255, 149, 0, 0.4)",
    },
  };

  return (
    <div style={shapeStyles.container}>
      {/* Floating shapes */}
      <div style={shapeStyles.shapesContainer}>
        {shapes.map((shape) => (
          <div key={shape.id} style={shapeStyles.shape(shape)} />
        ))}
      </div>

      {/* Content */}
      <div style={shapeStyles.contentCard}>
        <h1 style={shapeStyles.title}>
          Can the GenAI's complex
          <br />
          transformer architecture
          <br />
          be <span style={shapeStyles.highlight}>simplified</span>?
        </h1>

        <p style={shapeStyles.subtitle}>
          Enroll in the{" "}
          <span style={shapeStyles.subtitleHighlight}>
            Technical Masterclass
          </span>
        </p>

        <button
          style={{
            ...shapeStyles.button,
            ...(isHovered ? shapeStyles.buttonHover : {}),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Find More
        </button>
      </div>
    </div>
  );
};

export default GenAIMasterclassHero;
