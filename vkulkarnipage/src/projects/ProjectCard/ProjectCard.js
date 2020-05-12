import React, {Component} from 'react';
import './projectCard.css';
import SingleImageLayout from './imageLayouts/singleLayout';
import DoubleImageLayout from './imageLayouts/doubleLayout';
import CircleSvg from './circleSvg';
const  vklogo = process.env.PUBLIC_URL + '/img/VKLogo.svg';

// import LogoSeparator from './logoSeparator';

// const aLogo = process.env.PUBLIC_URL + '/img/xcodelogo.svg';
// const aSecondLogo = process.env.PUBLIC_URL + '/img/swiftlogo.svg';
// const aThirdLogo = process.env.PUBLIC_URL + '/img/gitlogo.svg';
class ProjectCard extends Component {
    render () {
        var imageLayout = <SingleImageLayout />;
        if (this.props.imgSrc1) {
            if (this.props.imgSrc1.length === 1) {
                imageLayout = <SingleImageLayout imgSrc1={this.props.imgSrc1} alt1={this.props.alt1} />
            } else {
                let URL1 = this.props.imgSrc1[0];
                let URL2 = this.props.imgSrc1[1];
                imageLayout = <DoubleImageLayout imgSrc1={URL1} imgSrc2={URL2} />
            }
        }
        return (
            <div className="card-container row align-items-center">
                {/* contains the image, 1 image */}
                <div className="col-sm-5 card-image-container">
                    {imageLayout}
                    {/* <SingleImageLayout imgSrc1={this.props.imgSrc1} alt1={this.props.alt1} /> */}
                </div>
                <div className="col-sm-2 proj-svg-cont-1">
                    <CircleSvg color={this.props.circleColor}/>
                    <div>{this.props.year}</div>
                </div>
                {/* contains the text */}
                <div className="col-sm-5 card-text-container">
                    <div className="project-title-bar">
                        <div>{this.props.title}</div>
                        <div className="spacer"></div>
                        <div className="project-stack skill-icon-cont">
                            {this.props.imageSet}
                        </div>
                    </div>
                    <div className="project-text">
                        <div>{this.props.firstText}</div>
                        <div>{this.props.secondText}</div>
                        <ul>{this.props.listHTML}</ul>
                    </div>
                </div>
                <div className="proj-svg-cont-2">
                    <div className="d-flex justify-content-center">
                        <img src={vklogo} alt="separator"></img>
                    </div>
                    <br></br>
                </div>
            </div>
        );
    }
}
export default ProjectCard;