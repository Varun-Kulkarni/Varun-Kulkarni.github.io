import React, {Component} from 'react';
import './contactBar.css';

class ContactBar extends Component {
    render() {
        if (this.props.showResumeIcon) {
            return (
                <div className="mx-auto contacts-container">
                    <a href="https://github.com/Varun-Kulkarni" className="contact-icon" id="git"><span>Click to Access Github</span></a>
                    <a href="https://www.linkedin.com/in/varunkulkarni18/"className="contact-icon" id="lnkd"><span>Click to Access LinkedIn</span></a>
                    <a href="mailto:kulkarni.varun22@gmail.com" className="contact-icon" id="mailto"><span>Click to send e-mail</span></a>
                    <a href="mailto:kulkarni.varun22@gmail.com" className="contact-icon" id="resume-link"><span>Click to view resume</span></a>
                </div>
            );
        } else {
            return (
                <div className="mx-auto contacts-container">
                    <a href="https://github.com/Varun-Kulkarni" className="contact-icon" id="git"><span>Click to Access Github</span></a>
                    <a href="https://www.linkedin.com/in/varunkulkarni18/"className="contact-icon" id="lnkd"><span>Click to Access LinkedIn</span></a>
                    <a href="mailto:kulkarni.varun22@gmail.com" className="contact-icon" id="mailto"><span>Click to send e-mail</span></a>
                </div>
            );
        }
    }
}
export default ContactBar;