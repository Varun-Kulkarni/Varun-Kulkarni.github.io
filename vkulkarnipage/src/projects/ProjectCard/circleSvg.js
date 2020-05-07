import React, {Component} from 'react';
import './circleSvg.css';
class CircleSvg extends Component {
    render() {
        return (
            <div className="svg-container">
                <svg version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" className="svg-content">
                <circle fill={this.props.color} strokeWidth="10" strokeMiterlimit="10" cx="250" cy="250" r="200" opacity="0.6" />
                </svg>
            </div>
        );
    }
}
export default CircleSvg;