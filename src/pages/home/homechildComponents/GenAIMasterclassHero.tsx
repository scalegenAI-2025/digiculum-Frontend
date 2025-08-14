import React, { useEffect, useState } from "react";

interface FloatingShape {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  speed: number;
  rotationSpeed: number;
}

const GenAIMasterclassHero: React.FC = () => {
  const [shapes, setShapes] = useState<FloatingShape[]>([]);

  useEffect(() => {
    // Generate initial floating shapes
    const generateShapes = (): FloatingShape[] => {
      return Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        size: Math.random() * 60 + 20,
        speed: Math.random() * 0.5 + 0.1,
        rotationSpeed: Math.random() * 2 - 1,
      }));
    };

    setShapes(generateShapes());

    // Animate shapes
    const interval = setInterval(() => {
      setShapes((prevShapes) =>
        prevShapes.map((shape) => ({
          ...shape,
          y: (shape.y + shape.speed) % 110,
          rotation: shape.rotation + shape.rotationSpeed,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const shapeStyles = {
    container: {
      position: "relative" as const,
      //width: "100vw",
      height: "100vh",
      background:
        "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
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
        rgba(138, 43, 226, ${Math.random() * 0.4 + 0.1}), 
        rgba(75, 0, 130, ${Math.random() * 0.6 + 0.2}), 
        rgba(138, 43, 226, ${Math.random() * 0.3 + 0.1}))`,
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
      padding: "60px 80px",
      maxWidth: "600px",
      //textAlign: "center" as const,
      boxShadow:
        "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(138, 43, 226, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      zIndex: 10,
      position: "relative" as const,
    },
    title: {
      fontSize: "44px",
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
      fontSize: "22px",
      color: "#666",
      marginBottom: "40px",
      fontWeight: 500,
    },
    subtitleHighlight: {
      color: "#663898",
      fontWeight: 500,
    },
    button: {
      background: "linear-gradient(135deg, #ff9500 0%, #ff7b00 100%)",
      color: "white",
      border: "none",
      borderRadius: "12px",
      padding: "16px 32px",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 8px 24px rgba(255, 149, 0, 0.3)",
      transform: "translateY(0)",
    },
    buttonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 12px 32px rgba(255, 149, 0, 0.4)",
    },
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={shapeStyles.container}>
      {/* Floating shapes background */}
      <div style={shapeStyles.shapesContainer}>
        {shapes.map((shape) => (
          <div key={shape.id} style={shapeStyles.shape(shape)} />
        ))}
      </div>

      {/* Content card */}
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
