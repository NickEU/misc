import React from 'react';
import PropTypes from 'prop-types';

export default class CurrencySelector extends React.Component {

    selectorChanged (e) {
        let node = e.target;
        // node.options returns an HTMLOptionsCollection
        let currency = node.options[node.selectedIndex].value;
        this.props.currencyChanged(currency);
        
    }

    render () {
        let { currency } = this.props;
        return (
            <div>
                <select defaultValue={currency} onChange={(e) => this.selectorChanged(e)}>
                    <option value="gbp">Pounds</option>
                    <option value="usd">Dollers</option>
                </select>
            </div>
        );
    }
}

CurrencySelector.propTypes = {
    currency: PropTypes.string,
    currencyChanged: PropTypes.func,
}