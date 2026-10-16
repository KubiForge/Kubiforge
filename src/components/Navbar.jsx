import { useState, useEffect } from "react";
import { siteConfig } from "../data/siteConfig";

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Calculate scroll progress percentage
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 868) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "72px",
          display: "flex",
          alignItems: "center",
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.92)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(226, 232, 240, 0.8)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 20px -2px rgba(15, 23, 42, 0.06)" : "none",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          className="container"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand Identity / Logo */}
          <div
            onClick={() => scrollToSection("home")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && scrollToSection("home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "11px",
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(226, 232, 240, 0.9)",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.07)",
                overflow: "hidden",
                transition: "transform 0.25s var(--ease-spring), box-shadow 0.25s ease",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(2, 132, 199, 0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(15, 23, 42, 0.07)";
              }}
            >
              <img
                src="/kubiforge-logo.png"
                alt="Kubi Forge Logo"
                style={{
                  width: "38px",
                  height: "38px",
                  objectFit: "contain",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  lineHeight: 1.15,
                }}
              >
                Kubi Forge
              </span>
              <span
                style={{
                  fontSize: "0.66rem",
                  fontWeight: 700,
                  color: "var(--brand-primary)",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                }}
              >
                Forge the Future
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="nav-desktop-menu"
            aria-label="Main Navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(20px, 3vw, 36px)",
            }}
          >
            {siteConfig.navLinks.map((link) => {
              const linkKey = link.label.toLowerCase();
              const isActive = active === linkKey;
              return (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(linkKey)}
                  style={{
                    background: "none",
                    border: "none",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.92rem",
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "var(--brand-primary)" : "var(--text-secondary)",
                    cursor: "pointer",
                    padding: "8px 2px",
                    position: "relative",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-primary)")}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor: "var(--brand-primary)",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Call To Action: "Let's Talk" */}
          <div
            className="nav-desktop-menu"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => scrollToSection("contact")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--text-primary)",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "9999px",
                padding: "9px 20px",
                fontSize: "0.88rem",
                fontWeight: 600,
                fontFamily: "var(--font-sans)",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(11, 19, 43, 0.12)",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--brand-primary)";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(2, 132, 199, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--text-primary)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(11, 19, 43, 0.12)";
              }}
            >
              <span>Let's Talk</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-mobile-toggle"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              background: "var(--bg-subtle)",
              border: "1px solid var(--steel-border)",
              cursor: "pointer",
              padding: "8px",
              gap: "5px",
            }}
          >
            <span
              style={{
                width: "20px",
                height: "2px",
                backgroundColor: "var(--text-primary)",
                display: "block",
                transition: "all 0.25s ease",
                transform: mobileMenuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                width: "20px",
                height: "2px",
                backgroundColor: "var(--text-primary)",
                display: "block",
                transition: "all 0.25s ease",
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: "20px",
                height: "2px",
                backgroundColor: "var(--text-primary)",
                display: "block",
                transition: "all 0.25s ease",
                transform: mobileMenuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          style={{
            position: "fixed",
            top: "76px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            padding: "24px clamp(20px, 6vw, 40px)",
            borderBottom: "1px solid var(--steel-border)",
            animation: "fadeIn 0.2s ease-out",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {siteConfig.navLinks.map((link) => {
              const linkKey = link.label.toLowerCase();
              const isActive = active === linkKey;
              return (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(linkKey)}
                  style={{
                    background: isActive ? "var(--brand-tint)" : "none",
                    border: "none",
                    borderRadius: "8px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.1rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "var(--brand-primary)" : "var(--text-primary)",
                    cursor: "pointer",
                    padding: "14px 16px",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span style={{ color: "var(--brand-primary)", fontSize: "0.85rem" }}>●</span>
                  )}
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: "auto", paddingTop: "24px", borderTop: "1px solid var(--steel-border)" }}>
            <button
              onClick={() => scrollToSection("contact")}
              style={{
                width: "100%",
                background: "var(--brand-primary)",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "10px",
                padding: "15px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxShadow: "0 4px 14px rgba(2, 132, 199, 0.25)",
              }}
            >
              <span>Let's Talk</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            
            <p style={{
              textAlign: "center",
              marginTop: "16px",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              letterSpacing: "0.04em",
            }}>
              {siteConfig.tagline}
            </p>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: "72px",
          left: 0,
          right: 0,
          height: "2px",
          zIndex: 99,
          background: "transparent",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, var(--brand-primary), var(--brand-electric))",
            width: `${scrollProgress}%`,
            transition: "width 0.1s linear",
            boxShadow: "0 0 8px rgba(14,165,233,0.4)",
          }}
        />
      </div>
    </>
  );
}
