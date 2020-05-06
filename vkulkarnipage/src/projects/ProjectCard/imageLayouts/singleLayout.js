import React, {Component} from 'react';
import './singleLayout.css';

class SingleLayout extends Component {
    render () {
        return (
            <img src={this.props.imgSrc1} alt={this.props.alt1}></img>
        );
    }
}
export default SingleLayout;