import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

import { useLockBodyScroll } from "../hooks/useLockBodyScroll.ts";
import { useScrolled } from "../hooks/useScrolled.ts";

import { MobileDrawer } from "./MobileDrawer.tsx";
import { InteractiveSearch } from "@/components/interactiveSearch/ui/InteractiveSearch.tsx";

import { navigation } from "../model/data.ts";
import "./Header.css";

export function Header() {
  const isScrolled = useScrolled(); // кастомный хук, который следит за прокруткой страницы и возвращает true, если страница прокручена больше чем на 20px
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useLockBodyScroll(isMenuOpen || isSearchOpen); // кастомный хук, который блокирует прокрутку страницы, если открыто меню или панель поиска

  return (
    <>
      <header className={`header${isScrolled ? " header--scrolled" : ""}`}>
        <div className="header__inner">
          <div className="header__left">
            {/* Бургер-меню при маленьких экранах (ширина меньше 1024px)*/}
            <button
              type="button"
              className="header__burger-button"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              {isMenuOpen ? (
                <X size={22} strokeWidth={1.5} />
              ) : (
                <Menu size={22} strokeWidth={1.5} />
              )}
            </button>
          </div>

          {/* Навигационное меню - ссылки */}
          <nav className="header__nav header__nav--links">
            <ul className="links-list">
              {navigation.menuArray.map((item) => (
                <li className="links-list__item" key={item.to}>
                  <NavLink
                    className={({ isActive }) => {
                      return `links-list__link${isActive ? " links-list__link--active" : ""}`;
                    }}
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Поисковая панель */}
          <div className="header__search">
            {/* Поисковая панель */}
            <button
              type="button"
              className="search-bar__btn"
              onClick={() => setIsSearchOpen((v) => !v)}
            >
              {/* input является визуальным (не функциональным) */}
              <input
                type="text"
                placeholder="Searching..."
                className="search-bar__fake-input"
                // делаем input некликабельным
                tabIndex={-1}
                readOnly
              />
              <Search size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Навигационное меню - иконки */}
          <nav className="header__nav header__nav--icons">
            <ul className="icons-list">
              {navigation.iconsArray.map(({ to, icon: LucideIcons, badge }) => (
                <li className="icons-list__item" key={to}>
                  <NavLink className="icons-list__link" to={to}>
                    <LucideIcons size={20} strokeWidth={1.5} />

                    {badge !== undefined && badge > 0 && (
                      <span className="icons-list__badge">
                        {badge > 99 ? "99+" : badge}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {isSearchOpen && (
        <InteractiveSearch
          onNavigate={() => setIsSearchOpen(false)}
          onClose={() => setIsSearchOpen(false)}
        />
      )}

      <MobileDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
