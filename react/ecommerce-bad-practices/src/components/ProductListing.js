import React from 'react';
import Product from './Product';

export default function ProductListing () {
    return (
        <div className="product-listing">
            <Product title="Apple IPhone X" price={999.99} />
            <Product title="Apple IPhone 8" price={699.99} />
            <Product title="Apple MacBook Pro" price={1999.99} />
        </div>
    );
}