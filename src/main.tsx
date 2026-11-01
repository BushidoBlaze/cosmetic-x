import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Функция запуска моков MSW (Mock Service Worker)
async function enableMockingMSW() {
  // Включаем MSW в dev или если явно разрешены флагом VITE_ENABLE_MOCKS
  const isMockEnabled = import.meta.env.DEV || import.meta.env.VITE_ENABLE_MOCKS === "true";

  if (!isMockEnabled) {
    return;
  }

  // Динамически импортируем воркер
  const { worker } = await import("./mocks/browser.ts");

  // Запуск MSW
  return worker.start({
    onUnhandledFrame: "bypass", // Убираем ошибки в консоли на запросы к стилям и картинкам сборщика проекта
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
    },
  });
}

enableMockingMSW().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
