# Cosmetic X

Современный одностраничный интернет-магазин косметики, построенный на **React 19**, **TypeScript** и **Vite**. Архитектура проекта следует методологии [Feature-Sliced Design](https://feature-sliced.design/) — код разделён на слои `app`, `pages`, `widgets`, `entities`, `shared`.

## Стек

- **React 19** + **React DOM**
- **TypeScript 5.9**
- **Vite 8** — сборщик и dev-сервер с HMR
- **React Router 7** — клиентская маршрутизация
- **lucide-react** — иконки
- **ESLint 9** + `typescript-eslint` — статический анализ
- **CSS Modules / vanilla CSS** — стилизация компонентов

## Возможности

- Главная страница с hero-секцией, категориями, списком продуктов и сервисами
- Адаптивный header с рекламной строкой и боковой навигацией
- Страницы авторизации и регистрации с собственным layout
- Кастомная 404-страница
- Плавные анимации появления секций (`useScrollReveal`)
- Полноэкранные видео-баннеры в hero/категориях
- Кнопка «наверх» с автоскрытием
- Локальные шрифты (Inter, Raleway, SF Pro Display) в `woff2`

## Структура проекта

```
src/
├── app/            # Корневая обёртка приложения, layouts, глобальные стили
├── pages/          # Страницы: home, login, register, notFound
├── widgets/        # Композитные блоки: header, hero, footer, productList, …
├── entities/       # Бизнес-сущности: product (модель + UI карточки)
├── shared/         # Переиспользуемые UI, хуки, шрифты, изображения, видео
└── main.tsx        # Точка входа
```

## Запуск

Требуется **Node.js ≥ 20**.

```bash
# установка зависимостей
npm install

# dev-сервер с HMR на http://localhost:5173
npm run dev

# production-сборка в dist/
npm run build

# локальный предпросмотр production-сборки
npm run preview

# линт
npm run lint
```

## Маршруты

| Путь        | Страница    |
|-------------|-------------|
| `/`         | Home        |
| `/log-in`   | Login       |
| `/register` | Register    |
| `*`         | NotFound    |

## Алиасы

Импорты используют алиас `@/` → `src/`, настроенный в `vite.config.ts` и `tsconfig.app.json`:

```ts
import { Header } from '@/widgets/header';
import { useScrollReveal } from '@/shared/hooks';
```

## Лицензия

Учебный проект, распространяется как есть.
