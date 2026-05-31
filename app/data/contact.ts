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
