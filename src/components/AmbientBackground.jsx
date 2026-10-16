export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Delicate geometric background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(rgba(15, 23, 42, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 95%)",
        }}
      />

      {/* Soft ambient top light pool */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(400px, 70vw, 900px)",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, rgba(2, 132, 199, 0.03) 45%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Gentle side accent light */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          right: "-150px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(2, 132, 199, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}
