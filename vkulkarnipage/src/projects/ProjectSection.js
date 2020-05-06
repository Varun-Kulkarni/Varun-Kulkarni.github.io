import React, {Component} from 'react';
import './projectSection.css';
import ProjectCard from './ProjectCard/ProjectCard';
const comp = require('./images/Grafana_Fw_Stats.png');
const photon = require('./images/photon.svg');
const icon = process.env.PUBLIC_URL + '/img/awslogo.svg';
class ProjectSection extends Component {
    render () {
        return (
            <div>
                <div id="proj-section-cont">
                    <div className="general-header">Projects</div>
                    <ProjectCard imgSrc1={photon} alt1="Photon"/> 
                </div>
            </div>
        );
    }
}
export default ProjectSection;