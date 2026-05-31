export const AUTHOR = {
  name: "Arun Neupane",
  email: "arunneupane0000@gmail.com",
  portfolio: "https://arunneupane.netlify.app",
  linkedin: "https://linkedin.com/in/arundada9000",
  youtube: "https://youtube.com/@arundada9000",
  facebook: "https://facebook.com/arundada9000",
  instagram: "https://instagram.com/arundada9000",
  phone: "+977-9811420975",
  phoneRaw: "9779811420975",
} as const;

export function getWhatsAppUrl(phone: string, message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}
