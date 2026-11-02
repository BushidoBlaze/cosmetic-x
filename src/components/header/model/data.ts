import {ShoppingBag, MapPin, UserCircle} from 'lucide-react';
import type {Navigation} from './types.ts';

export const navigation: Navigation = {
    menuArray: [
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
    iconsArray: [
        {
            to: '/cart',
            icon: ShoppingBag,
            badge: 2,
        },
        {
            to: '/about',
            icon: MapPin,
        },
        {
            to: '/log-in',
            icon: UserCircle,
        }
    ]
};
