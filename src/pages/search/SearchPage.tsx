// Глобальные библиотеки
import { useSearchParams } from "react-router-dom";

// Компоненты
import { SearchEmpty } from "./components/SearchEmpty.tsx";
import { SearchHeader } from "./components/SearchHeader.tsx";
import { SearchResults } from "./components/SearchResults.tsx";

// Хуки
import { useProductSearch } from "@/components/interactiveSearch/hooks/useProductSearch.ts";

import "./SearchPage.css";

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();

  const { products, isLoading } = useProductSearch(query);

  let content; // Контент на странице

  // В случае загрузки контента
  if (isLoading) {
    <p className="spianer">Сюда можно спинер загрузки прикрутить</p>

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
        <SearchResults products={products} />
      </>
    );
  }

  return <div className="search-page">{content}</div>;
}
