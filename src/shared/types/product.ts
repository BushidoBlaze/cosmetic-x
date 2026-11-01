export type ProductLabel = "soleil" | "nuit";

export type Product = {
  id: number;
  name: string;
  brand: string;
  label?: ProductLabel;
  category: "skincare" | "makeup" | "hair" | "fragrance";
  price: number;
  image: string;
  description: string;
};
