import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

import InteractiveSearch from "@/components/interactiveSearch/ui/InteractiveSearch.tsx";

import { navigation } from "../model/data.ts";
import "./Header.css";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isSearchOpen) return;

    // Запрет на прокрутку страницы пока открыт поиск
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchOpen]);

  // Функция закрытия меню при клике на ссылки
  const closeMenu = () => setIsMenuOpen(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-menu__link${isActive ? " nav-menu__link--active" : ""}`;

  return (
    <>
      <header className={`header${isScrolled ? " header--scrolled" : ""}`}>
        <div className="header__inner">
          <div className="header__left">
            <button
              type="button"
              className="header__burger"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-drawer"
            >
              {isMenuOpen ? (
                <X size={22} strokeWidth={1.5} />
              ) : (
                <Menu size={22} strokeWidth={1.5} />
              )}
            </button>

            <NavLink to="/" className="header__logo">
              X|Cos
            </NavLink>
          </div>

          <nav className="header__nav" aria-label="Primary">
            <ul className="nav-menu">
              {navigation.menu.map((item) => (
                <li className="nav-menu__item" key={item.to}>
                  <NavLink className={linkClass} to={item.to}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="nav-icons">
            <li className="nav-icons__item">
              <button
                type="button"
                className="nav-icons__link nav-icons__link--search-bar"
                aria-label={isSearchOpen ? "Close search" : "Open search"}
                aria-expanded={isSearchOpen}
                onClick={() => setIsSearchOpen((v) => !v)}
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
            </li>

            {navigation.icons.map(({ to, icon: Icon, ariaLabel, badge }) => (
              <li className="nav-icons__item" key={to}>
                <NavLink
                  className="nav-icons__link"
                  to={to}
                  aria-label={ariaLabel}
                >
                  <Icon size={20} strokeWidth={1.5} />
                  {badge !== undefined && badge > 0 && (
                    <span className="nav-icons__badge" aria-hidden="true">
                      {badge > 99 ? "99+" : badge}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {isSearchOpen && (
        <>
          <InteractiveSearch
            onNavigate={() => setIsSearchOpen(false)}
            onClose={() => setIsSearchOpen(false)}
          />
        </>
      )}

      <div
        className={`mobile-drawer${isMenuOpen ? " mobile-drawer--open" : ""}`}
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
      >
        <ul className="mobile-drawer__list">
          {navigation.menu.map((item) => (
            <li key={item.to}>
              <NavLink
                className={({ isActive }) =>
                  `mobile-drawer__link${isActive ? " mobile-drawer__link--active" : ""}`
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`mobile-drawer__backdrop${isMenuOpen ? " mobile-drawer__backdrop--visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
}
