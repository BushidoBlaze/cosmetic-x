import type {ProductCardProps} from './types';

// SOLEIL_VII
import Image1 from '@/shared/assets/images/productCard/product-1.webp';
import Image2 from '@/shared/assets/images/productCard/product-2.webp';
import Image3 from '@/shared/assets/images/productCard/product-3.webp';
import Image4 from '@/shared/assets/images/productCard/product-4.webp';

export const PRODUCT_CARD_CONTENT_NUIT_DOPALE: ProductCardProps[] = [
    {
        id: 1,
        url: Image1,
        name: 'Oud Minuit',
        price: 750,
    },
    {
        id: 2,
        url: Image2,
        name: 'Nuit de Suède',
        price: 420,
    },
    {
        id: 3,
        url: Image3,
        name: 'Iris Ombre',
        price: 680,
    },
    {
        id: 4,
        url: Image4,
        name: 'Jasmin Rêve',
        price: 1200,
    },
];

// NUIT_DOPALE
import Image5 from '@/shared/assets/images/productCard/product-5.webp';
import Image6 from '@/shared/assets/images/productCard/product-6.webp';
import Image7 from '@/shared/assets/images/productCard/product-7.webp';
import Image8 from '@/shared/assets/images/productCard/product-8.webp';

export const PRODUCT_CARD_CONTENT_SOLEIL_VII: ProductCardProps[] = [
    {
        id: 1,
        url: Image5,
        name: 'Velvet Noir',
        price: 300,
    },
    {
        id: 2,
        url: Image6,
        name: 'Rose Élysée',
        price: 400,
    },
    {
        id: 3,
        url: Image7,
        name: 'Silk Bloom',
        price: 500,
    },
    {
        id: 4,
        url: Image8,
        name: 'Amber Solstice',
        price: 600,
    },
];