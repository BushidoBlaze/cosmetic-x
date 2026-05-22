import {ProductCard} from '@/entities/product';
import type {ProductListProps} from '@/entities/product/model/types';
import './ProductList.css';

export function ProductList({ items }: ProductListProps) {
    return (
        <section className="product-list">
            {items.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    url={product.url}
                    name={product.name}
                    price={product.price}
                />
            ))}
        </section>
    );
}
