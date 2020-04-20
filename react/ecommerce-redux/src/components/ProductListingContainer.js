import { connect } from 'react-redux';
import ProductListing from './ProductListing';

function mapStateToProps (state) {
    return {
        currency: state.currency,
    };
}

export default connect(mapStateToProps)(ProductListing);