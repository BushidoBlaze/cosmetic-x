import Image1 from '@/shared/assets/images/shopCategory/shop-category-1.webp';
import Image2 from '@/shared/assets/images/shopCategory/shop-category-2.webp';
import Image3 from '@/shared/assets/images/shopCategory/shop-category-3.webp';
import Image4 from '@/shared/assets/images/shopCategory/shop-category-4.webp';
import type {CategoryItem} from './types';

export const categories: CategoryItem[] = [
    {eyebrow: '01', title: "Women's perfume", to: '/women-perfume', image: Image1},
    {eyebrow: '02', title: "Men's perfume", to: '/men-perfume', image: Image2},
    {eyebrow: '03', title: 'Skin care', to: '/skin-care', image: Image3},
    {eyebrow: '04', title: 'Make-up', to: '/make-up', image: Image4}
];
