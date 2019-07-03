import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import MainContent from './MainContent';

export default class Page extends React.Component {

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
