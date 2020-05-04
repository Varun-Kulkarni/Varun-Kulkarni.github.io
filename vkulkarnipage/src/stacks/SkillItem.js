import React, {Component} from 'react';
import './skillItem.css';

class SkillItem extends Component {
    render() {
       return(
            <div className='skill-item'>
                <div className='skill-icon-cont'>
                    <img src={this.props.imgsrc} alt={this.props.skill+' logo'}></img>
                </div>
                <div className='skill-text'>{this.props.skill}</div>
            </div>
       );
    }
}
export default SkillItem;