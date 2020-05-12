import React, {Component} from 'react';
import './footer.css';
import ContactBar from '../contact-bar/contactBar';
class Footer extends Component {
    render () {
        return (
            <div id="footer-cont" className="row">
                <div id="table">
                    <div>
                        <ContactBar showResumeIcon={true}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;