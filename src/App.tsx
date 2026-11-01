import { BrowserRouter, Routes, Route } from "react-router-dom";

import useScrollReveal from "./shared/hooks/scrollReveal/useScrollReveal"; //кастомный хук плавной прокрутки страницы
import { BackToTopButton } from "./ui/backToTop/BackToTop.tsx"; //компонент прокрутки страницы в самое начало

// Использована единая точка входа для всех export-import для папки кастомных страниц
import Home from "./pages/home/ui/Home.tsx"; // домашняя страница приложения
import Login from "./pages/login/ui/Login.tsx"; // страница входа (пока только UI/UX)
import Register from "./pages/register/ui/Register.tsx"; // страница регистрации (пока только UI/UX)
import NotFound from "./pages/notFound/ui/NotFound.tsx"; // страница 404

// Единый лаяут (оболочка) приложения
import MainLayout from "./layouts/mainLayout/MainLayout.tsx";

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

          {/*Заглушка - element={<p>Product page (WIP)</p>}*/}
          <Route path="/search/:id" element={<p>Product page (WIP)</p>} />
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
