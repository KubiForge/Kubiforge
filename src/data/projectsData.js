/**
 * Kubi Forge — Projects Data Configuration
 * 
 * Showcase real company projects and clearly designated prototype/concept works.
 * Easy to update, add, or swap project cards.
 */

export const projectCategories = ["All", "Web Applications", "AI Solutions", "Digital Products"];

export const projectsData = [
  {
    id: "lankago-ai",
    title: "Lankago AI",
    category: "AI Solutions",
    description: "An intelligent, locally aware AI assistance platform engineered to deliver contextual responses, automated insights, and specialized utility tools for regional user workflows.",
    tags: ["AI & NLP", "PHP", "MySQL", "JavaScript", "REST APIs"],
    image: "/projects/lankago.jpg",
    demoUrl: "https://your-lankago-demo-url.com", // Replace with live URL or remove if private
    githubUrl: "", // Add repo URL if open source
    isPlaceholder: false,
    featured: true
  },
  {
    id: "xaro-clothing",
    title: "Xaro Clothing",
    category: "Web Applications",
    description: "A sleek, responsive digital storefront engineered with dynamic product catalogs, fluid cart interactions, and modern front-end state management.",
    tags: ["React", "TypeScript", "Tailored CSS", "Responsive UI"],
    image: "/projects/xaro.jpg",
    demoUrl: "https://sathirasugeesvara.github.io/xaro-clothing/",
    githubUrl: "https://github.com/sathirasugeesvara/xaro-clothing",
    isPlaceholder: false,
    featured: true
  },
  {
    id: "pandora-welcome",
    title: "Pandora Welcome App",
    category: "Digital Products",
    description: "An immersive onboarding experience featuring cinematic aesthetic presentation, smooth layered transitions, and clean interactive feedback states.",
    tags: ["React", "CSS Architecture", "Animation", "Vercel"],
    image: "/projects/pandora.jpg",
    demoUrl: "https://pandora-welcome-app.vercel.app",
    githubUrl: "",
    isPlaceholder: false,
    featured: true
  },
  {
    id: "developer-portal",
    title: "Developer Portfolio & Showcase",
    category: "Web Applications",
    description: "A high-performance personal engineering portfolio featuring milestone timelines, responsive project showcases, and accessible layout design.",
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    image: "/projects/sathiraportfolio.jpg",
    demoUrl: "https://sathirasugeesvara.github.io",
    githubUrl: "https://github.com/sathirasugeesvara",
    isPlaceholder: false,
    featured: false
  }
];
