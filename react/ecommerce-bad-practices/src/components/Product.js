import React from 'react';
import PropTypes from 'prop-types';
import {getCurrencySymbol, convertCurrency } from '../currency'

export default class Product extends React.Component {
    render () {
        const { title, price } = this.props;
        const { currency } = this.context;
        return (
            <div>
                <h3>{title}</h3>
                <img src="/placeholder.jpg" />
                <div>
                    <div>{getCurrencySymbol(currency)}{convertCurrency(price, currency)}</div>
                    <button>Add to cart</button>
                </div>
            </div>
        );
    }
}

Product.contextTypes = {
    currency: PropTypes.string,
}