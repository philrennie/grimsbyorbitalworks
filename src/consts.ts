// Site-wide constants — imported across layouts, components, and pages.

export const SITE_TITLE = 'Grimsby Orbital Works';
export const SITE_DESCRIPTION =
  "Four hundred years of ships, stories, and stubbornness. An enthusiast\u2019s archive of the company that built half the \u2019Verse.";

/** Main navigation links */
export const NAV_LINKS = [
  { label: 'Ships', href: '/ships' },
  { label: 'Company', href: '/company' },
  { label: 'Workshop', href: '/workshop' },
  { label: 'Journal', href: '/journal' },
  { label: 'About', href: '/about' },
] as const;
