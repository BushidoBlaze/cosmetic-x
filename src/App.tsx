import { BrowserRouter, Routes, Route } from "react-router-dom";

import useScrollReveal from "./shared/hooks/scrollReveal/useScrollReveal"; //кастомный хук плавной прокрутки страницы
import { BackToTopButton } from "./ui/backToTop/ui/BackToTop.tsx"; //компонент прокрутки страницы в самое начало

// Использована единая точка входа для всех export-import для папки кастомных страниц
import { Home } from "./pages/index.ts"; //домашняя страница приложения
import { Login } from "./pages/index.ts"; //страница входа (пока только UI/UX)
import { Register } from "./pages/index.ts"; //страница регистрации (пока только UI/UX)
import { NotFound } from "./pages/index.ts"; //страница 404

// Единый лаяут (оболочка) приложения
import MainLayout from "./layouts/MainLayout.tsx";

// Импорт глобальных стилей
import "./shared/styles/reset.css";
import "./shared/styles/global.css";
import "./shared/styles/fonts.css";

function AppRoutes() {
  useScrollReveal();

  return (
    <>
      <BackToTopButton />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/log-in" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </BrowserRouter>
  );
}
