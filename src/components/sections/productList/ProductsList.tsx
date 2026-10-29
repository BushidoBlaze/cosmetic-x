import { ProductCard } from "@/components/productCard/ui/ProductCard.tsx";
import type { ProductsListProps } from "@/components/productCard/model/data";
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
