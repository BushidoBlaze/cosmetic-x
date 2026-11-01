import { http, HttpResponse, delay } from "msw";
import { mockProducts } from "@/mocks/data/mock.data.products.ts";

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

  // Поиск товара по id
  http.get("/api/products/:id", async ({ params }) => {
    const id = Number(params.id);

    await delay(1500); // Небольшая задержка сети (имитация задержки)

    const product = mockProducts.find((product) => {
      return product.id === id;
    });

    // Если товара с таким id нет возвращаем 404
    if (!product) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(product);
  }),
];
