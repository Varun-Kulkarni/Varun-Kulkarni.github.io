import React, {Component} from 'react';
import  './certBadge.css';

class CertBadge extends Component {
    render() {
        return (
            <div className='cert-badge-cont'>
                <img src={this.props.imgURL} alt={this.props.alt}></img>
            </div>
        );
    }
}
export default CertBadge;