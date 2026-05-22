import type {ComponentType} from 'react';

export interface FooterLink {
    to: string;
    label: string;
}

export interface FooterSection {
    title: string;
    links: FooterLink[];
}

export type SocialIcon = ComponentType<{size?: number; strokeWidth?: number}>;

export interface FooterSocial {
    to: string;
    icon: SocialIcon;
    ariaLabel: string;
}

export interface FooterData {
    sections: FooterSection[];
    socials: FooterSocial[];
    legalLinks: FooterLink[];
}
