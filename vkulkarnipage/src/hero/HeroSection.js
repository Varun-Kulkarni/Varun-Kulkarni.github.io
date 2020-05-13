import React, {Component} from 'react';
import './heroSection.css';

class HeroSection extends Component {
    render () {
        return(
            <div className="hero-container">
                <div className="hero d-flex justify-content-center align-items-center">
                    <div className="titleBlock">
                        <div className="col-sm-7">
                            <div className="first-hero-text">Hello I'm</div>
                            <br></br>
                            <div className="second-hero-text">Varun Kulkarni</div>
                            <br></br>
                            <div className="third-hero-text">A full-stack developer</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeroSection;