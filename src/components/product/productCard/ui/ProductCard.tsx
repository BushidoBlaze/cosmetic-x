import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

import type { ProductCardProps } from "../model/types.ts";

import "./ProductCard.css";

export function ProductCard({ id, image, name, price }: ProductCardProps) {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="product-card">
      <div className="product-card__media">
        <img
          className="product-card__image"
          src={image}
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
        <h4 className="product-card__title">
          <Link to={`/product/${id}`} className="product-card__link">
            {name}
          </Link>
        </h4>
        <p className="product-card__price">{price}$</p>
      </div>
    </article>
  );
}
