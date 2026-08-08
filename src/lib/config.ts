/**
 * HOC Super App — Centralized Configuration
 * Edit this file to update all links, contact info, and key content across the website.
 */

export const HOC_CONFIG = {
  // ─── Founder ────────────────────────────────────────────────────────────────
  founder: {
    name: 'Hossein Sadeghqol Moghadam',
    role: 'Inventor · Innovator · Developer',
    email: 'hoc.token@gmail.com',
    location: 'Global / Remote',
    bio: `I am Hossein Sadeghqol Moghadam, an inventor and developer working on innovative projects in technology, green energy, and software.\n\nThe HOC Super App is a long-term project developed through years of research, planning, experimentation and continuous learning.\n\nThis project is currently in the prototyping, testing, debugging, and development stages. So far, two functional prototypes have been designed and built.`,
  },

  // ─── Token ──────────────────────────────────────────────────────────────────
  token: {
    contractAddress: 'Coming Soon',   // ← Replace with official contract address when available
    tokenPageUrl: '#',                // ← Replace with official token page URL when available
    name: 'HOC Token',
    symbol: 'HOC',
  },

  // ─── Social Links ────────────────────────────────────────────────────────────
  social: {
    twitter: 'https://twitter.com/HOCSuperApp',       // ← Replace with official X/Twitter URL
    instagram: 'https://instagram.com/HOCSuperApp',   // ← Replace with official Instagram URL
    github: 'https://github.com/HOCSuperApp',         // ← Replace with official GitHub URL
    pumpfun: 'https://pump.fun',                      // ← Replace with official Pump.fun URL
  },

  // ─── App Store Links ─────────────────────────────────────────────────────────
  appStore: {
    android: '#',   // ← Replace with Google Play Store URL when available
    ios: '#',       // ← Replace with Apple App Store URL when available
  },
} as const;

