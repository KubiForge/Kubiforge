import { siteConfig } from "../data/siteConfig";
import { contactLinks, navLinks } from "../data/linksData";

function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.94c0 2.1.55 4.15 1.6 5.96L.03 24l6.25-1.64a11.9 11.9 0 0 0 5.8 1.48h.01c6.58 0 11.94-5.36 11.94-11.94a11.86 11.86 0 0 0-3.51-8.42ZM12.09 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.86 9.86 0 0 1-1.52-5.25c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.89-9.9 9.89Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.58 2.79.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.71 4.54-4.71 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.28h3.34l-.53 3.49h-2.81V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

function getSocialIcon(name) {
  const n = name?.toLowerCase();
  if (n === "github") return <GitHubIcon />;
  if (n === "linkedin") return <LinkedInIcon />;
  if (n === "x (twitter)" || n === "twitter") return <TwitterIcon />;
  if (n === "whatsapp") return <WhatsAppIcon />;
  if (n === "call") return <PhoneIcon />;
  if (n === "facebook") return <FacebookIcon />;
  return <MailIcon />;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid var(--steel-border)",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Pre-footer CTA Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #0B132B 0%, #1E3A5F 50%, #0B132B 100%)",
          position: "relative",
          overflow: "hidden",
          padding: "clamp(40px, 7vw, 72px) 0",
        }}
      >
        {/* Background decorations */}
        <div style={{ position: "absolute", top: "-60px", right: "5%", width: "280px", height: "280px", background: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-40px", left: "10%", width: "200px", height: "200px", background: "radial-gradient(circle, rgba(2,132,199,0.1) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "22px 22px", pointerEvents: "none" }} />

        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "28px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
                marginBottom: "10px",
              }}
            >
              Ready to build something
              <span
                style={{
                  background: "linear-gradient(135deg, #0EA5E9, #38BDF8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {" "}meaningful?
              </span>
            </div>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.6,
              }}
            >
              Let's turn your boldest ideas into powerful software.
            </p>
          </div>

          <button
            onClick={() => scrollTo("contact")}
            style={{
              background: "linear-gradient(135deg, var(--brand-primary), var(--brand-electric))",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "14px",
              padding: "16px 36px",
              fontSize: "1rem",
              fontWeight: 700,
              fontFamily: "var(--font-sans)",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 8px 24px rgba(2,132,199,0.4)",
              transition: "all 0.3s var(--ease-spring)",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 16px 36px rgba(2,132,199,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(2,132,199,0.4)";
            }}
          >
            <span>Let's Talk</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div
        className="container"
        style={{
          paddingTop: "clamp(40px, 7vw, 64px)",
          paddingBottom: "0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "clamp(32px, 5vw, 56px)",
            marginBottom: "clamp(40px, 6vw, 56px)",
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: "380px" }}>
            <div
              onClick={() => scrollTo("home")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "#FFFFFF",
                  border: "1px solid var(--steel-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  boxShadow: "0 2px 6px rgba(15,23,42,0.06)",
                }}
              >
                <img
                  src="/kubiforge-logo.webp"
                  alt="Kubi Forge"
                  width="34"
                  height="34"
                  loading="lazy"
                  decoding="async"
                  style={{ width: "34px", height: "34px", objectFit: "contain" }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {siteConfig.companyName}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "var(--brand-primary)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Forge the Future
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              {siteConfig.description}
            </p>

            {/* Social Icon Row */}
            <div style={{ display: "flex", gap: "8px" }}>
              {contactLinks.filter((link) => link.name !== "Email").map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith("https://") ? "_blank" : undefined}
                  rel={social.url.startsWith("https://") ? "noopener noreferrer" : undefined}
                  aria-label={social.name}
                  title={social.handle}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "var(--bg-subtle)",
                    border: "1px solid var(--steel-border)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--brand-tint)";
                    e.currentTarget.style.borderColor = "var(--brand-tint-border)";
                    e.currentTarget.style.color = "var(--brand-primary)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--bg-subtle)";
                    e.currentTarget.style.borderColor = "var(--steel-border)";
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                marginBottom: "20px",
              }}
            >
              Navigation
            </div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.label.toLowerCase())}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      padding: 0,
                      fontFamily: "var(--font-sans)",
                      transition: "color 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--brand-primary)";
                      e.currentTarget.querySelector(".nav-arrow").style.opacity = "1";
                      e.currentTarget.querySelector(".nav-arrow").style.transform = "translateX(2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.querySelector(".nav-arrow").style.opacity = "0";
                      e.currentTarget.querySelector(".nav-arrow").style.transform = "translateX(0)";
                    }}
                  >
                    <span className="nav-arrow" style={{ opacity: 0, transition: "all 0.2s ease", fontSize: "0.75rem" }}>→</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials Column */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                marginBottom: "20px",
              }}
            >
              Contact
            </div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {contactLinks.map((contact) => (
                <li key={contact.name}>
                  <a
                    href={contact.url}
                    target={contact.url.startsWith("https://") ? "_blank" : undefined}
                    rel={contact.url.startsWith("https://") ? "noopener noreferrer" : undefined}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {getSocialIcon(contact.name)}
                    <span>
                      {contact.name}
                      {contact.name !== "Facebook" && `: ${contact.handle}`}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: "24px",
            paddingBottom: "32px",
            borderTop: "1px solid var(--steel-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            © {currentYear} {siteConfig.companyName}. All rights reserved.
          </div>

          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.78rem",
              letterSpacing: "0.08em",
              color: "var(--brand-primary)",
              textTransform: "uppercase",
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>
      </div>
    </footer>
  );
}
