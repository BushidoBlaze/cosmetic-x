import type { Product } from "@/shared/types/product.ts";

// SOLEIL_VII
import Image1 from "/images/productCard/product-1.webp";
import Image2 from "/images/productCard/product-2.webp";
import Image3 from "/images/productCard/product-3.webp";
import Image4 from "/images/productCard/product-4.webp";
// NUIT_DOPALE
import Image5 from "/images/productCard/product-5.webp";
import Image6 from "/images/productCard/product-6.webp";
import Image7 from "/images/productCard/product-7.webp";
import Image8 from "/images/productCard/product-8.webp";

export const MOCKS_PRODUCTS: Product[] = [
  // Товары главной страницы (label определяет секцию)
  {
    id: 1,
    name: "Oud Minuit",
    brand: "X|Cos",
    category: "fragrance",
    price: 750,
    image: Image1,
    description: "...",
    label: "soleil",
  },
  {
    id: 2,
    name: "Nuit de Suède",
    brand: "X|Cos",
    category: "fragrance",
    price: 420,
    image: Image2,
    description: "...",
    label: "soleil",
  },
  {
    id: 3,
    name: "Iris Ombre",
    brand: "X|Cos",
    category: "fragrance",
    price: 680,
    image: Image3,
    description: "...",
    label: "soleil",
  },
  {
    id: 4,
    name: "Jasmin Rêve",
    brand: "X|Cos",
    category: "fragrance",
    price: 1200,
    image: Image4,
    description: "...",
    label: "soleil",
  },
  {
    id: 5,
    name: "Velvet Noir",
    brand: "X|Cos",
    category: "fragrance",
    price: 300,
    image: Image5,
    description: "...",
    label: "nuit",
  },
  {
    id: 6,
    name: "Rose Élysée",
    brand: "X|Cos",
    category: "fragrance",
    price: 400,
    image: Image6,
    description: "...",
    label: "nuit",
  },
  {
    id: 7,
    name: "Silk Bloom",
    brand: "X|Cos",
    category: "fragrance",
    price: 500,
    image: Image7,
    description: "...",
    label: "nuit",
  },
  {
    id: 8,
    name: "Amber Solstice",
    brand: "X|Cos",
    category: "fragrance",
    price: 600,
    image: Image8,
    description: "...",
    label: "nuit",
  },

  // Остальные товары каталога (без label, на главной не показываются)
  {
    id: 9,
    name: "Advanced Night Repair Serum",
    brand: "Estee Lauder",
    category: "skincare",
    price: 115,
    image: Image1, // временная картинка
    description:
      "Deep and fast penetrating face serum that reduces the look of multiple signs of aging.",
  },
  {
    id: 10,
    name: "Matte Liquid Lipstick",
    brand: "MAC",
    category: "makeup",
    price: 26,
    image: Image2, // временная картинка
    description:
      "A lipstick formula with high color payoff in a no-shine matte finish.",
  },
  {
    id: 11,
    name: "Hydrating Shampoo with Argan Oil",
    brand: "Moroccanoil",
    category: "hair",
    price: 28,
    image: Image3, // временная картинка
    description:
      "Gently cleanses and infuses dry hair with antioxidant-rich argan oil.",
  },
  {
    id: 12,
    name: "Bleu de Chanel Eau de Parfum",
    brand: "Chanel",
    category: "fragrance",
    price: 145,
    image: Image4, // временная картинка
    description:
      "An aromatic-woody fragrance with a captivating trail. A timeless scent housed in a deep and mysterious blue bottle.",
  },
  {
    id: 13,
    name: "Hyaluronic Acid 2% + B5",
    brand: "The Ordinary",
    category: "skincare",
    price: 9,
    image: Image5, // временная картинка
    description:
      "A water-based formula combining low-, medium- and high-molecular-weight hyaluronic acid molecules.",
  },
];
