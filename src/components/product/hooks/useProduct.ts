import { useState, useEffect } from "react";
import type { Product } from "@/shared/types/product.ts";

type ProductResult = {
  id: number;
  product: Product | null; // null - если продукт не найден или ошибка
};

export function useProduct(id: number | null) {
  const [result, setResult] = useState<ProductResult | null>(null);

  useEffect(() => {
    if (id === null) return;

    const controller = new AbortController(); // Создаем контроллер для отмены запроса

    fetch(`/api/products/${id}`, { signal: controller.signal }) // Используем signal для возможности отмены запроса
      .then((response) => {
        if (!response.ok) {
          throw new Error("Продукт не найден"); // Если продукт не найден, выбрасываем ошибку
        }
        return response.json();
      })
      .then((data: Product | null) => {
        setResult({ id, product: data });
      })
      .catch((error) => {
        // Если ошибка не связана с отменой запроса, логируем её
        if (error.name !== "AbortError") {
          console.error("Ошибка:", error);
          setResult({ id, product: null });
        }
      });

    return () => controller.abort(); // Отменяем запрос при размонтировании компонента или изменении id
  }, [id]);

  const isLoading = id !== null && result?.id !== id; // Если id не null и результат еще не получен для текущего id, значит идет загрузка
  const product = result?.id === id ? result.product : null; // Если результат получен для текущего id, возвращаем продукт, иначе null

  return { product, isLoading };
}
