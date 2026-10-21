import { useState } from "react";
import { Section, SectionHeader } from "./utils";
import { projectsData, projectCategories } from "../data/projectsData";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <Section id="projects" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid var(--steel-border)", borderBottom: "1px solid var(--steel-border)" }}>
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          badge="Portfolio & Solutions"
          title="Featured Projects"
          subtitle="Explore digital products and intelligent software platforms developed with modern engineering standards."
        />

        {/* Filter Pills */}
        <div
          role="tablist"
          aria-label="Project Categories"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "clamp(36px, 5vw, 56px)",
          }}
        >
          {projectCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: isActive
                    ? "var(--brand-primary)"
                    : "#FFFFFF",
                  color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                  border: "1px solid",
                  borderColor: isActive ? "var(--brand-primary)" : "var(--steel-border)",
                  borderRadius: "9999px",
                  padding: "8px 20px",
                  fontSize: "0.86rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-sans)",
                  cursor: "pointer",
                  transition: "all 0.22s var(--ease-spring)",
                  boxShadow: isActive ? "0 4px 14px rgba(2,132,199,0.28)" : "0 1px 3px rgba(15,23,42,0.05)",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "var(--brand-primary)";
                    e.currentTarget.style.color = "var(--brand-primary)";
                    e.currentTarget.style.background = "var(--brand-tint)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "var(--steel-border)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.background = "#FFFFFF";
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(24px, 4vw, 36px)",
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <article
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        border: "1px solid var(--steel-border)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.35s var(--ease-spring)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        borderColor: hovered ? "rgba(2,132,199,0.35)" : "var(--steel-border)",
        boxShadow: hovered
          ? "0 20px 40px -8px rgba(15, 23, 42, 0.14), 0 4px 12px rgba(2, 132, 199, 0.08)"
          : "0 4px 16px rgba(15, 23, 42, 0.06)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Project Image Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "220px",
          backgroundColor: "#F1F5F9",
          overflow: "hidden",
        }}
      >
        {!imageError && project.image ? (
          <img
            src={project.image}
            alt={`${project.title} Preview`}
            width="960"
            height="640"
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              transition: "transform 0.6s var(--ease-spring)",
              transform: hovered ? "scale(1.06)" : "scale(1)",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              background: "linear-gradient(135deg, #F8FAFC 0%, var(--brand-tint) 100%)",
              color: "var(--brand-primary)",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "rgba(2,132,199,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)" }}>{project.title}</span>
          </div>
        )}

        {/* Overlay gradient on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 60%, rgba(11,19,43,0.12) 100%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.35s ease",
            pointerEvents: "none",
          }}
        />

        {/* Category Pill Tag */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            left: "14px",
            background: "rgba(255, 255, 255, 0.94)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(226, 232, 240, 0.9)",
            borderRadius: "8px",
            padding: "4px 11px",
            fontSize: "0.72rem",
            fontWeight: 700,
            color: "var(--brand-primary-hover)",
            fontFamily: "var(--font-display)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            boxShadow: "0 2px 6px rgba(15, 23, 42, 0.08)",
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: "clamp(22px, 3.5vw, 30px)",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "10px",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: "0.92rem",
            color: "var(--text-secondary)",
            lineHeight: 1.68,
            marginBottom: "20px",
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Technology Badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "22px",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.74rem",
                fontWeight: 500,
                color: "var(--text-secondary)",
                background: "var(--bg-subtle)",
                border: "1px solid var(--steel-border)",
                padding: "4px 10px",
                borderRadius: "6px",
                fontFamily: "var(--font-mono)",
                transition: "all 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--brand-tint)";
                e.currentTarget.style.borderColor = "var(--brand-tint-border)";
                e.currentTarget.style.color = "var(--brand-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--bg-subtle)";
                e.currentTarget.style.borderColor = "var(--steel-border)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            paddingTop: "16px",
            borderTop: "1px solid var(--steel-border)",
          }}
        >
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--brand-primary)",
                textDecoration: "none",
                transition: "color 0.2s ease, gap 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--brand-primary-hover)";
                e.currentTarget.style.gap = "8px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--brand-primary)";
                e.currentTarget.style.gap = "6px";
              }}
            >
              <span>Live Preview</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                textDecoration: "none",
                marginLeft: project.demoUrl ? "auto" : "0",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>Repository</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
