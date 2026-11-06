import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./ProductGridSkeleton.css";

type ProductGridSkeletonProps = {
  count?: number; // Сколько карточек-заглушек показать
  className?: string; // Чтобы можно было переопределить сетку снаружи
};

export function ProductGridSkeleton({
  count = 8,
  className = "",
}: ProductGridSkeletonProps) {
  return (
    <SkeletonTheme baseColor="#ececec" highlightColor="#f7f7f7">
      <div
        className={`product-grid-skeleton ${className}`.trim()}
        role="status"
        aria-label="Загрузка товаров"
      >
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="product-grid-skeleton__card">
            {/* Картинка */}
            <Skeleton
              className="product-grid-skeleton__image"
              containerClassName="product-grid-skeleton__image-wrap"
            />
            {/* Название и цена */}
            <Skeleton width="70%" />
            <Skeleton width="35%" />
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
}
