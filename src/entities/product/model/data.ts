export type ProductCard = {
  id: number;
  url: string;
  name: string;
  price: number;
  label: "soleil" | "nuit";
};

// for ProductCard.tsx
export type ProductCardProps = Omit<ProductCard, "label">;

// for ProductList.tsx
export type ProductsListProps = {
  products: ProductCard[];
};

// SOLEIL_VII
import Image1 from "@/shared/assets/images/productCard/product-1.webp";
import Image2 from "@/shared/assets/images/productCard/product-2.webp";
import Image3 from "@/shared/assets/images/productCard/product-3.webp";
import Image4 from "@/shared/assets/images/productCard/product-4.webp";
// NUIT_DOPALE
import Image5 from "@/shared/assets/images/productCard/product-5.webp";
import Image6 from "@/shared/assets/images/productCard/product-6.webp";
import Image7 from "@/shared/assets/images/productCard/product-7.webp";
import Image8 from "@/shared/assets/images/productCard/product-8.webp";

export const MOCKS_PRODUCT_CARD: ProductCard[] = [
  {
    id: 1,
    url: Image1,
    name: "Oud Minuit",
    price: 750,
    label: "soleil",
  },
  {
    id: 2,
    url: Image2,
    name: "Nuit de Suède",
    price: 420,
    label: "soleil",
  },
  {
    id: 3,
    url: Image3,
    name: "Iris Ombre",
    price: 680,
    label: "soleil",
  },
  {
    id: 4,
    url: Image4,
    name: "Jasmin Rêve",
    price: 1200,
    label: "soleil",
  },
  {
    id: 5,
    url: Image5,
    name: "Velvet Noir",
    price: 300,
    label: "nuit",
  },
  {
    id: 6,
    url: Image6,
    name: "Rose Élysée",
    price: 400,
    label: "nuit",
  },
  {
    id: 7,
    url: Image7,
    name: "Silk Bloom",
    price: 500,
    label: "nuit",
  },
  {
    id: 8,
    url: Image8,
    name: "Amber Solstice",
    price: 600,
    label: "nuit",
  },
];
