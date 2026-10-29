interface IconProps {
    size?: number;
    strokeWidth?: number;
}

export function VkIcon({size = 18, strokeWidth = 1.5}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M3 7l4 10 4-10"/>
            <path d="M13 7v10"/>
            <path d="M13 12l5-5"/>
            <path d="M13 12l6 5"/>
        </svg>
    );
}

export function MaxIcon({size = 18, strokeWidth = 1.5}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="3" y="3" width="18" height="18" rx="6"/>
            <path d="M7 16V8l5 5 5-5v8"/>
        </svg>
    );
}
