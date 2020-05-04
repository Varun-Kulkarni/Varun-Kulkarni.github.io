import React, {Component} from 'react';
import './aboutSection.css';
import gitSvg from './icons/gitLogo.svg';
import mailSvg from './icons/mailto.svg';
import linkedinSvg from './icons/linkedin.svg';
import phoneSvg from './icons/phone.svg';

const portrait = require('./portrait/portrait-square-full.jpg');
class AboutSection extends Component {

    //frontend
    render () {
        return (
            <div className="row align-items-center">
                <div className="col-sm-6 img-cont">
                    <img className="mx-auto portrait-img" src={portrait} alt="portrait"/>
                </div>
                <div className="col-sm-6">
                    <div className="general-header">About Me</div>
                    <div className="text">
                        <div className="text">I'm a lot of things :)  I'm a student at Georgia Institute of Technology pursuing a Bachelor's degree in Computer Science.  I'm a full-stack web developer looking constantly for that next new technology or tool that will help me make appealing, informative projects.  But I'm also a budding cloud developer learning the ins and outs of software infrastructure, cloud services, and deployment. And I occasionally dip my feet into the graphic design space too.</div>
                        <br></br>
                        <div className="text"><b>But</b> if I'm not doing any of those, it's not unheard of that I'll be at the dance studio, singing in my bedroom (various degrees of success there), or biking and exploring.</div>
                        <br></br>
                        <div className="text">I love building with a focus on implementation, solving problems, and I know that a good product not only gets the job done, but also appeals visually while doing the job.  If I sound like someone who could lend a hand, or if any of you just wanna chat, reach out!</div>
                    </div>
                    <br></br>
                    <div className="mx-auto contacts-container">
                        <a href="https://github.com/Varun-Kulkarni" className="contact-icon" style={{backgroundImage: `url(${gitSvg})`}}></a>
                        <a href="https://www.linkedin.com/in/varunkulkarni18/"className="contact-icon" style={{backgroundImage: `url(${linkedinSvg})`}}></a>
                        <a href="mailto:kulkarni.varun22@gmail.com" className="contact-icon" style={{backgroundImage: `url(${mailSvg})`}}></a>
                        <a href="tel:703-946-2874" className="contact-icon" style={{backgroundImage: `url(${phoneSvg})`}}></a>
                    </div>
                </div>
            </div>
        );
    }
}
export default AboutSection;