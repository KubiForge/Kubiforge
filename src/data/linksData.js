import { siteConfig } from "./siteConfig";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const localPhoneNumber = siteConfig.contactPhone.replace(/\D/g, "");
const internationalPhoneNumber = localPhoneNumber.startsWith("0")
  ? `94${localPhoneNumber.slice(1)}`
  : localPhoneNumber;

export const contactLinks = [
  {
    name: "WhatsApp",
    url: `https://wa.me/${internationalPhoneNumber}`,
    handle: siteConfig.contactPhone,
    icon: "whatsapp",
  },
  {
    name: "Call",
    url: `tel:+${internationalPhoneNumber}`,
    handle: siteConfig.contactPhone,
    icon: "phone",
  },
  {
    name: "Email",
    url: `mailto:${siteConfig.contactEmail}`,
    handle: siteConfig.contactEmail,
    icon: "email",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1C7KrUUGnp/",
    handle: "Kubi Forge on Facebook",
    icon: "facebook",
  },
];
