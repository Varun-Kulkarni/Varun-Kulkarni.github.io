import React, {Component} from 'react';
import './projectCard.css';


class ProjectCard extends Component {
    render () {
        return (
            <div class="card-container row">
                {/* contains the image */}
                <div className="col-sm-6">

                </div>
                {/* contains the text */}
                <div className="col-sm-6 card-text-container">
                    <div className = "project-title">COMP</div>
                </div>
            </div>
        );
    }
}
export default ProjectCard;