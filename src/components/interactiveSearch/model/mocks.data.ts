import type { Product } from "./types.ts";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Advanced Night Repair Serum",
    brand: "Estee Lauder",
    category: "skincare",
    price: 115,
    image: "https://unsplash.com",
    description:
      "Deep and fast penetrating face serum that reduces the look of multiple signs of aging.",
  },
  {
    id: 2,
    name: "Matte Liquid Lipstick",
    brand: "MAC",
    category: "makeup",
    price: 26,
    image: "https://unsplash.com",
    description:
      "A lipstick formula with high color payoff in a no-shine matte finish.",
  },
  {
    id: 3,
    name: "Hydrating Shampoo with Argan Oil",
    brand: "Moroccanoil",
    category: "hair",
    price: 28,
    image: "https://unsplash.com",
    description:
      "Gently cleanses and infuses dry hair with antioxidant-rich argan oil.",
  },
  {
    id: 4,
    name: "Bleu de Chanel Eau de Parfum",
    brand: "Chanel",
    category: "fragrance",
    price: 145,
    image: "https://unsplash.com",
    description:
      "An aromatic-woody fragrance with a captivating trail. A timeless scent housed in a deep and mysterious blue bottle.",
  },
  {
    id: 5,
    name: "Hyaluronic Acid 2% + B5",
    brand: "The Ordinary",
    category: "skincare",
    price: 9,
    image: "https://unsplash.com",
    description:
      "A water-based formula combining low-, medium- and high-molecular-weight hyaluronic acid molecules.",
  },
];
