import React, {Component} from 'react';
import './parallaxImageGroup.css';

class ParallaxImageGroup extends Component {
    render () {
        return (
            <img src={this.props.imgsrc} alt={this.props.alt}></img>
        )
    }
}