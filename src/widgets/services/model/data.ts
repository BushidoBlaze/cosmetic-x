import {Truck, Sparkles, RotateCcw, Gift} from 'lucide-react';
import type {ServiceItem} from './types';

export const services: ServiceItem[] = [
    {
        icon: Truck,
        title: 'Free shipping',
        description: 'Complimentary delivery on every order over $100, worldwide.',
        to: '/delivery',
    },
    {
        icon: Sparkles,
        title: 'Personalization',
        description: 'Engraving, custom blends and bespoke packaging for any occasion.',
        to: '/personalize',
    },
    {
        icon: RotateCcw,
        title: 'Repair & care',
        description: 'Expert servicing and refurbishment to extend the life of every piece.',
        to: '/repair',
    },
    {
        icon: Gift,
        title: 'The art of gifting',
        description: 'Hand-wrapped boxes, signature ribbons and a personal note inside.',
        to: '/gifts',
    },
];
