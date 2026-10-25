# Kubi Forge — Official Website

> **Forge the Future.**  
> *Ideas into Impact.*  
> **Think Bold. Build Beyond.**

The official, modern, high-performance website for **Kubi Forge** — an ambitious software and technology company focused on building innovative software products, digital experiences, and intelligent solutions.

---

## 🎨 Visual Design & Brand Direction

- **Theme**: Premium light theme with soft off-white canvas (`#FAFBFC`) and crisp white elevated cards (`#FFFFFF`).
- **Typography**: Near-black charcoal typography (`#0B132B`) for strong readability, paired with `Plus Jakarta Sans` and `Space Grotesk`.
- **Accent Identity**: High-tech electric azure blue (`#0284C7`) and luminous cyan highlights (`#0EA5E9`) inspired by the official Kubi Forge emblem.
- **Brand Identity**: Features the official Kubi Forge logo seamlessly across navigation, hero showcase, and footer without distortion or recoloring.

---

## 🏗️ Architecture & Editable Data

Content and data configurations are strictly decoupled from visual presentation components:

| Data File | Description |
|-----------|-------------|
| `src/data/siteConfig.js` | Brand names, vision, mission, tagline, contact emails, social channels, and backend endpoint. |
| `src/data/servicesData.js` | The 6 core service offerings, taglines, highlights, and icons. |
| `src/data/projectsData.js` | Featured projects, categories, screenshots, demo links, and GitHub repository links. |
| `src/data/teamData.js` | Team members array with schema for name, role, photo, bio, and social links. Automatically renders an elegant brand-focused empty state if no real members are configured. |

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 👥 Managing Team Members

Founder data is managed in `src/data/teamData.js`. The current profiles intentionally use only verified names, the shared Founder designation, and the available Sathira photo. Add biographies or social links only when the team provides and verifies them.

---

## 📬 Contact Form Backend Integration

The contact form includes complete client-side validation and responsive states. To route submissions to your email:
1. In `src/data/siteConfig.js`, set `formEndpoint` to your Formspree, Resend, or custom API URL:
```javascript
export const siteConfig = {
  ...
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
  ...
};
```

---

## 🛠️ Tech Stack

- **React 19**
- **Vite**
- **Vanilla Modern CSS** (Zero bloated CSS framework dependencies, zero runtime overhead)
- **Google Fonts** (`Plus Jakarta Sans`, `Space Grotesk`, `JetBrains Mono`)

---

© Kubi Forge. Think Bold. Build Beyond.
