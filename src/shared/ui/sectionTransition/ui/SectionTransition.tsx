import {useEffect, useRef, useState, type ReactNode} from 'react';
import './SectionTransition.css';

interface SectionTransitionProps {
    children: ReactNode;
    delay?: number;
}

export function SectionTransition({children, delay = 0}: SectionTransitionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            {threshold: 0.15, rootMargin: '0px 0px -10% 0px'},
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`section-transition${visible ? ' section-transition--visible' : ''}`}
            style={delay ? {transitionDelay: `${delay}ms`} : undefined}
        >
            {children}
        </div>
    );
}
