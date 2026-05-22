import {useEffect, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {Menu, X} from 'lucide-react';
import {navigation} from '../model/data';
import './Header.css';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (!isMenuOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('keydown', handleKey);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKey);
        };
    }, [isMenuOpen]);

    const linkClass = ({isActive}: {isActive: boolean}) =>
        `nav-menu__link${isActive ? ' nav-menu__link--active' : ''}`;

    return (
        <>
            <header className={`header${isScrolled ? ' header--scrolled' : ''}`}>
                <div className="header__inner">
                <div className="header__left">
                    <button
                        type="button"
                        className="header__burger"
                        onClick={() => setIsMenuOpen((v) => !v)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-drawer"
                    >
                        {isMenuOpen ? <X size={22} strokeWidth={1.5}/> : <Menu size={22} strokeWidth={1.5}/>}
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
                    {navigation.icons.map(({to, icon: Icon, ariaLabel, badge}) => (
                        <li className="nav-icons__item" key={to}>
                            <NavLink className="nav-icons__link" to={to} aria-label={ariaLabel}>
                                <Icon size={20} strokeWidth={1.5}/>
                                {badge !== undefined && badge > 0 && (
                                    <span className="nav-icons__badge" aria-hidden="true">
                                        {badge > 99 ? '99+' : badge}
                                    </span>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                </div>
            </header>

            <div
                className={`mobile-drawer${isMenuOpen ? ' mobile-drawer--open' : ''}`}
                id="mobile-drawer"
                role="dialog"
                aria-modal="true"
                aria-hidden={!isMenuOpen}
            >
                <ul className="mobile-drawer__list">
                    {navigation.menu.map((item) => (
                        <li key={item.to}>
                            <NavLink
                                className={({isActive}) =>
                                    `mobile-drawer__link${isActive ? ' mobile-drawer__link--active' : ''}`
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
                className={`mobile-drawer__backdrop${isMenuOpen ? ' mobile-drawer__backdrop--visible' : ''}`}
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
            />
        </>
    );
}
