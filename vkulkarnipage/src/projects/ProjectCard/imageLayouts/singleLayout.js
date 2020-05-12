import React, {Component} from 'react';
import './singleLayout.css';

class SingleLayout extends Component {
    render () {
        return (
            <div className="singleLayoutCont align-items-center">
                <img src={this.props.imgSrc1} alt={this.props.alt1}></img>
            </div>
        );
    }
}
export default SingleLayout;