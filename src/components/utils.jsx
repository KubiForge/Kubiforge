import { useState, useEffect } from "react";
import { useReveal } from "../hooks/useReveal";

/**
 * Animated typewriter effect with smooth cursor blink
 */
export function Typewriter({ words, speed = 80, delay = 2200 }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    let timer;

    if (!deleting && text.length < word.length) {
      timer = setTimeout(() => {
        setText(word.slice(0, text.length + 1));
      }, speed);
    } else if (!deleting && text.length === word.length) {
      timer = setTimeout(() => {
        setDeleting(true);
      }, delay);
    } else if (deleting && text.length > 0) {
      timer = setTimeout(() => {
        setText(text.slice(0, -1));
      }, speed / 2);
    } else if (deleting && text.length === 0) {
      timer = setTimeout(() => {
        setDeleting(false);
        setIdx((i) => i + 1);
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [text, deleting, idx, words, speed, delay]);

  return (
    <span style={{ color: "var(--brand-primary)", fontWeight: 600 }}>
      {text}
      <span
        style={{
          opacity: 1,
          animation: "pulseGlow 1s infinite",
          color: "var(--brand-primary)",
          marginLeft: "2px",
        }}
      >
        |
      </span>
    </span>
  );
}

/**
 * Semantic section component with standardized spacing and gentle fade-up
 */
export function Section({ id, children, className = "", style = {} }) {
  const [ref, visible] = useReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        paddingTop: "clamp(4.5rem, 8vw, 7.5rem)",
        paddingBottom: "clamp(4.5rem, 8vw, 7.5rem)",
        position: "relative",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

/**
 * Section Header Component for consistent title hierarchy
 */
export function SectionHeader({ badge, title, subtitle, align = "center" }) {
  const isLeft = align === "left";
  return (
    <div
      style={{
        textAlign: isLeft ? "left" : "center",
        maxWidth: isLeft ? "680px" : "760px",
        margin: isLeft ? "0 0 clamp(2.5rem, 5vw, 4rem)" : "0 auto clamp(2.5rem, 5vw, 4rem)",
      }}
    >
      {badge && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "5px 14px",
            borderRadius: "9999px",
            background: "var(--brand-tint)",
            border: "1px solid var(--brand-tint-border)",
            color: "var(--brand-primary)",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontFamily: "var(--font-display)",
            marginBottom: "1rem",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--brand-primary)",
            }}
          />
          {badge}
        </div>
      )}

      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
          fontWeight: 700,
          lineHeight: 1.2,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          marginBottom: subtitle ? "1rem" : "0",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            color: "var(--text-secondary)",
            lineHeight: 1.65,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
