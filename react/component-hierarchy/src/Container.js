import React from 'react';

export default class Container extends React.Component {
    render () {
        //console.log(this.props.children);
        const items = React.Children.map(this.props.children, (child) => {
            //console.log(child.props);
            if (child.children['$$typeof'] === 'Symbol(react.element)') {
                console.log(child.children);
                return <li>{child.props.children}</li>;
            } else {
                //console.log(child);
                return <li>{child}</li>;                
            }        
            });
        return (
            <ul>{items}</ul>
        )
    }
}