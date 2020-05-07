import React, {Component} from 'react';
import './contactBar.css';
import mailSvg from './icons/mailto.svg';
import linkedinSvg from './icons/linkedin.svg';

const gitSvg = process.env.PUBLIC_URL + '/img/gitlogo.svg';
class ContactBar extends Component {
    render() {
        return (
            <div className="mx-auto contacts-container">
                <a href="https://github.com/Varun-Kulkarni" className="contact-icon" style={{backgroundImage: `url(${gitSvg})`}}><span>Click to Access Github</span></a>
                <a href="https://www.linkedin.com/in/varunkulkarni18/"className="contact-icon" style={{backgroundImage: `url(${linkedinSvg})`}}><span>Click to Access LinkedIn</span></a>
                <a href="mailto:kulkarni.varun22@gmail.com" className="contact-icon" style={{backgroundImage: `url(${mailSvg})`}}><span>Click to send e-mail</span></a>
            </div>
        );
    }
}
export default ContactBar;