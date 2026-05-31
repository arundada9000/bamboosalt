/// Canonical source: AUTHOR.md (see "Contact" section)
/// Keep this file in sync with the data in AUTHOR.md.

export const AUTHOR = {
  name: "Arun Neupane",
  email: "arunneupane0000@gmail.com",
  portfolio: "https://arunneupane.netlify.app",
  linkedin: "https://linkedin.com/in/arundada9000",
  youtube: "https://youtube.com/@arundada9000",
  phone: "+977-9811420975",
  phoneRaw: "9779811420975",
} as const;

export const BUSINESS = {
  name: "Nepal Bamboo Salt",
  nameFull: "Nepal Bamboo Salt Pvt. Ltd.",
  email: "info@nplbamboosalt.com",
  address: "Bardiya Badhaiyatal-08, Nepal",
  phones: {
    main: "+977-9851216564",
    whatsapp: "+977-9704741630",
    alternate: "+977-9858040765",
  },
  phoneRaw: {
    main: "+9779851216564",
    whatsapp: "9779704741630",
    alternate: "+9779858040765",
  },
  social: {
    facebook: "#",
    instagram: "#",
  },
} as const;

export function getWhatsAppUrl(phone: string, message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}
