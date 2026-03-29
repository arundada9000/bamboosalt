export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  weight: string;
  imagePath: string;
  isBest?: boolean;
}

export const products: Product[] = [
  {
    id: "3x-roasted",
    name: "3x Roasted Bamboo Salt",
    shortDescription: "Perfect for daily culinary use. Enhances flavor while providing essential minerals.",
    weight: "250g | 500g",
    imagePath: "/images/image3.jpeg",
  },
  {
    id: "6x-roasted",
    name: "6x Roasted Bamboo Salt",
    shortDescription: "A balanced blend for health and culinary mastery. Deep roasted flavor.",
    weight: "200g | 400g",
    imagePath: "/images/image2.jpeg",
  },
  {
    id: "9x-roasted",
    name: "9x Premium Bamboo Salt",
    shortDescription: "Our finest quality. Maximum mineral concentration for therapeutic benefits.",
    weight: "100g | 250g",
    imagePath: "/images/image1.jpeg",
    isBest: true,
  },
];
