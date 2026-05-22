import {ShoppingBag, MapPin, UserCircle} from 'lucide-react';
import type {Navigation} from './types';

export const navigation: Navigation = {
    menu: [
        {
            to: '/catalog',
            label: 'new items'
        },
        {
            to: '/women-perfume',
            label: 'women perfume'
        },
        {
            to: '/men-perfume',
            label: "men's perfume"
        },
        {
            to: '/skin-care',
            label: 'skin care'
        },
        {
            to: '/accessories',
            label: 'accessories'
        },
        {
            to: '/make-up',
            label: 'make-up'
        },
    ],
    icons: [
        {
            to: '/cart',
            icon: ShoppingBag,
            ariaLabel: 'Cart',
            badge: 2,
        },
        {
            to: '/about',
            icon: MapPin,
            ariaLabel: 'Location'
        },
        {
            to: '/log-in',
            icon: UserCircle,
            ariaLabel: 'Profile'
        }
    ]
};