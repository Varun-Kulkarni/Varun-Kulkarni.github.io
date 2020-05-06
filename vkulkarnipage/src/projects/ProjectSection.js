import React, {Component} from 'react';
import './projectSection.css';
import ProjectCard from './ProjectCard/ProjectCard';

class ProjectSection extends Component {
    render () {
        return (
            <div id="proj-section-cont">
                <ProjectCard />
            </div>
        );
    }
}
export default ProjectSection;