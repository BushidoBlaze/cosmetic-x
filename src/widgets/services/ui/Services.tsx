import {NavLink} from 'react-router-dom';
import {ArrowUpRight} from 'lucide-react';
import {services} from '../model/data';
import './Services.css';

export function Services() {
    return (
        <section className="services" aria-label="Services">
            <ul className="services__grid">
                {services.map(({icon: Icon, title, description, to}) => (
                    <li className="services__item" key={to} data-reveal>
                        <NavLink to={to} className="services__card">
                            <Icon className="services__icon" size={28} strokeWidth={1.25}/>

                            <div className="services__body">
                                <h3 className="services__title">{title}</h3>
                                <p className="services__description">{description}</p>
                            </div>

                            <span className="services__arrow" aria-hidden="true">
                                <ArrowUpRight size={16} strokeWidth={1.5}/>
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </section>
    );
}
