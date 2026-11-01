import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";

import { useDebounce } from "../hooks/useDebounce.ts";
import { useProductSearch } from "../hooks/useProductSearch.ts";

import { useRotatingWord } from "../hooks/useRotatingWord.ts";
import { PLACEHOLDER_WORDS } from "../hooks/useRotatingWord.ts";

import "./InteractiveSearch.css";

type InteractiveSearchProps = {
  onNavigate?: () => void; // колбэк для закрытия панели поиска
  onClose?: () => void; // колбэк для закрытия панели поиска без перехода
};

export default function InteractiveSearch({
  onNavigate,
  onClose,
}: InteractiveSearchProps) {
  const [search, setSearch] = useState<string>("");

  // Строка поиска с задержкой в 300 мс после последнего символа (логика вынесена в кастомный хук)
  const debouncedSearch = useDebounce(search);

  const navigate = useNavigate();

  const placeholderWord = useRotatingWord(PLACEHOLDER_WORDS);

  // Сетевой запрос к MSW вынесен в хук: он отменяет устаревшие запросы и сам вычисляет состояние загрузки
  const { products, isLoading } = useProductSearch(debouncedSearch.trim());

  // Пустой запрос не показывает подсказки
  const hasInput = search.trim() !== "";

  // Что именно показывать пользователю под полем ввода
  const showLoader = hasInput && isLoading;
  const showProducts = hasInput && !isLoading ? products : [];
  const showEmpty = hasInput && !isLoading && products.length === 0;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = search.trim();
    if (trimmed === "") {
      return;
    }

    // encodeURIComponent экранирует пробелы и спецсимволы (&, ?, #)
    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    onNavigate?.(); // закрываем панель поиска
  }

  function handleSuggestionClick(id: number) {
    navigate(`/product/${id}`);
    onNavigate?.(); // закрываем панель поиска
  }

  return (
    <div className="search-bar__container">
      <form onSubmit={handleSubmit} className="search-bar">
        <div className="search-bar__field">
          <div className="search-bar__control">
            <input
              className="search-bar__input"
              type="text"
              aria-label="interactive-search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              autoFocus
            />

            {search === "" && (
              <div className="search-bar__hint" aria-hidden="true">
                <span className="search-bar__hint-static">Search for</span>
                <span className="search-bar__hint-window">
                  <span key={placeholderWord} className="search-bar__hint-word">
                    {placeholderWord}
                  </span>
                </span>
              </div>
            )}

            {showLoader && (
              <div className="search-bar__loader">Searching...</div>
            )}

            {/* Список подсказок */}
            {showProducts.length > 0 && (
              <ul className="search-bar__list">
                {showProducts.map((product) => (
                  <li key={product.id} className="search-bar__item">
                    <button
                      type="button"
                      className="search-bar__find-button"
                      onClick={() => handleSuggestionClick(product.id)}
                    >
                      <Search size={16} strokeWidth={1.6} color={"#ffffff"} />
                      {product.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {showEmpty && (
              <span className="search-bar__empty">Nothing found...</span>
            )}
          </div>

          <button
          type="submit"
          className="search-bar__button"
          >
            Search
          </button>

          <button
          type="button"
          className="close-button"
          onClick={onClose}
          >
            <X size={18} strokeWidth={1.75} />
          </button>
        </div>
      </form>
    </div>
  );
}
