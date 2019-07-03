import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import MainContent from './MainContent';
import PropTypes from 'prop-types';

export default class Page extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currency: 'gbp',
        }
    }

    getChildContext () {
        return {
            currency: this.state.currency,
            setCurrency: (currency) => {
                //this.setState(currentState => currentState.currency = currency);
                this.setState({currency});
            },
        };
    }

    setCurrency (currency) {
        console.log(this);
        this.currency = currency;
        console.log(this);
        //updateCurrency();
        //this.setState(currentState => currentState.currency = currency);
    }

    render () {
        return (
            <div className="page">
                <Header />
                <div className="layout">
                    <SideBar />
                    <MainContent />
                </div>
            </div>
        );
    }
}

Page.childContextTypes = {
    currency: PropTypes.string,
    setCurrency: PropTypes.func,
}