import React from 'react';
import PropTypes from 'prop-types';

export default function SimpleSquare ({size, color}) {
        const sizeWithPx = `${size}px`;
        const style = {
            width: sizeWithPx,
            height: sizeWithPx,
            backgroundColor: color,
            border: '2px solid white',
        }
        return (
                <div className="Square" style={style}>              
                </div>            
        );

}

SimpleSquare.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number.isRequired
};
SimpleSquare.defaultProps = {
    color: 'red'
}