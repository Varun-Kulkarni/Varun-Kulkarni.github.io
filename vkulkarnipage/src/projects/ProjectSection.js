import React, {Component} from 'react';
import './projectSection.css';

// const icon = process.env.PUBLIC_URL + '/img/awslogo.svg';
class ProjectSection extends Component {
    render () {
        return (
            <div>
                <div id="proj-section-cont">
                    <div className="general-header">Projects</div>
                    <div id="card-creator-root"></div>
                    <div className="timelinebg">
                        <div id="card-0"></div>
                        <div id="card-1"></div>
                        <div id="card-2"></div>
                        <div id="card-3"></div>
                        <div id="card-4"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProjectSection;