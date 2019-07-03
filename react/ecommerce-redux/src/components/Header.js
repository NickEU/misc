import React from 'react';
import Basket from './BasketContainer';
import CurrencySelector from './CurrencySelectorContainer';

export default () => (
    <div className="header">
        <div>
            <h1>Super Electronics</h1>
        </div>
        <div>
            <CurrencySelector />
            <Basket items={0} total={0.00} />
        </div>
    </div>
)