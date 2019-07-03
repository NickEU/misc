import { connect } from 'react-redux';
import Basket from './Basket';

function mapStateToProps (state) {
    return {
        currency: state.currency,
    };
}

export default connect(mapStateToProps)(Basket);