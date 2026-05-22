import {NavLink} from 'react-router-dom';
import HeroImage from '@/shared/assets/images/notFound/404.webp';
import './NotFound.css';

export function NotFound() {
    return (
        <section className="not-found">
            <img
                className="not-found__image"
                src={HeroImage}
                alt=""
                aria-hidden="true"
            />
            <div className="not-found__overlay" aria-hidden="true"/>

            <div className="not-found__content">
                <p className="not-found__eyebrow">
                    <span className="not-found__eyebrow-line" aria-hidden="true"/>
                    Error 404
                    <span className="not-found__eyebrow-line" aria-hidden="true"/>
                </p>

                <h1 className="not-found__title">
                    <span className="not-found__title-line">Page</span>
                    <span className="not-found__title-line">not found</span>
                </h1>

                <p className="not-found__subtitle">
                    The page you are looking for is no longer here.
                </p>

                <div className="not-found__actions">
                    <NavLink className="not-found__button not-found__button--primary" to="/">
                        <span>Back to home</span>
                    </NavLink>

                    <button
                        type="button"
                        className="not-found__button not-found__button--ghost"
                        onClick={() => window.history.back()}
                    >
                        <span>Go back</span>
                    </button>
                </div>
            </div>

            <span className="not-found__mark" aria-hidden="true">X | C</span>
        </section>
    );
}
