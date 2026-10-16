import { useState, useEffect } from "react";
import { Typewriter } from "./utils";
import { siteConfig } from "../data/siteConfig";

/* Small animated stat widget */
function StatWidget({ value, label, icon, delay = 0, color = "var(--brand-primary)", bg = "var(--brand-tint)", border = "var(--brand-tint-border)" }) {
  return (
    <div
      className="stat-widget"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        animation: `fadeInUp 0.6s ease ${delay}ms both`,
        cursor: "default",
        minWidth: "148px",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "10px",
          background: bg,
          border: `1px solid ${border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: color,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.2rem",
            color: "var(--text-primary)",
            lineHeight: 1.1,
          }}
        >
          {value}
        </div>
        <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 500, marginTop: "1px" }}>
          {label}
        </div>
      </div>
    </div>
  );
}

/* Process Step Indicator */
function ProcessStep({ icon, label, color, delay }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        animation: `fadeInUp 0.5s ease ${delay}ms both`,
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          background: color.bg,
          border: `1px solid ${color.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: color.text,
          transition: "all 0.25s ease",
        }}
      >
        {icon}
      </div>
      <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.03em", textAlign: "center", maxWidth: "60px" }}>
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const techStack = ["React", "Node.js", "Python", "AI/ML", "TypeScript"];

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "clamp(100px, 14vh, 140px)",
        paddingBottom: "clamp(60px, 10vh, 100px)",
        overflow: "hidden",
        background: "linear-gradient(180deg, #FFFFFF 0%, var(--bg-canvas) 100%)",
      }}
    >
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "8%",
          left: "-8%",
          width: "45vw",
          height: "45vw",
          maxWidth: "560px",
          maxHeight: "560px",
          background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-8%",
          width: "40vw",
          height: "40vw",
          maxWidth: "500px",
          maxHeight: "500px",
          background: "radial-gradient(circle, rgba(2,132,199,0.07) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Subtle dot grid background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(2,132,199,0.045) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.6,
        }}
      />

      <div className="container" style={{ width: "100%", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
            gap: "clamp(36px, 6vw, 72px)",
            alignItems: "center",
          }}
        >
          {/* ── Left Content Column ── */}
          <div
            style={{
              maxWidth: "640px",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            {/* Live Status Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "6px 16px 6px 8px",
                borderRadius: "9999px",
                background: "#FFFFFF",
                border: "1px solid var(--steel-border)",
                boxShadow: "0 2px 12px rgba(15, 23, 42, 0.06)",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(16, 185, 129, 0.1)",
                  borderRadius: "9999px",
                  padding: "4px 10px",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#10B981",
                    display: "inline-block",
                    animation: "breathe 2.4s ease-in-out infinite",
                  }}
                />
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#059669", letterSpacing: "0.04em" }}>
                  Open to Projects
                </span>
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  letterSpacing: "0.03em",
                }}
              >
                {siteConfig.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 6.5vw, 5.2rem)",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.032em",
                color: "var(--text-primary)",
                marginBottom: "22px",
              }}
            >
              <span style={{ display: "block" }}>{siteConfig.vision}</span>
              <span
                className="text-gradient-brand"
                style={{
                  display: "block",
                  fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  marginTop: "8px",
                }}
              >
                {siteConfig.mission}
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              style={{
                fontSize: "clamp(1.05rem, 2.2vw, 1.18rem)",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                marginBottom: "28px",
                maxWidth: "540px",
              }}
            >
              {siteConfig.heroSupportingText}
            </p>

            {/* Dynamic Typewriter */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
                color: "var(--text-muted)",
                marginBottom: "36px",
                minHeight: "1.8em",
                fontFamily: "var(--font-sans)",
              }}
            >
              <span>Transforming ideas through</span>
              <Typewriter
                words={[
                  "Custom Software Engineering",
                  "Intelligent AI Systems",
                  "High-Performance Web Apps",
                  "Fluid Mobile Experiences",
                  "Reliable System Architecture"
                ]}
              />
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                flexWrap: "wrap",
                marginBottom: "44px",
              }}
            >
              <button
                onClick={() => scrollTo("projects")}
                style={{
                  background: "var(--brand-primary)",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "12px",
                  padding: "15px 32px",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-sans)",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 4px 18px rgba(2, 132, 199, 0.35)",
                  transition: "all 0.25s var(--ease-spring)",
                  letterSpacing: "0.01em",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--brand-primary-hover)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 10px 28px rgba(2, 132, 199, 0.42)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--brand-primary)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 18px rgba(2, 132, 199, 0.35)";
                }}
              >
                <span>Explore Our Work</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <button
                onClick={() => scrollTo("contact")}
                style={{
                  background: "#FFFFFF",
                  color: "var(--text-primary)",
                  border: "1.5px solid var(--steel-border)",
                  borderRadius: "12px",
                  padding: "14px 28px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-sans)",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-primary)";
                  e.currentTarget.style.color = "var(--brand-primary)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(2,132,199,0.1)";
                  e.currentTarget.style.background = "var(--brand-tint)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--steel-border)";
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(15, 23, 42, 0.04)";
                  e.currentTarget.style.background = "#FFFFFF";
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Let's Talk</span>
              </button>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: "12px" }}>
                Technologies we master
              </div>
              <div style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}>
                {techStack.map((tech, i) => (
                  <span
                    key={tech}
                    style={{
                      padding: "5px 12px",
                      borderRadius: "8px",
                      background: "#FFFFFF",
                      border: "1px solid var(--steel-border)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-mono)",
                      animation: `fadeInUp 0.5s ease ${100 + i * 80}ms both`,
                      transition: "all 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--brand-primary)";
                      e.currentTarget.style.color = "var(--brand-primary)";
                      e.currentTarget.style.background = "var(--brand-tint)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--steel-border)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.background = "#FFFFFF";
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Visual Column ── */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
            }}
          >
            {/* Visual Container */}
            <div
              style={{
                position: "relative",
                width: "min(100%, 480px)",
                aspectRatio: "1 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Outer Dashed Ring */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "0",
                  borderRadius: "50%",
                  border: "1px dashed rgba(2, 132, 199, 0.15)",
                  animation: "spinSlow 50s linear infinite",
                  pointerEvents: "none",
                }}
              />
              {/* Mid Ring */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "24px",
                  borderRadius: "50%",
                  border: "1px solid rgba(226, 232, 240, 0.7)",
                  pointerEvents: "none",
                }}
              />
              {/* Inner Ring */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "55px",
                  borderRadius: "50%",
                  border: "1px dashed rgba(2, 132, 199, 0.08)",
                  animation: "spinSlower 35s linear infinite",
                  pointerEvents: "none",
                }}
              />

              {/* Glowing Halo */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  width: "320px",
                  height: "320px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%, rgba(2,132,199,0.04) 50%, transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />

              {/* Primary Crew Card */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "min(88%, 390px)",
                  aspectRatio: "1 / 1",
                  background: "linear-gradient(145deg, #EFF6FF 0%, #E0F2FE 40%, #F0F9FF 100%)",
                  borderRadius: "32px",
                  overflow: "visible",
                  boxShadow: "0 28px 60px -12px rgba(15, 23, 42, 0.18), 0 6px 18px rgba(2, 132, 199, 0.1)",
                  border: "1px solid rgba(186, 230, 253, 0.7)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  animation: "floatGentle 7s ease-in-out infinite",
                }}
              >
                {/* Inner gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "32px",
                    background: "radial-gradient(ellipse at 50% 100%, rgba(2,132,199,0.1) 0%, transparent 65%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Crew Photo */}
                <img
                  src="/crew.png"
                  alt="KubiForge Team"
                  style={{
                    width: "95%",
                    height: "95%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    borderRadius: "26px",
                    display: "block",
                    position: "relative",
                    zIndex: 1,
                  }}
                />

                {/* Bottom Badge — KubiForge Crew */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-18px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#FFFFFF",
                    border: "1px solid var(--steel-border)",
                    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.12)",
                    borderRadius: "16px",
                    padding: "10px 22px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    zIndex: 2,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#10B981",
                      boxShadow: "0 0 8px rgba(16,185,129,0.6)",
                      flexShrink: 0,
                      animation: "breathe 2s ease-in-out infinite",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    KubiForge Crew
                  </span>
                </div>

                {/* Top-right Badge — Ideas into Impact */}
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    right: "16px",
                    background: "var(--brand-tint)",
                    border: "1px solid var(--brand-tint-border)",
                    boxShadow: "0 6px 18px rgba(2,132,199,0.18)",
                    borderRadius: "12px",
                    padding: "7px 15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    zIndex: 2,
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.73rem",
                      fontWeight: 700,
                      color: "var(--brand-primary)",
                    }}
                  >
                    Ideas into Impact
                  </span>
                </div>

                {/* Left Badge — Projects Built */}
                <div
                  style={{
                    position: "absolute",
                    left: "-22px",
                    top: "28%",
                    background: "#FFFFFF",
                    border: "1px solid var(--steel-border)",
                    boxShadow: "0 8px 20px rgba(15, 23, 42, 0.1)",
                    borderRadius: "16px",
                    padding: "12px 18px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 2,
                    animation: "floatAlt 5s ease-in-out infinite",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "var(--brand-primary)",
                      lineHeight: 1,
                    }}
                  >
                    10+
                  </span>
                  <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "var(--text-muted)", marginTop: "3px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Projects
                  </span>
                </div>
              </div>

              {/* Floating Stat Widgets — below the main card on the right */}
              <div
                style={{
                  position: "absolute",
                  right: "-10px",
                  bottom: "6%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  zIndex: 3,
                }}
              >
                <StatWidget
                  value="6+"
                  label="Services"
                  delay={300}
                  color="var(--accent-violet)"
                  bg="var(--accent-violet-tint)"
                  border="#DDD6FE"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  }
                />
                <StatWidget
                  value="100%"
                  label="Satisfaction"
                  delay={420}
                  color="var(--accent-emerald)"
                  bg="var(--accent-emerald-tint)"
                  border="#A7F3D0"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ticker / Process Steps */}
        <div
          style={{
            marginTop: "clamp(48px, 7vw, 80px)",
            paddingTop: "clamp(28px, 4vw, 40px)",
            borderTop: "1px solid var(--steel-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "28px",
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.8s ease 0.5s",
          }}
        >
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
            Our approach
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 3vw, 32px)", flexWrap: "wrap" }}>
            {[
              {
                label: "Discover",
                color: { text: "var(--brand-primary)", bg: "var(--brand-tint)", border: "var(--brand-tint-border)" },
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
              },
              {
                label: "Design",
                color: { text: "var(--accent-violet)", bg: "var(--accent-violet-tint)", border: "#DDD6FE" },
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg>,
              },
              {
                label: "Build",
                color: { text: "var(--accent-teal)", bg: "var(--accent-teal-tint)", border: "#A5F3FC" },
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
              },
              {
                label: "Launch",
                color: { text: "var(--accent-emerald)", bg: "var(--accent-emerald-tint)", border: "#A7F3D0" },
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
              },
              {
                label: "Evolve",
                color: { text: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>,
              },
            ].map((step, i) => (
              <ProcessStep key={step.label} {...step} delay={i * 80} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
