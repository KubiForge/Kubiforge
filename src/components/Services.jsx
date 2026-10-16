import { Section, SectionHeader } from "./utils";
import { servicesData } from "../data/servicesData";

/* Color map for service icon boxes — cycling through accent palette */
const serviceColors = [
  { color: "var(--brand-primary)", bg: "var(--brand-tint)", border: "var(--brand-tint-border)" },
  { color: "var(--accent-violet)", bg: "var(--accent-violet-tint)", border: "#DDD6FE" },
  { color: "var(--accent-teal)", bg: "var(--accent-teal-tint)", border: "#A5F3FC" },
  { color: "var(--accent-emerald)", bg: "var(--accent-emerald-tint)", border: "#A7F3D0" },
  { color: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
  { color: "#E11D48", bg: "#FFF1F2", border: "#FECDD3" },
];

function ServiceIcon({ iconKey }) {
  const iconProps = {
    width: 26,
    height: 26,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    stroke: "currentColor"
  };

  switch (iconKey) {
    case "custom-software":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
          <line x1="14" y1="4" x2="10" y2="20"></line>
        </svg>
      );
    case "web":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"></path>
          <path d="M6 10a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4"></path>
          <line x1="9" y1="14" x2="9" y2="16"></line>
          <line x1="15" y1="14" x2="15" y2="16"></line>
        </svg>
      );
    case "design":
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      );
    case "consulting":
    default:
      return (
        <svg viewBox="0 0 24 24" {...iconProps}>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      );
  }
}

export default function Services() {
  return (
    <Section id="services" style={{ backgroundColor: "var(--bg-canvas)" }}>
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          badge="Core Capabilities"
          title="Engineering & Solutions"
          subtitle="Explore our specialized services tailored to convert complex technical requirements into dependable, high-performance software."
        />

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(20px, 3vw, 28px)",
          }}
        >
          {servicesData.map((service, index) => {
            const palette = serviceColors[index % serviceColors.length];
            return (
              <div key={service.id} className="service-card">
                {/* Icon & Tagline */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "22px",
                  }}
                >
                  <div
                    style={{
                      width: "54px",
                      height: "54px",
                      borderRadius: "14px",
                      background: palette.bg,
                      border: `1px solid ${palette.border}`,
                      color: palette.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.3s var(--ease-spring)",
                    }}
                  >
                    <ServiceIcon iconKey={service.iconKey} />
                  </div>

                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {service.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "24px",
                    flex: 1,
                  }}
                >
                  {service.description}
                </p>

                {/* Feature Highlights */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "7px",
                    paddingTop: "16px",
                    borderTop: "1px solid var(--steel-border)",
                  }}
                >
                  {service.highlights.map((h, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "0.74rem",
                        fontWeight: 500,
                        color: palette.color,
                        background: palette.bg,
                        border: `1px solid ${palette.border}`,
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontFamily: "var(--font-sans)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div
          style={{
            marginTop: "clamp(40px, 6vw, 64px)",
            background: "linear-gradient(135deg, var(--brand-tint) 0%, #EFF6FF 100%)",
            borderRadius: "20px",
            border: "1px solid var(--brand-tint-border)",
            padding: "clamp(28px, 4vw, 40px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.15rem", color: "var(--text-primary)", marginBottom: "6px" }}>
              Have a unique requirement?
            </div>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
              We tailor every engagement to your specific goals and technical context.
            </p>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "var(--brand-primary)",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "12px",
              padding: "12px 28px",
              fontSize: "0.92rem",
              fontWeight: 700,
              fontFamily: "var(--font-sans)",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 14px rgba(2,132,199,0.3)",
              transition: "all 0.25s var(--ease-spring)",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 22px rgba(2,132,199,0.4)";
              e.currentTarget.style.background = "var(--brand-primary-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(2,132,199,0.3)";
              e.currentTarget.style.background = "var(--brand-primary)";
            }}
          >
            <span>Discuss Your Project</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </Section>
  );
}
