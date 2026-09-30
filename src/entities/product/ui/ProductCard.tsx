import { useState } from "react";
import { Heart } from "lucide-react";
import type { ProductCardProps } from "../model/types";

import "./ProductCard.css";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function ProductCard({ url, name, price }: ProductCardProps) {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="product-card">
      <div className="product-card__media">
        <img
          className="product-card__image"
          src={url}
          alt={name}
          loading="lazy"
        />

        <button
          type="button"
          className={`product-card__favorite${favorite ? " product-card__favorite--active" : ""}`}
          onClick={() => setFavorite((v) => !v)}
          aria-pressed={favorite}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart size={16} strokeWidth={1.75} />
        </button>

        <button type="button" className="product-card__quick-add">
          Add to bag
        </button>
      </div>

      <div className="product-card__info">
        <h4 className="product-card__title">{name}</h4>
        <p className="product-card__price">{priceFormatter.format(price)}</p>
      </div>
    </article>
  );
}
