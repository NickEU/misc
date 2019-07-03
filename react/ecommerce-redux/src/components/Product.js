import React from 'react';
import PropTypes from 'prop-types';
import {getCurrencySymbol, convertCurrency } from '../currency'

export default class Product extends React.Component {
    render () {
        const { title, price, currency } = this.props;
        return (
            <div>
                <h3>{title}</h3>
                <img src="/placeholder.jpg" alt="" />
                <div>
                    <div>{getCurrencySymbol(currency)}{convertCurrency(price, currency)}</div>
                    <button>Add to cart</button>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    currency: PropTypes.string,
}