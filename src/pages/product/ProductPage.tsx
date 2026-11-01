import { useParams } from "react-router-dom";
import { useProduct } from "@/components/product/hooks/useProduct.ts";

import "./ProductPage.css";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();

  const productId = Number(id);
  const isValidId = Number.isInteger(productId) && productId > 0;

  const { product, isLoading } = useProduct(isValidId ? productId : null);

  if (isLoading) return <p className="product-page__status">Loading...</p>;

  if (!isValidId || !product) {
    return <p className="product-page__status">Результат не найден</p>;
  }

  return (
    <section className="product-page">
      <img
        className="product-page__image"
        src={product.image}
        alt={product.name}
      />

      <div className="product-page__info">
        <h1 className="product-page__title">{product.name}</h1>
        <p className="product-page__price">{product.price}$</p>
      </div>
    </section>
  );
}
