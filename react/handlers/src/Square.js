import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';

export default class Square extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            pointX: 0,
            pointY: 0
        };
        this.squareDivRef = null;
        this.handleMouseMovement = this.handleMouseMovement.bind(this);
    }

    handleMouseMovement({clientX, clientY}) {
        const node = this.squareDivRef;
        if (node instanceof HTMLElement) {
            let squareRect = node.getBoundingClientRect();
            let pointX = Math.floor(clientX - squareRect.x >= 0 ? clientX - squareRect.x : 0);
            let pointY = Math.floor(clientY - squareRect.y >= 0 ? clientY - squareRect.y : 0); 
            this.setState({
                pointX: pointX,
                pointY: pointY,
            });
        }
    }

    reset () {
        this.setState({
            pointX: 0,
            pointY: 0
        })
    }

    render () {
        const size = `${this.props.size}px`;
        const style = {
            width: size,
            height: size,
            backgroundColor: this.props.initialColor,
            lineHeight: '300%'
        };
        return (
            <div className="SquareContainer">
                <div ref={e => this.squareDivRef = e} 
                     onMouseOut={() => this.reset()} 
                     onMouseMove={this.handleMouseMovement} 
                     style={style} 
                     className="Square">{this.state.pointX + ' ' + this.state.pointY}
                         <p className="HoverP">Hover over me</p>
                </div> 
            </div>
        );
    }
}

Square.propTypes = {
    initialColor: PropTypes.string,
    size: PropTypes.number.isRequired,
    coords: PropTypes.string
};

Square.defaultProps = {
    initialColor: 'blue',
};