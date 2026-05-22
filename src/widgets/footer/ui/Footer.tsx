import {useState, type FormEvent} from 'react';
import {NavLink} from 'react-router-dom';
import {ArrowRight, Github} from 'lucide-react';
import {footerData} from '../model/data';
import type {FooterSection, FooterSocial} from '../model/types';
import {MaxIcon, VkIcon} from './socialIcons';
import './Footer.css';

const socials: FooterSocial[] = [
    {to: 'https://github.com/BushidoBlaze', icon: Github, ariaLabel: 'GitHub'},
    {to: 'https://max.ru', icon: MaxIcon, ariaLabel: 'MAX'},
    {to: 'https://vk.com', icon: VkIcon, ariaLabel: 'VK'},
];

function FooterSectionBlock({title, links}: FooterSection) {
    return (
        <div className="footer-section">
            <h3 className="footer-section__title">{title}</h3>
            <ul className="footer-section__list">
                {links.map((link) => (
                    <li key={link.to}>
                        <NavLink className="footer-section__link" to={link.to}>
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Newsletter() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (email.trim().length === 0) return;
        setSubmitted(true);
        setEmail('');
    };

    return (
        <div className="footer-section footer-section--newsletter">
            <h3 className="footer-section__title">Newsletter</h3>
            <p className="footer__newsletter-text">
                Sign up to be the first to know about new collections and exclusive offers.
            </p>

            {submitted ? (
                <p className="footer__newsletter-success">Thank you for subscribing.</p>
            ) : (
                <form className="footer__newsletter-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="footer__newsletter-input"
                        placeholder="Your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        aria-label="Email address"
                        required
                    />
                    <button
                        type="submit"
                        className="footer__newsletter-submit"
                        aria-label="Subscribe"
                    >
                        <ArrowRight size={16} strokeWidth={1.75}/>
                    </button>
                </form>
            )}
        </div>
    );
}

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__brand">
                    <NavLink to="/" className="footer__logo" aria-label="X-Cosmetics home">
                        X-Cosmetics
                    </NavLink>
                    <p className="footer__tagline">
                        Life begins when color is added to it.
                    </p>
                </div>

                <div className="footer__sections">
                    {footerData.sections.map((section) => (
                        <FooterSectionBlock key={section.title} {...section} />
                    ))}
                    <Newsletter/>
                </div>
            </div>

            <div className="footer__bottom">
                <p className="footer__copyright">
                    &copy; {year} X-Cosmetics. Все права защищены.
                </p>

                <ul className="footer__legal">
                    {footerData.legalLinks.map((link) => (
                        <li key={link.to}>
                            <NavLink to={link.to} className="footer__legal-link">
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <ul className="footer__socials">
                    {socials.map(({to, icon: Icon, ariaLabel}) => (
                        <li key={to}>
                            <a
                                href={to}
                                className="footer__social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={ariaLabel}
                            >
                                <Icon size={18} strokeWidth={1.5}/>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
