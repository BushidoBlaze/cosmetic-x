import { useState } from "react";
import { Heart } from "lucide-react";
import type { ProductCardProps } from "../model/data.ts";

import "./ProductCard.css";

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
          onClick={() => setFavorite((favorite) => !favorite)}
        >
          <Heart size={16} strokeWidth={1.75} />
        </button>

        <button type="button" className="product-card__quick-add">
          Add to bag
        </button>
      </div>

      <div className="product-card__info">
        <h4 className="product-card__title">{name}</h4>
        <p className="product-card__price">{price}$</p>
      </div>
    </article>
  );
}
