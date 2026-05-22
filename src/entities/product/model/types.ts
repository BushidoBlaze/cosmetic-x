export interface ProductCardProps {
    id: number;
    url: string;
    name: string;
    price: number;
}

export type ProductListProps = {
    items: ProductCardProps[];
};