import { useState, useEffect } from "react";
import { Typewriter } from "./utils";
import { siteConfig } from "../data/siteConfig";

const techStack = ["React", "Node.js", "Python", "AI/ML", "TypeScript"];

const stats = [
  { value: "10+", label: "Projects delivered" },
  { value: "6+", label: "Services" },
];

const steps = [
  { label: "Discover", text: "Understand the problem and the people it affects" },
  { label: "Design", text: "Shape the experience and the architecture" },
  { label: "Build", text: "Develop with clean, tested code" },
  { label: "Launch", text: "Release with monitoring in place" },
  { label: "Evolve", text: "Improve from real usage" },
];

/* Scoped styles: hover/focus states and a single calm entrance */
const css = `
.hero-fade { opacity: 0; transform: translateY(12px); transition: opacity .9s ease, transform .9s ease; }
.hero-fade.in { opacity: 1; transform: none; }
.hero-fade.d1 { transition-delay: .15s; }
.hero-fade.d2 { transition-delay: .3s; }

.hero-btn-primary,
.hero-btn-secondary { transition: background .2s ease, border-color .2s ease, color .2s ease; }
.hero-btn-primary:hover { background: var(--brand-primary-hover) !important; }
.hero-btn-secondary:hover { border-color: var(--brand-primary) !important; color: var(--brand-primary) !important; }
.hero-btn-primary:focus-visible,
.hero-btn-secondary:focus-visible { outline: 2px solid var(--brand-primary); outline-offset: 3px; }

@media (prefers-reduced-motion: reduce) {
  .hero-fade { transition: none; opacity: 1; transform: none; }
}
`;

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const fade = (extra = "") => `hero-fade ${extra} ${mounted ? "in" : ""}`;

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "clamp(104px, 14vh, 144px)",
        paddingBottom: "clamp(64px, 10vh, 104px)",
        background: "linear-gradient(180deg, #FFFFFF 0%, var(--bg-canvas) 100%)",
      }}
    >
      <style>{css}</style>

      <div className="container" style={{ width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: "clamp(40px, 7vw, 88px)",
            alignItems: "center",
          }}
        >
          {/* ── Left: message ── */}
          <div className={fade()} style={{ maxWidth: "620px" }}>
            {/* Availability, quiet */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "28px",
                fontSize: "0.88rem",
                color: "var(--text-secondary)",
                fontWeight: 500,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#10B981",
                  flexShrink: 0,
                }}
              />
              <span>Open to projects</span>
              <span aria-hidden="true" style={{ width: "1px", height: "14px", background: "var(--steel-border)" }} />
              <span style={{ color: "var(--text-muted)" }}>{siteConfig.tagline}</span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 5.4vw, 4.2rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.028em",
                color: "var(--text-primary)",
                marginBottom: "20px",
              }}
            >
              {siteConfig.vision}
            </h1>

            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)",
                fontWeight: 500,
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
                color: "var(--brand-primary)",
                marginBottom: "24px",
              }}
            >
              {siteConfig.mission}
            </p>

            <p
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.1rem)",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                marginBottom: "24px",
                maxWidth: "540px",
              }}
            >
              {siteConfig.heroSupportingText}
            </p>

            {/* Typewriter */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "6px",
                fontSize: "clamp(0.92rem, 1.6vw, 1rem)",
                color: "var(--text-muted)",
                marginBottom: "36px",
                minHeight: "1.8em",
              }}
            >
              <span>Transforming ideas through</span>
              <Typewriter
                words={[
                  "Custom Software Engineering",
                  "Intelligent AI Systems",
                  "High-Performance Web Apps",
                  "Fluid Mobile Experiences",
                  "Reliable System Architecture",
                ]}
              />
            </div>

            {/* Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
              <button
                className="hero-btn-primary"
                onClick={() => scrollTo("projects")}
                style={{
                  background: "var(--brand-primary)",
                  color: "#FFFFFF",
                  border: "1.5px solid transparent",
                  borderRadius: "10px",
                  padding: "14px 28px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-sans)",
                  cursor: "pointer",
                  boxShadow: "0 1px 2px rgba(15, 23, 42, 0.12)",
                }}
              >
                Explore our work
              </button>

              <button
                className="hero-btn-secondary"
                onClick={() => scrollTo("contact")}
                style={{
                  background: "transparent",
                  color: "var(--text-primary)",
                  border: "1.5px solid var(--steel-border)",
                  borderRadius: "10px",
                  padding: "14px 28px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-sans)",
                  cursor: "pointer",
                }}
              >
                Let's talk
              </button>
            </div>

            {/* Stats + stack, one quiet block */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "20px 40px",
                paddingTop: "28px",
                borderTop: "1px solid var(--steel-border)",
              }}
            >
              <div style={{ display: "flex", gap: "32px" }}>
                {stats.map((s) => (
                  <div key={s.label}>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        lineHeight: 1.1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "4px" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <ul
                aria-label="Technologies"
                style={{ display: "flex", flexWrap: "wrap", gap: "8px", listStyle: "none", margin: 0, padding: 0 }}
              >
                {techStack.map((tech) => (
                  <li
                    key={tech}
                    style={{
                      padding: "4px 11px",
                      borderRadius: "6px",
                      background: "var(--brand-tint)",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: team photo ── */}
          <div className={fade("d1")} style={{ display: "flex", justifyContent: "center" }}>
            <figure style={{ margin: 0, width: "min(100%, 460px)" }}>
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "linear-gradient(160deg, #F0F9FF 0%, #E0F2FE 100%)",
                  border: "1px solid var(--steel-border)",
                  boxShadow: "0 24px 48px -24px rgba(15, 23, 42, 0.18)",
                  aspectRatio: "1 / 1",
                }}
              >
                <img
                  src="/crew.png"
                  alt="The KubiForge team"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                  }}
                />
              </div>

            </figure>
          </div>
        </div>

        {/* ── Approach: a real sequence, kept understated ── */}
        <div className={fade("d2")} style={{ marginTop: "clamp(56px, 8vw, 96px)" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "20px",
            }}
          >
            How we work
          </h2>
          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
              gap: "24px",
              borderTop: "1px solid var(--steel-border)",
            }}
          >
            {steps.map((step, i) => (
              <li key={step.label} style={{ paddingTop: "20px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "6px",
                  }}
                >
                  <span style={{ color: "var(--brand-primary)", marginRight: "8px" }}>{i + 1}</span>
                  {step.label}
                </div>
                <p style={{ margin: 0, fontSize: "0.88rem", lineHeight: 1.6, color: "var(--text-muted)" }}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}