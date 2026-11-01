// Общие types для компонентов Product...
import type { Product } from "@/shared/types/product.ts";

// for ProductCard.tsx
export type ProductCardProps = Pick<Product, "id" | "name" | "price" | "image">;

// for ProductList.tsx
export type ProductsListProps = {
  products: Product[];
};
