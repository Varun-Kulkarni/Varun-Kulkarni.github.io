import React, {Component} from 'react';
import './projectCard.css';
import SingleImageLayout from './imageLayouts/singleLayout';
import CircleSvg from './circleSvg';

// const aLogo = process.env.PUBLIC_URL + '/img/xcodelogo.svg';
// const aSecondLogo = process.env.PUBLIC_URL + '/img/swiftlogo.svg';
// const aThirdLogo = process.env.PUBLIC_URL + '/img/gitlogo.svg';
class ProjectCard extends Component {
    render () {
        return (
            <div className="card-container row align-items-center">
                {/* contains the image, 1 image */}
                <div className="col-sm-5 card-image-container">
                    <SingleImageLayout imgSrc1={this.props.imgSrc1} alt1={this.props.alt1} />
                </div>
                <div className="col-sm-1 proj-svg-cont-1">
                    <CircleSvg color={this.props.circleColor}/>
                    {this.props.year}
                </div>
                {/* contains the text */}
                <div className="col-sm-6 card-text-container">
                    <div className="project-title-bar">
                        <div className="project-title">{this.props.title}</div>
                        <div className="spacer"></div>
                        <div className="project-stack skill-icon-cont">
                            {this.props.imageSet}
                        </div>
                    </div>
                    <div className="project-text">
                        <p>{this.props.firstText}</p>
                        <p>{this.props.secondText}</p>
                        <ul>{this.props.listHTML}</ul>
                    </div>
                </div>
                <div className="col-sm proj-svg-cont-2">
                    <CircleSvg />
                </div>
            </div>
        );
    }
}
export default ProjectCard;