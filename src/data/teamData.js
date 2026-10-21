/**
 * Kubi Forge — Team Data Configuration
 * 
 * NOTICE:
 * To add team members, uncomment or append member objects to the `teamMembers` array below.
 * Each member supports:
 *  - id: unique identifier string
 *  - name: string
 *  - role: string
 *  - bio: string
 *  - photo: string (URL or path inside /public, e.g., "/team/john.webp")
 *  - socialLinks: array of { platform: "github" | "linkedin" | "twitter" | "email", url: "..." }
 * 
 * If `teamMembers` is empty ([]), the Team section automatically displays
 * an elegant brand-focused message and tasteful empty state as requested.
 */

export const teamConfig = {
  heading: "The Minds Behind the Forge",
  subheading: "A team built on bold ideas, shared ambition, and a passion for creating meaningful technology.",
  emptyStateTitle: "Forging the Team",
  emptyStateMessage: "We are a focused collective of software engineers, product designers, and creative technologists dedicated to building impactful digital solutions. Official member profiles and leadership spotlights will be published here as our forge expands.",
  ctaText: "Join Our Journey",
  ctaLink: "#contact"
};

export const teamMembers = [
  /*
  // Example Team Member format — uncomment and fill in when ready:
  {
    id: "member-1",
    name: "Alex Vance",
    role: "Lead Software Architect",
    bio: "Focusing on distributed systems, reactive architectures, and intelligent software tooling.",
    photo: "/team/alex.webp", // Place image in /public/team/
    socialLinks: [
      { platform: "github", url: "https://github.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "twitter", url: "https://twitter.com" }
    ]
  }
  */
];
