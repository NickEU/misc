import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

export default function ProductListing ({ currency }) {
    return (        
        <div className="product-listing">
            <Product currency={currency} title="Apple IPhone X" price={999.99} />
            <Product currency={currency} title="Apple IPhone 8" price={699.99} />
            <Product currency={currency} title="Apple MacBook Pro" price={1999.99} />
        </div>
    );
}

ProductListing.propTypes = {
    currency: PropTypes.string,
}