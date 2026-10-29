import {NavLink} from 'react-router-dom';
import {ArrowUpRight} from 'lucide-react';
import {categories} from '../model/data';
import './Categories.css';

export function Categories() {
    return (
        <section className="categories" aria-label="Categories">
            <ul className="categories__grid">
                {categories.map(({title, eyebrow, to, image}) => (
                    <li className="categories__item" key={to} data-reveal>
                        <NavLink to={to} className="categories__tile">
                            <img
                                className="categories__image"
                                src={image}
                                alt={title}
                                loading="lazy"
                            />
                            <div className="categories__overlay" aria-hidden="true"/>

                            <div className="categories__content">
                                <span className="categories__eyebrow">{eyebrow}</span>
                                <h3 className="categories__title">{title}</h3>
                                <span className="categories__cta">
                                    Discover
                                    <ArrowUpRight size={14} strokeWidth={1.5}/>
                                </span>
                            </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </section>
    );
}
