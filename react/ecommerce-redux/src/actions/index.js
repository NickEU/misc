export const CURRENCY_CHANGED = 'CURRENCY_CHANGED';

export const currencyChanged = (currency) => ({
    type: CURRENCY_CHANGED,
    currency,
});