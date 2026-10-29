import './GlobalTitle.css';

interface GlobalTitleProps {
    title: string;
}

export function GlobalTitle({title}: GlobalTitleProps) {
    return (
        <div className="global-title">
            <h2 className="global-title__text">{title}</h2>
        </div>
    );
}