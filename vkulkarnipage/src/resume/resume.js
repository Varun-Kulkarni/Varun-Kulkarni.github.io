import React, {Component} from 'react';

import './resume.css';
const pdfSrc = require('./Varun_Kulkarni_Resume.pdf');
class Resume extends Component {
    
    render = () => {
        return (
        <div className="container-fluid" id="resumeCont">
            <iframe src={pdfSrc} width="100" height="100"></iframe>
        </div>
        );

    }
    

}
export default Resume;