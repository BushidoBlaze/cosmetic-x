import { ProductCard } from "@/entities/product";
import type { ProductsListProps } from "@/entities/product/model/data.ts";
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
