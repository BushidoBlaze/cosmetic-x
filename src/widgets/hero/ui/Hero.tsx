import {NavLink} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import HeroHomeImage from '@/shared/assets/images/home-hero-image.jpg';
import {heroData} from '../model/data';
import './Hero.css';

export function Hero() {
    const {content} = heroData;

    const handleScrollDown = () => {
        window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
    };

    return (
        <section className="hero">
            <img
                className="hero__image"
                src={HeroHomeImage}
                alt="X-Cosmetics collection"
            />
            <div className="hero__overlay" aria-hidden="true"/>

            <div className="hero__content">
                <p className="hero__eyebrow">
                    <span className="hero__eyebrow-line" aria-hidden="true"/>
                    {content.sectionLabel}
                    <span className="hero__eyebrow-line" aria-hidden="true"/>
                </p>

                <h1 className="hero__title">
                    {content.title.map((line) => (
                        <span className="hero__title-line" key={line}>
                            {line}
                        </span>
                    ))}
                </h1>

                <NavLink className="hero__button" to={content.buttonTo}>
                    <span>{content.buttonLabel}</span>
                    <ArrowRight size={16} strokeWidth={1.5}/>
                </NavLink>
            </div>

            <button
                type="button"
                className="hero__scroll"
                onClick={handleScrollDown}
                aria-label="Scroll to next section"
            >
                <span className="hero__scroll-text">SCROLL</span>
                <span className="hero__scroll-track" aria-hidden="true">
                    <span className="hero__scroll-dot"/>
                </span>
            </button>
        </section>
    );
}
