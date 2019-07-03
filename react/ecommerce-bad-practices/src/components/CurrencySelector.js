import React from 'react';
import PropTypes from 'prop-types';

export default class CurrencySelector extends React.Component {

    selectorChanged (e) {
        let node = e.target;
        // for (let child of node.children) {
        //     if (child.selected) {
        //         let currency = child.value;
        //         console.log(currency);
        //     }
        // }
        console.log(this.context);
        // node.options returns an HTMLOptionsCollection
        let currency = node.options[node.selectedIndex].value;
        console.log(currency);
        this.context.setCurrency(currency);
        
    }

    render () {
        let { currency } = this.context;
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

CurrencySelector.contextTypes = {
    currency: PropTypes.string,
    setCurrency: PropTypes.func,
}