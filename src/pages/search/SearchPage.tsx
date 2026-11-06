// Глобальные библиотеки
import { useSearchParams } from "react-router-dom";

// Компоненты
import { SearchEmpty } from "./components/SearchEmpty.tsx";
import { SearchHeader } from "./components/SearchHeader.tsx";
import { SearchResults } from "./components/SearchResults.tsx";
import { SearchMoreResult } from "./components/SearchMoreResult.tsx";
import { ProductGridSkeleton } from "@/components/productGridSkeleton/ProductGridSkeleton.tsx";

// Хуки
import { useProductSearch } from "@/components/interactiveSearch/hooks/useProductSearch.ts";
import { useShowMore } from "./hooks/useShowMore.ts";

import "./SearchPage.css";

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();

  const { products, isLoading } = useProductSearch(query);

  let content; // Контент на странице

  // Вызов хука для кнопки (показать больше)
  const { visibleItems, hasMore, showMore } = useShowMore({
    items: products,
    resetKey: query,
  });

  // В случае загрузки контента
  if (isLoading) {
    content = <ProductGridSkeleton count={8} />; // Имитация загрузки (скелетон)

    // В случае если после загрузки контента, похожий контент не обнаружен
  } else if (products.length === 0) {
    content = (
      <SearchEmpty
        title="Ничего не найдено"
        text="Проверьте написание или попробуйте изменить запрос."
      />
    );
    // В случае успешной загрузки контента
  } else {
    content = (
      <>
        <SearchHeader count={products.length} />
        <SearchResults products={visibleItems} />
        {hasMore && <SearchMoreResult text="Show more" onClick={showMore} />}
      </>
    );
  }

  return <div className="search-page">{content}</div>;
}
