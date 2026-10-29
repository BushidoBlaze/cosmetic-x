import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Sparkles, X} from 'lucide-react';
import {advertisingMessages} from '../model/data';
import './HeaderAdvertising.css';

export function HeaderAdvertising() {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) return null;

    const loop = [...advertisingMessages, ...advertisingMessages];

    return (
        <div className="ad-bar" role="region" aria-label="Site announcements">
            <Sparkles className="ad-bar__leading-icon" size={14} strokeWidth={1.75}/>

            <div className="ad-bar__track-wrapper">
                <ul className="ad-bar__track">
                    {loop.map((message, index) => (
                        <li className="ad-bar__item" key={`${message.to}-${index}`}>
                            <NavLink to={message.to} className="ad-bar__link">
                                {message.text}
                            </NavLink>
                            <span className="ad-bar__separator" aria-hidden="true">·</span>
                        </li>
                    ))}
                </ul>
            </div>

            <button
                type="button"
                className="ad-bar__close"
                onClick={() => setDismissed(true)}
                aria-label="Close announcement"
            >
                <X size={14} strokeWidth={1.75}/>
            </button>
        </div>
    );
}
