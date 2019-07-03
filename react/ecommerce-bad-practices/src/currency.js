const currencies = {
    gbp: { symbol: '£', rate: 1 },
    usd: { symbol: '$', rate: 1.3 },
};

export const getCurrencySymbol =
    (currency) => currencies[currency].symbol;
export const convertCurrency =
    (amount, currency) => (amount * currencies[currency].rate).toFixed(2);