import { useEffect, useRef, useState } from "react";
import { Section, SectionHeader } from "./utils";
import { siteConfig } from "../data/siteConfig";

/* Animated counter hook */
function useCounter(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

/* Single animated stat block */
function StatBlock({ number, suffix = "", label, icon, color = "var(--brand-primary)", bg = "var(--brand-tint)", border = "var(--brand-tint-border)", started }) {
  const count = useCounter(number, 1600, started);
  return (
    <div
      style={{
        background: "#FFFFFF",
        border: "1px solid var(--steel-border)",
        borderRadius: "18px",
        padding: "clamp(20px, 3vw, 28px)",
        textAlign: "center",
        boxShadow: "0 4px 16px rgba(15,23,42,0.05)",
        transition: "transform 0.3s var(--ease-spring), box-shadow 0.3s ease, border-color 0.3s ease",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 18px 36px rgba(15,23,42,0.1)";
        e.currentTarget.style.borderColor = border;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(15,23,42,0.05)";
        e.currentTarget.style.borderColor = "var(--steel-border)";
      }}
    >
      {/* Subtle top accent */}
      <div style={{ position: "absolute", top: 0, left: "25%", right: "25%", height: "3px", background: `linear-gradient(90deg, transparent, ${color}, transparent)`, borderRadius: "0 0 3px 3px" }} />
      <div
        style={{
          width: "48px",
          height: "48px",
          background: bg,
          border: `1px solid ${border}`,
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: color,
          margin: "0 auto 14px",
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "2.2rem",
          color: "var(--text-primary)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {count}{suffix}
      </div>
      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "6px", fontWeight: 500 }}>
        {label}
      </div>
    </div>
  );
}

/* Principle pill card */
function PrincipleCard({ number, title, desc, color, bg, border }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "16px",
        border: "1px solid var(--steel-border)",
        padding: "clamp(20px, 3vw, 28px)",
        transition: "all 0.3s var(--ease-spring)",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.borderColor = border;
        e.currentTarget.style.boxShadow = `0 16px 32px -6px rgba(15,23,42,0.1)`;
        e.currentTarget.style.background = bg;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--steel-border)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.background = "#FFFFFF";
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "3.5rem",
          fontWeight: 900,
          color: color,
          opacity: 0.08,
          position: "absolute",
          top: "4px",
          right: "12px",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          pointerEvents: "none",
        }}
      >
        {number}
      </div>
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
          marginBottom: "14px",
        }}
      >
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: color }} />
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1rem",
          color: "var(--text-primary)",
          marginBottom: "8px",
        }}
      >
        {title}
      </div>
      <p
        style={{
          fontSize: "0.87rem",
          color: "var(--text-muted)",
          lineHeight: 1.65,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const [countersStarted, setCountersStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCountersStarted(true); },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: 10, suffix: "+", label: "Projects Delivered",
      color: "var(--brand-primary)", bg: "var(--brand-tint)", border: "var(--brand-tint-border)",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    },
    {
      number: 6, suffix: "+", label: "Services Offered",
      color: "var(--accent-violet)", bg: "var(--accent-violet-tint)", border: "#DDD6FE",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
    },
    {
      number: 100, suffix: "%", label: "Client Satisfaction",
      color: "var(--accent-emerald)", bg: "var(--accent-emerald-tint)", border: "#A7F3D0",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    },
    {
      number: 5, suffix: "+", label: "Technologies Mastered",
      color: "var(--accent-teal)", bg: "var(--accent-teal-tint)", border: "#A5F3FC",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>
    },
  ];

  const principles = [
    {
      number: "01",
      title: "Innovation First",
      desc: "Challenging conventional assumptions to discover better engineering paradigms and creative solutions.",
      color: "var(--brand-primary)",
      bg: "var(--brand-tint)",
      border: "var(--brand-tint-border)",
    },
    {
      number: "02",
      title: "Built with Confidence",
      desc: "Building with architectural conviction, clean code, and uncompromising quality standards.",
      color: "var(--accent-violet)",
      bg: "var(--accent-violet-tint)",
      border: "#DDD6FE",
    },
    {
      number: "03",
      title: "Creative Excellence",
      desc: "Infusing human-centric design with thoughtful aesthetics, tactile polish, and genuine craft.",
      color: "var(--accent-teal)",
      bg: "var(--accent-teal-tint)",
      border: "#A5F3FC",
    },
    {
      number: "04",
      title: "Technical Mastery",
      desc: "Delivering reliable, maintainable software designed for scalability, speed, and longevity.",
      color: "var(--accent-emerald)",
      bg: "var(--accent-emerald-tint)",
      border: "#A7F3D0",
    },
  ];

  return (
    <Section id="about" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid var(--steel-border)", borderBottom: "1px solid var(--steel-border)" }}>
      <div className="container" ref={sectionRef}>
        {/* Section Header */}
        <SectionHeader
          badge="About Kubi Forge"
          title="Ideas into Impact."
          subtitle={siteConfig.aboutDescription}
        />

        {/* Animated Stats Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "clamp(14px, 2.5vw, 20px)",
            marginBottom: "clamp(48px, 7vw, 72px)",
          }}
        >
          {stats.map((s, i) => (
            <StatBlock key={i} {...s} started={countersStarted} />
          ))}
        </div>

        {/* Vision & Mission: Two Elegant, Visually Distinct Content Blocks */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
            gap: "clamp(24px, 4vw, 36px)",
            marginBottom: "clamp(48px, 7vw, 72px)",
          }}
        >
          {/* Vision Block */}
          <div
            style={{
              background: "linear-gradient(145deg, #FFFFFF, var(--brand-tint))",
              borderRadius: "24px",
              padding: "clamp(32px, 5vw, 48px)",
              border: "1px solid var(--brand-tint-border)",
              boxShadow: "0 8px 28px -4px rgba(2, 132, 199, 0.1)",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.35s var(--ease-spring), box-shadow 0.35s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 20px 40px -6px rgba(2, 132, 199, 0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 28px -4px rgba(2, 132, 199, 0.1)";
            }}
          >
            {/* Decorative top bar */}
            <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: "3px", background: "linear-gradient(90deg, transparent, var(--brand-primary), transparent)", borderRadius: "0 0 3px 3px" }} />
            {/* Decorative circle BG */}
            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "radial-gradient(circle, rgba(2,132,199,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "14px",
                background: "rgba(2, 132, 199, 0.1)",
                color: "var(--brand-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
            </div>

            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--brand-primary)",
                fontFamily: "var(--font-display)",
                marginBottom: "10px",
              }}
            >
              Our Vision
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.15,
                marginBottom: "16px",
                letterSpacing: "-0.025em",
              }}
            >
              {siteConfig.vision}
            </h3>

            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
              }}
            >
              We look ahead to anticipate technological shifts, engineering software systems designed for longevity, high performance, and continuous evolution.
            </p>
          </div>

          {/* Mission Block */}
          <div
            style={{
              background: "linear-gradient(145deg, #0B132B, #1E293B)",
              borderRadius: "24px",
              padding: "clamp(32px, 5vw, 48px)",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 8px 28px -4px rgba(11, 19, 43, 0.3)",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.35s var(--ease-spring), box-shadow 0.35s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 24px 48px -8px rgba(11, 19, 43, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 28px -4px rgba(11, 19, 43, 0.3)";
            }}
          >
            {/* Background glows */}
            <div style={{ position: "absolute", bottom: "-50px", right: "-50px", width: "220px", height: "220px", background: "radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "-30px", left: "-30px", width: "140px", height: "140px", background: "radial-gradient(circle, rgba(2,132,199,0.08) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

            {/* Grid overlay */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "20px 20px", pointerEvents: "none" }} />

            <div
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "14px",
                background: "rgba(14, 165, 233, 0.15)",
                color: "var(--brand-electric)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>

            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--brand-electric)",
                fontFamily: "var(--font-display)",
                marginBottom: "10px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Our Mission
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.15,
                marginBottom: "16px",
                letterSpacing: "-0.025em",
                position: "relative",
                zIndex: 1,
              }}
            >
              {siteConfig.mission}
            </h3>

            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.75,
                position: "relative",
                zIndex: 1,
              }}
            >
              We bridge bold imagination with rigorous engineering, turning ambitious concepts into intuitive, reliable digital products that create tangible value.
            </p>
          </div>
        </div>

        {/* Brand Principles — Numbered Cards */}
        <div
          style={{
            borderTop: "1px solid var(--steel-border)",
            paddingTop: "clamp(36px, 6vw, 56px)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(28px, 4vw, 40px)",
            }}
          >
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "10px" }}>
              Our Principles
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.35rem, 2.5vw, 1.8rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
              }}
            >
              What drives every decision
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
              gap: "clamp(14px, 2.5vw, 20px)",
            }}
          >
            {principles.map((item) => (
              <PrincipleCard key={item.number} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
