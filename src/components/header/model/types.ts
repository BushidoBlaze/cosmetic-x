import type {LucideIcon} from 'lucide-react';

export interface NavMenuItem {
    to: string;
    label: string;
}

export interface NavIconItem {
    to: string;
    icon: LucideIcon;
    ariaLabel: string;
    badge?: number;
}

export interface Navigation {
    menu: NavMenuItem[];
    icons: NavIconItem[];
}