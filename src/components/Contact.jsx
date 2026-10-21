import { useState } from "react";
import swal from "sweetalert";
import { Section, SectionHeader } from "./utils";
import { siteConfig } from "../data/siteConfig";
import { contactLinks } from "../data/linksData";

const WEB3FORMS_ACCESS_KEY = "de8e6e71-d0a8-44cf-aab6-a5d0fc834fd4";

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function getSocialIcon(name) {
  const n = name?.toLowerCase();
  if (n === "github") return <GitHubIcon />;
  if (n === "linkedin") return <LinkedInIcon />;
  if (n === "x (twitter)" || n === "twitter") return <TwitterIcon />;
  if (n === "facebook") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.71 4.54-4.71 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.28h3.34l-.53 3.49h-2.81V24C19.61 23.1 24 18.1 24 12.07Z" />
      </svg>
    );
  }
  if (n === "whatsapp") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.94c0 2.1.55 4.15 1.6 5.96L.03 24l6.25-1.64a11.9 11.9 0 0 0 5.8 1.48h.01c6.58 0 11.94-5.36 11.94-11.94a11.86 11.86 0 0 0-3.51-8.42ZM12.09 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.86 9.86 0 0 1-1.52-5.25c0-5.45 4.44-9.89 9.9-9.89a9.83 9.83 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.89-9.9 9.89Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    );
  }
  if (n === "call") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.58 2.79.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      swal("Missing Fields", "Please fill in all required fields (Name, Email, and Message).", "warning");
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        from_name: "KubiForge Website",
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "New Contact Form Submission – KubiForge",
        message: formData.message,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        await swal({
          title: "Message Sent!",
          text: "Thank you! We have received your message and will be in touch shortly.",
          icon: "success",
          button: "Done",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch {
      swal({
        title: "Something Went Wrong",
        text: "Please try again or reach us directly at kubiforge@gmail.com",
        icon: "error",
        button: "Close",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = (field) => ({
    width: "100%",
    backgroundColor: "#FFFFFF",
    border: "1.5px solid",
    borderColor: focusedField === field ? "var(--brand-primary)" : "var(--steel-border)",
    borderRadius: "12px",
    padding: "13px 16px",
    fontSize: "0.95rem",
    color: "var(--text-primary)",
    fontFamily: "var(--font-sans)",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    boxShadow: focusedField === field ? "0 0 0 3px rgba(2,132,199,0.1)" : "none",
  });

  const labelStyle = {
    display: "block",
    fontSize: "0.84rem",
    fontWeight: 600,
    color: "var(--text-primary)",
    marginBottom: "7px",
    fontFamily: "var(--font-sans)",
  };

  return (
    <Section id="contact" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid var(--steel-border)" }}>
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          badge="Get in Touch"
          title={siteConfig.contactHeading}
          subtitle={siteConfig.contactSupportingText}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: "clamp(36px, 6vw, 72px)",
            alignItems: "start",
          }}
        >
          {/* Left Column: Info & Socials */}
          <div>
            <div style={{ marginBottom: "36px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "12px",
                  letterSpacing: "-0.01em",
                }}
              >
                Start a Conversation
              </h3>
              <p
                style={{
                  fontSize: "0.96rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                }}
              >
                Whether you have an upcoming project, want to explore an AI opportunity, or require architectural consulting — we'd love to connect.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                marginBottom: "36px",
              }}
            >
              {/* Email Card */}
              <div
                style={{
                  background: "linear-gradient(145deg, #FFFFFF, var(--brand-tint))",
                  borderRadius: "16px",
                  padding: "18px 20px",
                  border: "1px solid var(--brand-tint-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 14px rgba(2,132,199,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--brand-primary)",
                      boxShadow: "0 2px 8px rgba(2,132,199,0.12)",
                      border: "1px solid var(--brand-tint-border)",
                    }}
                  >
                    <MailIcon />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--brand-primary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2px" }}>
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      style={{
                        fontSize: "0.96rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  style={{
                    background: copiedEmail ? "var(--brand-primary)" : "#FFFFFF",
                    border: "1px solid",
                    borderColor: copiedEmail ? "var(--brand-primary)" : "var(--steel-border)",
                    borderRadius: "8px",
                    padding: "7px 13px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: copiedEmail ? "#FFFFFF" : "var(--text-secondary)",
                    cursor: "pointer",
                    transition: "all 0.25s var(--ease-spring)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {copiedEmail ? "✓ Copied!" : "Copy"}
                </button>
              </div>

              {/* Location Card */}
              <div
                style={{
                  background: "var(--bg-subtle)",
                  borderRadius: "16px",
                  padding: "18px 20px",
                  border: "1px solid var(--steel-border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--brand-primary)",
                    boxShadow: "0 2px 6px rgba(15, 23, 42, 0.05)",
                    border: "1px solid var(--steel-border)",
                  }}
                >
                  <LocationIcon />
                </div>
                <div>
                  <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2px" }}>
                    Location
                  </div>
                  <div style={{ fontSize: "0.96rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    {siteConfig.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "14px" }}>
                Connect Online
              </div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {contactLinks.filter((link) => link.name !== "Email").map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target={s.url.startsWith("https://") ? "_blank" : undefined}
                    rel={s.url.startsWith("https://") ? "noopener noreferrer" : undefined}
                    title={s.handle}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "#FFFFFF",
                      border: "1px solid var(--steel-border)",
                      borderRadius: "10px",
                      padding: "10px 16px",
                      fontSize: "0.84rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "all 0.22s var(--ease-spring)",
                      boxShadow: "0 1px 3px rgba(15,23,42,0.04)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--brand-primary)";
                      e.currentTarget.style.color = "var(--brand-primary)";
                      e.currentTarget.style.background = "var(--brand-tint)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 6px 16px rgba(2,132,199,0.14)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--steel-border)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.background = "#FFFFFF";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 1px 3px rgba(15,23,42,0.04)";
                    }}
                  >
                    {getSocialIcon(s.icon)}
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "24px",
              border: "1px solid var(--steel-border)",
              padding: "clamp(28px, 4vw, 44px)",
              boxShadow: "0 8px 36px rgba(15, 23, 42, 0.07)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle top accent */}
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "3px", background: "linear-gradient(90deg, transparent, var(--brand-primary), transparent)" }} />

            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.15rem", color: "var(--text-primary)", marginBottom: "6px" }}>
              Send a Message
            </div>
            <p style={{ fontSize: "0.87rem", color: "var(--text-muted)", marginBottom: "28px" }}>
              We typically respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "16px", marginBottom: "16px" }}>
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" style={labelStyle}>
                    Name <span style={{ color: "var(--brand-primary)" }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    style={inputStyle("name")}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" style={labelStyle}>
                    Email <span style={{ color: "var(--brand-primary)" }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                    style={inputStyle("email")}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: "16px" }}>
                <label htmlFor="contact-subject" style={labelStyle}>
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. New Web Platform, AI Architecture Consulting"
                  style={inputStyle("subject")}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: "24px" }}>
                <label htmlFor="contact-message" style={labelStyle}>
                  Message <span style={{ color: "var(--brand-primary)" }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your objectives, timeline, or requirements..."
                  required
                  style={{ ...inputStyle("message"), resize: "vertical", minHeight: "140px" }}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: "100%",
                  backgroundColor: submitting ? "var(--steel-border)" : "var(--brand-primary)",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "12px",
                  padding: "15px 28px",
                  fontSize: "0.96rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-sans)",
                  cursor: submitting ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  boxShadow: submitting ? "none" : "0 4px 16px rgba(2,132,199,0.28)",
                  transition: "all 0.25s var(--ease-spring)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  if (!submitting) {
                    e.currentTarget.style.backgroundColor = "var(--brand-primary-hover)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(2,132,199,0.38)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!submitting) {
                    e.currentTarget.style.backgroundColor = "var(--brand-primary)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(2,132,199,0.28)";
                  }
                }}
              >
                {submitting ? (
                  <>
                    <span style={{ display: "inline-flex", gap: "4px" }}>
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          style={{
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.7)",
                            animation: `bounceDot 1.4s ease-in-out ${i * 0.16}s infinite`,
                          }}
                        />
                      ))}
                    </span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>

              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", textAlign: "center", marginTop: "14px" }}>
                Powered by Web3Forms. Your data is secure and never shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
