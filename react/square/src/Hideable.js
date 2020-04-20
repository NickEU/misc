import React from 'react';

export default function Hideable (Component) {
    return (props) => {
        const ownProps = { ...props };
        delete ownProps.isHidden;
        const style = {
            display: props.isHidden ? 'none' : 'initial',
        }
        return (
            <div style={style}>
                <Component { ...ownProps } />
            </div>            
        )
    }
}