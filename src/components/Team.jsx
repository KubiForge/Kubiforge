import { useState } from "react";
import { Section, SectionHeader } from "./utils";
import { teamMembers, teamConfig } from "../data/teamData";

/* LinkedIn Icon */
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function getSocialIcon(platform) {
  const p = platform?.toLowerCase();
  if (p === "linkedin") return <LinkedInIcon />;
  if (p === "github") return <GitHubIcon />;
  if (p === "twitter" || p === "x") return <TwitterIcon />;
  return <span style={{ fontSize: "0.9rem" }}>↗</span>;
}

/**
 * Reusable Team Member Card Component
 */
export function TeamMemberCard({ member }) {
  const [photoError, setPhotoError] = useState(false);
  const [hovered, setHovered] = useState(false);

  const initials = member.name
    ? member.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "KF";

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        border: "1px solid",
        borderColor: hovered ? "rgba(2,132,199,0.3)" : "var(--steel-border)",
        padding: "clamp(24px, 4vw, 32px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxShadow: hovered
          ? "0 18px 36px -6px rgba(15, 23, 42, 0.1), 0 4px 10px rgba(2,132,199,0.06)"
          : "0 2px 8px rgba(15, 23, 42, 0.04)",
        transition: "all 0.35s var(--ease-spring)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top decorative accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "25%",
          right: "25%",
          height: "3px",
          background: "linear-gradient(90deg, transparent, var(--brand-primary), transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      />

      {/* Photo Avatar with Initials Fallback */}
      <div
        style={{
          width: "92px",
          height: "92px",
          borderRadius: "50%",
          background: "var(--brand-tint)",
          border: hovered ? "3px solid rgba(2,132,199,0.3)" : "2px solid var(--brand-tint-border)",
          boxShadow: hovered
            ? "0 8px 20px rgba(2, 132, 199, 0.2)"
            : "0 4px 12px rgba(2, 132, 199, 0.1)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "18px",
          flexShrink: 0,
          transition: "all 0.35s var(--ease-spring)",
        }}
      >
        {!photoError && member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            width="512"
            height="512"
            loading="lazy"
            decoding="async"
            onError={() => setPhotoError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: hovered ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.5s var(--ease-spring)",
            }}
          />
        ) : (
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "var(--brand-primary)",
            }}
          >
            {initials}
          </span>
        )}
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: "4px",
        }}
      >
        {member.name}
      </h3>

      {/* Role Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "0.78rem",
          fontWeight: 700,
          color: "var(--brand-primary)",
          letterSpacing: "0.04em",
          marginBottom: "14px",
          fontFamily: "var(--font-display)",
          background: "var(--brand-tint)",
          border: "1px solid var(--brand-tint-border)",
          borderRadius: "99px",
          padding: "4px 12px",
        }}
      >
        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--brand-primary)" }} />
        {member.role}
      </div>

      {/* Bio */}
      {member.bio && (
        <p
          style={{
            fontSize: "0.88rem",
            color: "var(--text-secondary)",
            lineHeight: 1.65,
            marginBottom: "18px",
            flex: 1,
          }}
        >
          {member.bio}
        </p>
      )}

      {/* Optional Social Links */}
      {member.socialLinks && member.socialLinks.length > 0 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "auto",
            paddingTop: "14px",
            borderTop: "1px solid var(--steel-border)",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {member.socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on ${link.platform}`}
              style={{
                color: "var(--text-muted)",
                padding: "8px",
                borderRadius: "8px",
                background: "var(--bg-subtle)",
                border: "1px solid var(--steel-border)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--brand-primary)";
                e.currentTarget.style.background = "var(--brand-tint)";
                e.currentTarget.style.borderColor = "var(--brand-tint-border)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.background = "var(--bg-subtle)";
                e.currentTarget.style.borderColor = "var(--steel-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {getSocialIcon(link.platform)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Team() {
  const hasMembers = teamMembers && teamMembers.length > 0;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="team" style={{ backgroundColor: "var(--bg-canvas)" }}>
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          badge="Leadership & Engineering"
          title={teamConfig.heading}
          subtitle={teamConfig.subheading}
        />

        {/* Member Grid OR Tasteful Brand-Focused Empty State */}
        {hasMembers ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "clamp(20px, 3vw, 28px)",
            }}
          >
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          /* Premium empty state */
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {/* Main empty state card */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "28px",
                border: "1px solid var(--steel-border)",
                padding: "clamp(44px, 7vw, 72px) clamp(28px, 5vw, 56px)",
                textAlign: "center",
                boxShadow: "0 8px 28px rgba(15,23,42,0.06)",
                position: "relative",
                overflow: "hidden",
                marginBottom: "28px",
              }}
            >
              {/* Background decoration */}
              <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "3px", background: "linear-gradient(90deg, transparent, var(--brand-primary), transparent)" }} />
              <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(2,132,199,0.04) 1.5px, transparent 1.5px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "220px", height: "220px", background: "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

              {/* Forge Emblem Badge */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "20px",
                  background: "var(--brand-tint)",
                  border: "1px solid var(--brand-tint-border)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--brand-primary)",
                  marginBottom: "24px",
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "0 4px 14px rgba(2,132,199,0.15)",
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "16px",
                  letterSpacing: "-0.02em",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {teamConfig.emptyStateTitle}
              </h3>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  maxWidth: "560px",
                  margin: "0 auto 36px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {teamConfig.emptyStateMessage}
              </p>

              {/* Decorative "profile placeholder" row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "-8px",
                  marginBottom: "36px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, hsl(${200 + i * 20}, 70%, 85%), hsl(${210 + i * 20}, 60%, 75%))`,
                      border: "3px solid #FFFFFF",
                      marginLeft: i > 0 ? "-10px" : "0",
                      boxShadow: "0 2px 6px rgba(15,23,42,0.1)",
                      animation: `fadeInScale 0.4s ease ${i * 0.1}s both`,
                    }}
                  />
                ))}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "var(--brand-tint)",
                    border: "3px solid #FFFFFF",
                    marginLeft: "-10px",
                    boxShadow: "0 2px 6px rgba(15,23,42,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--brand-primary)",
                    fontSize: "1rem",
                    fontWeight: 700,
                  }}
                >
                  +
                </div>
              </div>

              {/* CTA */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 28px",
                  borderRadius: "9999px",
                  background: "var(--bg-subtle)",
                  border: "1px solid var(--steel-border)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                  }}
                >
                  Passionate about building impactful software?
                </span>
                <button
                  onClick={scrollToContact}
                  style={{
                    background: "var(--brand-primary)",
                    border: "none",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    fontFamily: "var(--font-sans)",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    borderRadius: "9999px",
                    padding: "8px 18px",
                    transition: "all 0.2s ease",
                    boxShadow: "0 3px 10px rgba(2,132,199,0.25)",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--brand-primary-hover)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--brand-primary)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span>{teamConfig.ctaText}</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
