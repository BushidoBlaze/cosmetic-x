import { http, HttpResponse, delay } from "msw";
import { mockProducts } from "@/components/interactiveSearch/model/mocks.data.ts";

export const handlers = [
  // Поиск товаров
  http.get("/api/products", async ({ request }) => {
    const url = new URL(request.url);
    const searchQuery = url.searchParams.get("q")?.toLowerCase() || "";

    await delay(250); // Небольшая задержка сети (имитация задержки)

    if (!searchQuery) {
      return HttpResponse.json([]);
    }

    // Фильтруем массив по названию и бренду
    const filtered = mockProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchQuery) ||
        product.brand.toLowerCase().includes(searchQuery)
      );
    });

    return HttpResponse.json(filtered);
  }),
];
