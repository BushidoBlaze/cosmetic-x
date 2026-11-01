import { useState, useEffect } from "react";
import type { Product } from "../model/types.ts";

type SearchResult = {
  query: string;
  products: Product[];
};

export function useProductSearch(query: string) {
  const [result, setResult] = useState<SearchResult | null>(null);

  useEffect(() => {
    if (query === "") return;

    const controller = new AbortController(); // позволяет отменить запрос, если строка поиска изменилась

    // Сетевой запрос к MSW
    fetch(`/api/products?q=${encodeURIComponent(query)}`, {
      signal: controller.signal, // связываем запрос с контроллером
    })
      .then((res) => {
        if (!res.ok) throw new Error("Server error");
        return res.json();
      })
      .then((data: Product[]) => setResult({ query, products: data }))
      .catch((error) => {
        if (error.name === "AbortError") return;
        console.log("Ничего не найдено");
        setResult({ query, products: [] });
      });

    return () => controller.abort();
  }, [query]);

  // Загрузка = запрос не пустой, но результата именно для него ещё нет
  const isLoading = query !== "" && result?.query !== query;
  // Показываем результат, только если он относится к текущему запросу (устаревшие данные не попадут в UI)
  const products = result?.query === query ? result.products : [];

  return { products, isLoading };
}
