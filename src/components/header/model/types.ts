import type {LucideIcon} from 'lucide-react';

export type NavMenuItem = {
    to: string;
    label: string;
};

export type NavIconItem = {
    to: string;
    icon: LucideIcon;
    badge?: number;
}

export type Navigation = {
    menuArray: NavMenuItem[];
    iconsArray: NavIconItem[];
}
