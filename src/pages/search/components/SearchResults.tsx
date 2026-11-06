import type { ProductsListProps } from "@/components/product/productCard/model/types.ts";
import { ProductCard } from "@/components/product/productCard/ui/ProductCard.tsx";

export function SearchResults({ products }: ProductsListProps) {
  return (
    <div className="search-results">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
