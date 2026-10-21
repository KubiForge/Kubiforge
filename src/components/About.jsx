
import { useEffect, useRef, useState } from "react";
import { Section, SectionHeader } from "./utils";
import { siteConfig } from "../data/siteConfig";

/* ------------------------------------------------------------------
   Animated counter (eased, respects reduced-motion)
------------------------------------------------------------------ */
function useCounter(target, duration = 1600, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      const frame = requestAnimationFrame(() => setCount(target));
      return () => cancelAnimationFrame(frame);
    }

    let frame;
    const t0 = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, started]);

  return count;
}

/* ------------------------------------------------------------------
   Stat item
------------------------------------------------------------------ */
function StatItem({ number, suffix = "", label, icon, started }) {
  const count = useCounter(number, 1600, started);
  return (
    <div className="about-stat">
      <div className="about-stat__icon">{icon}</div>
      <div className="about-stat__body">
        <div className="about-stat__value">
          {count}
          {suffix}
        </div>
        <div className="about-stat__label">{label}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Principle card
------------------------------------------------------------------ */
function PrincipleCard({ number, title, desc }) {
  return (
    <div className="about-principle">
      <div className="about-principle__number">{number}</div>
      <h4 className="about-principle__title">{title}</h4>
      <p className="about-principle__desc">{desc}</p>
    </div>
  );
}

/* ------------------------------------------------------------------
   Icons (shared stroke style)
------------------------------------------------------------------ */
const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const icons = {
  projects: (
    <svg {...iconProps}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  services: (
    <svg {...iconProps}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  satisfaction: (
    <svg {...iconProps}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  tech: (
    <svg {...iconProps}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  vision: (
    <svg {...iconProps} width={24} height={24}>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  mission: (
    <svg {...iconProps} width={24} height={24}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

/* ------------------------------------------------------------------
   Data
------------------------------------------------------------------ */
const stats = [
  { number: 10, suffix: "+", label: "Projects Delivered", icon: icons.projects },
  { number: 6, suffix: "+", label: "Services Offered", icon: icons.services },
  { number: 100, suffix: "%", label: "Client Satisfaction", icon: icons.satisfaction },
  { number: 5, suffix: "+", label: "Technologies Mastered", icon: icons.tech },
];

const principles = [
  {
    number: "01",
    title: "Innovation First",
    desc: "Questioning conventional assumptions to uncover better engineering approaches and creative solutions.",
  },
  {
    number: "02",
    title: "Built with Confidence",
    desc: "Building with architectural conviction, clean code and uncompromising quality standards.",
  },
  {
    number: "03",
    title: "Creative Excellence",
    desc: "Bringing human-centred design, thoughtful aesthetics and genuine craft to every interface.",
  },
  {
    number: "04",
    title: "Technical Mastery",
    desc: "Delivering reliable, maintainable software designed for scale, speed and longevity.",
  },
];

/* ------------------------------------------------------------------
   Styles (scoped via .about-* classes)
   Type scale:
     eyebrow   0.75rem / 600 / uppercase, tracking 0.12em
     h3        clamp(1.375rem, 2vw, 1.75rem) / 700
     h4        1.0625rem / 600
     body      0.9375rem – 1rem / 400, line-height 1.7
     stat      clamp(1.75rem, 3vw, 2.25rem) / 700
------------------------------------------------------------------ */
const styles = `
.about-wrap {
  --about-radius-lg: 20px;
  --about-radius-md: 14px;
  --about-shadow-soft: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 23, 42, 0.08);
  --about-shadow-hover: 0 1px 2px rgba(15, 23, 42, 0.04), 0 16px 32px -14px rgba(15, 23, 42, 0.14);
  --about-ease: cubic-bezier(0.22, 0.61, 0.36, 1);
}
 
.about-wrap h3,
.about-wrap h4,
.about-wrap p { margin: 0; }
 
.about-eyebrow {
  font-family: var(--font-display);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  line-height: 1;
}
 
/* ---------- Stats panel ---------- */
.about-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  background: #fff;
  border: 1px solid var(--steel-border);
  border-radius: var(--about-radius-lg);
  box-shadow: var(--about-shadow-soft);
  margin-bottom: clamp(40px, 6vw, 64px);
  overflow: hidden;
}
 
.about-stat {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: clamp(20px, 2.8vw, 28px) clamp(20px, 2.8vw, 28px);
  position: relative;
}
 
/* subtle dividers between stats */
.about-stat + .about-stat::before {
  content: "";
  position: absolute;
  left: 0;
  top: 22%;
  bottom: 22%;
  width: 1px;
  background: var(--steel-border);
}
 
.about-stat__icon {
  flex: none;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--brand-primary);
  background: var(--brand-tint);
  border: 1px solid var(--brand-tint-border);
}
 
.about-stat__value {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  font-variant-numeric: tabular-nums;
}
 
.about-stat__label {
  margin-top: 4px;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.4;
  color: var(--text-muted);
}
 
/* ---------- Vision / Mission ---------- */
.about-vm {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
  gap: clamp(20px, 3vw, 28px);
  margin-bottom: clamp(48px, 7vw, 80px);
}
 
.about-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--about-radius-lg);
  padding: clamp(28px, 4.5vw, 44px);
  transition: transform 0.35s var(--about-ease), box-shadow 0.35s var(--about-ease);
}
.about-card:hover { transform: translateY(-3px); }
 
.about-card__icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  position: relative;
  z-index: 1;
}
 
.about-card .about-eyebrow {
  margin-bottom: 14px;
  position: relative;
  z-index: 1;
}
 
.about-card__title {
  font-family: var(--font-display);
  font-size: clamp(1.375rem, 2vw, 1.75rem);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.015em;
  margin-bottom: 14px;
  position: relative;
  z-index: 1;
}
 
.about-card__text {
  font-size: 0.9375rem;
  line-height: 1.75;
  position: relative;
  z-index: 1;
  max-width: 52ch;
}
 
/* Vision (light) */
.about-card--vision {
  background: linear-gradient(160deg, #ffffff 0%, var(--brand-tint) 100%);
  border: 1px solid var(--brand-tint-border);
  box-shadow: var(--about-shadow-soft);
}
.about-card--vision:hover { box-shadow: var(--about-shadow-hover); }
.about-card--vision .about-card__icon {
  background: #fff;
  color: var(--brand-primary);
  border: 1px solid var(--brand-tint-border);
}
.about-card--vision .about-eyebrow { color: var(--brand-primary); }
.about-card--vision .about-card__title { color: var(--text-primary); }
.about-card--vision .about-card__text { color: var(--text-secondary); }
 
/* Mission (dark) */
.about-card--mission {
  background: linear-gradient(160deg, #0f1b33 0%, #17263f 100%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 12px 32px -16px rgba(11, 19, 43, 0.45);
}
.about-card--mission:hover { box-shadow: 0 20px 40px -16px rgba(11, 19, 43, 0.55); }
.about-card--mission::after {
  content: "";
  position: absolute;
  right: -60px;
  bottom: -60px;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%);
  pointer-events: none;
}
.about-card--mission .about-card__icon {
  background: rgba(255, 255, 255, 0.06);
  color: #7dd3fc;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.about-card--mission .about-eyebrow { color: #7dd3fc; }
.about-card--mission .about-card__title { color: #ffffff; }
.about-card--mission .about-card__text { color: rgba(255, 255, 255, 0.68); }
 
/* ---------- Principles ---------- */
.about-principles {
  border-top: 1px solid var(--steel-border);
  padding-top: clamp(36px, 5.5vw, 56px);
}
 
.about-principles__head {
  text-align: center;
  max-width: 560px;
  margin: 0 auto clamp(28px, 4vw, 40px);
}
.about-principles__head .about-eyebrow {
  color: var(--text-muted);
  margin-bottom: 12px;
}
.about-principles__heading {
  font-family: var(--font-display);
  font-size: clamp(1.375rem, 2.2vw, 1.75rem);
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.25;
  color: var(--text-primary);
}
 
.about-principles__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: clamp(14px, 2vw, 20px);
}
 
.about-principle {
  background: #fff;
  border: 1px solid var(--steel-border);
  border-radius: var(--about-radius-md);
  padding: clamp(22px, 2.6vw, 28px);
  box-shadow: var(--about-shadow-soft);
  transition: transform 0.3s var(--about-ease), box-shadow 0.3s var(--about-ease),
    border-color 0.3s var(--about-ease);
}
.about-principle:hover {
  transform: translateY(-3px);
  border-color: var(--brand-tint-border);
  box-shadow: var(--about-shadow-hover);
}
 
.about-principle__number {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--brand-primary);
  padding-bottom: 12px;
  margin-bottom: 16px;
  border-bottom: 2px solid var(--brand-tint-border);
  min-width: 36px;
}
 
.about-principle__title {
  font-family: var(--font-display);
  font-size: 1.0625rem;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.005em;
  color: var(--text-primary);
  margin-bottom: 8px;
}
 
.about-principle__desc {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--text-muted);
}
 
/* ---------- Responsive ---------- */
@media (max-width: 640px) {
  .about-stat + .about-stat::before {
    left: 20px;
    right: 20px;
    top: 0;
    bottom: auto;
    width: auto;
    height: 1px;
  }
}
 
@media (prefers-reduced-motion: reduce) {
  .about-card,
  .about-principle { transition: none; }
  .about-card:hover,
  .about-principle:hover { transform: none; }
}
`;

/* ------------------------------------------------------------------
   Component
------------------------------------------------------------------ */
export default function About() {
  const sectionRef = useRef(null);
  const [countersStarted, setCountersStarted] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="about"
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid var(--steel-border)",
        borderBottom: "1px solid var(--steel-border)",
      }}
    >
      <style>{styles}</style>

      <div className="container about-wrap" ref={sectionRef}>
        <SectionHeader
          badge="About Kubi Forge"
          title="Ideas into Impact."
          subtitle={siteConfig.aboutDescription}
        />

        {/* Stats */}
        <div className="about-stats">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} started={countersStarted} />
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="about-vm">
          <article className="about-card about-card--vision">
            <div className="about-card__icon">{icons.vision}</div>
            <div className="about-eyebrow">Our Vision</div>
            <h3 className="about-card__title">{siteConfig.vision}</h3>
            <p className="about-card__text">
              We look ahead to anticipate technological shifts, engineering software
              systems designed for longevity, high performance and continuous
              evolution.
            </p>
          </article>

          <article className="about-card about-card--mission">
            <div className="about-card__icon">{icons.mission}</div>
            <div className="about-eyebrow">Our Mission</div>
            <h3 className="about-card__title">{siteConfig.mission}</h3>
            <p className="about-card__text">
              We bridge bold imagination with rigorous engineering, turning ambitious
              concepts into intuitive, reliable digital products that create tangible
              value.
            </p>
          </article>
        </div>

        {/* Principles */}
        <div className="about-principles">
          <div className="about-principles__head">
            <div className="about-eyebrow">Our Principles</div>
            <h3 className="about-principles__heading">What drives every decision</h3>
          </div>

          <div className="about-principles__grid">
            {principles.map((p) => (
              <PrincipleCard key={p.number} {...p} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
