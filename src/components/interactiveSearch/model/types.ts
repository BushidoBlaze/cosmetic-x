export type Product = {
  id: number;
  name: string;
  brand: string;
  category: "skincare" | "makeup" | "hair" | "fragrance";
  price: number;
  image: string;
  description: string;
};
