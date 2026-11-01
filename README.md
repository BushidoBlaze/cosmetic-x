# Интернет-магазин аксессуаров

## Стек технологий

### Основные технологии:
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev) [![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org) [![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev) [![CSS](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)

### Дополнительные библиотеки:
- **[lucide-react](https://www.npmjs.com/package/lucide-react)** `^0.577.0` — интерактивные иконки.
- **[react-router-dom](https://www.npmjs.com/package/react-router-dom)** `^7.13.1` — декларативный роутинг.
- **[msw](https://www.npmjs.com/package/msw)** `^3.0.3` (Mock Service Worker) — перехват и мокирование сетевых HTTP-запросов на уровне браузера и Node.js.

## Возможности

- Главная страница с hero-секцией, категориями, списком продуктов
- Адаптивный header с рекламной строкой и боковой навигацией
- Страницы авторизации и регистрации (**без backend**)
- Кастомная 404-страница
- Плавные анимации появления секций
- Полноэкранные видео-баннеры в hero/категориях
- Кнопка наверх с автоскрытием
- Локальные шрифты

## Нововведения

- Интерактивный поиск по товарам ![New](https://img.shields.io/badge/New-brightgreen)
- Страница результатов поиска ![Early access](https://img.shields.io/badge/early_access-orange)
- Страница товара ![Early access](https://img.shields.io/badge/early_access-orange)

## Структура проекта

```
public/
├── images/                 # Изображения
├── videos/                 # Видео-баннеры
└── mockServiceWorker.js    # Служебный скрипт библиотеки MSW для симуляции API

src/
├── components/                 # Блоки интерфейса
│   ├── header/                 # Шапка сайта
│   ├── headerAdvertising/      # Рекламная строка
│   ├── footer/                 # Подвал
│   ├── interactiveSearch/      # Интерактивный поиск товаров
│   ├── product/                # Карточка товара
│   └── sections/               # Секции страниц
├── layouts/        # Layout-обёртки
├── mocks/          # Фейковые данные (mock-ответы)
├── pages/          # Страницы
├── shared/         # Общие ресурсы
│   ├── assets/                 # Локальные шрифты
│   ├── hooks/                  # Хуки
│   ├── styles/                 # Глобальные стили, reset, подключение шрифтов
│   └── types/                  # Общие и глобальные типы
├── ui/             # Переиспользуемые UI-элементы
├── App.tsx         # Корневой компонент и маршруты
└── main.tsx        # Точка входа
```

## Запуск

```bash
# установка зависимостей
npm install

# dev-сервер
npm run dev

# production-сборка в dist/
npm run build

# локальный предпросмотр production-сборки
npm run preview

```

## Лицензия

*Учебный проект*.
