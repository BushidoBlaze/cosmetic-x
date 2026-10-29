import {useState, useEffect} from 'react';
import {ArrowUp} from 'lucide-react';
import './BackToTop.css';

const RADIUS = 26;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function BackToTopButton() {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const ratio = max > 0 ? Math.min(scrolled / max, 1) : 0;
            setProgress(ratio);
            setVisible(scrolled > 600);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const dashOffset = CIRCUMFERENCE * (1 - progress);

    return (
        <button
            type="button"
            className={`back-to-top${visible ? ' back-to-top--visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
            aria-hidden={!visible}
            tabIndex={visible ? 0 : -1}
        >
            <svg className="back-to-top__progress" viewBox="0 0 60 60" aria-hidden="true">
                <circle
                    className="back-to-top__progress-track"
                    cx="30"
                    cy="30"
                    r={RADIUS}
                />
                <circle
                    className="back-to-top__progress-bar"
                    cx="30"
                    cy="30"
                    r={RADIUS}
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={dashOffset}
                />
            </svg>

            <span className="back-to-top__icon" aria-hidden="true">
                <ArrowUp size={18} strokeWidth={1.75}/>
            </span>
        </button>
    );
}
