import React from 'react';
import Basket from './Basket';
import CurrencySelector from './CurrencySelector';

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