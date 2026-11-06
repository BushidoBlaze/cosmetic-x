import { useState } from "react";

type ShowMoreOptions<T> = {
  items: T[]; // полный список элементов
  contentSize?: number;
  resetKey?: unknown;
};

const defaultResultSize = 12; // кол-во элементов за один раз (12)

export function useShowMore<T>(options: ShowMoreOptions<T>) {
  // Если contentSize не передали, берём значение по умолчанию
  const contentSize = options.contentSize ?? defaultResultSize;

  const [visibleCount, setVisibleCount] = useState(contentSize);
  const [prevKey, setPrevKey] = useState(options.resetKey);

  // При смене запроса счётчик сбрасывается к первой странице
  if (prevKey !== options.resetKey) {
    setPrevKey(options.resetKey);
    setVisibleCount(contentSize);
  }

  const visibleItems = options.items.slice(0, visibleCount); // Часть списка, которую нужно отрисовать
  const hasMore = visibleCount < options.items.length; // Есть ли ещё элементы, которые можно показать

  // Увеличиваем число показанных элементов на +12
  const showMore = () => setVisibleCount((prev) => prev + contentSize);

  return { visibleItems, hasMore, showMore };
}
