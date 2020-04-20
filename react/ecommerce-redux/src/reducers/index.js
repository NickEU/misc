import { CURRENCY_CHANGED } from "../actions";

const initialState = {
    currency: 'gbp',
};

export default (state, action) => {
    if (state === undefined) {
        return initialState;
    }
    switch (action.type) {
        case CURRENCY_CHANGED:
            return {
                ...state,
                currency: action.currency
            };
        default:
            return state;
    }
} 