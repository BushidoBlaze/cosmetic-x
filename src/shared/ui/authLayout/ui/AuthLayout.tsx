import {type ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import {X} from 'lucide-react';
import HeroImage from '@/shared/assets/images/home-hero-image.jpg';
import './AuthLayout.css';

interface AuthLayoutProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    children: ReactNode;
    footer: ReactNode;
}

export function AuthLayout({eyebrow, title, subtitle, children, footer}: AuthLayoutProps) {
    return (
        <section className="auth-layout">
            <aside className="auth-layout__media" aria-hidden="true">
                <img className="auth-layout__image" src={HeroImage} alt=""/>
                <div className="auth-layout__media-overlay"/>
                <span className="auth-layout__mark">X | C</span>
            </aside>

            <div className="auth-layout__panel">
                <div className="auth-layout__inner">
                    <header className="auth-layout__head">
                        <span className="auth-layout__eyebrow">{eyebrow}</span>
                        <h1 className="auth-layout__title">{title}</h1>
                        <p className="auth-layout__subtitle">{subtitle}</p>
                    </header>

                    {children}

                    <footer className="auth-layout__foot">{footer}</footer>
                </div>
            </div>

            <NavLink to="/" className="auth-layout__close" aria-label="Back to home">
                <X size={18} strokeWidth={1.75}/>
            </NavLink>
        </section>
    );
}
