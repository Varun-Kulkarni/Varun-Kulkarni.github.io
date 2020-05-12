import React, {Component} from 'react';
import './doubleLayout.css';

class DoubleLayout extends Component {
    render () {
        return (
            <div className="doubleLayoutCont">
                <img src={this.props.imgSrc1} alt={this.props.alt1}></img>
                <img src={this.props.imgSrc2} alt={this.props.alt2}></img>
                {/* <div className="doubleLayoutFirst">
                    <img 
                </div>
                <div className="doubleLayoutSecond">

                </div> */}
            </div>
        );
    }
}
export default DoubleLayout;