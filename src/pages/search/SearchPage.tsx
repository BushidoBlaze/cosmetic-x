import { useSearchParams, Link } from "react-router-dom";
import { useProductSearch } from "@/components/interactiveSearch/hooks/useProductSearch.ts";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();

  const { products, isLoading } = useProductSearch(query);

  if (query === "") return <p>Введите поисковый запрос</p>;
  if (isLoading) return <p>Загрузка...</p>;

  return (
    <section>
      <h1>Результаты по запросу {query}</h1>

      {products.length === 0 ? (
        <p>Ничего не найдено</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>
                {product.name} — {product.brand}, ${product.price}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
