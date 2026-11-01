import { ProductCard } from "@/components/product/productCard/ui/ProductCard";
import type { ProductsListProps } from "@/components/product/productCard/model/types.ts";
import "./ProductsList.css";

export function ProductsList({ products }: ProductsListProps) {
  return (
    <section className="products-list">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
}
