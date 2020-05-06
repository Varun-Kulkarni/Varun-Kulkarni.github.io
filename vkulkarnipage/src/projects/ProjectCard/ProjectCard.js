import React, {Component} from 'react';
import './projectCard.css';
import SingleImageLayout from './imageLayouts/singleLayout';
import CircleSvg from './circleSvg';

class ProjectCard extends Component {
    render () {
        return (
            <div className="card-container row align-items-center">
                {/* contains the image, 1 image */}
                <div className="col-sm-5 card-image-container">
                    <SingleImageLayout imgSrc1={this.props.imgSrc1} alt1={this.props.alt1} />
                </div>
                <div className="col-sm proj-svg-cont-1">
                    <CircleSvg />
                </div>
                {/* contains the text */}
                <div className="col-sm-6 card-text-container">
                    <div className="project-title">Photon</div>
                    <div className="project-text">
                        <p>Photon is a productivity app designed for students.  It uses the iOS calendar interface and 
                        allows the user of the application to do several things: create a task list, schedule events from the task list to 
                        the iOS calendar in an app-specific calendar, view current events/tasks and the remaining time for that task, and 
                        cleanly visualize the events that are scheduled for the next three hours. The app also allows visualization of All-day
                        events.  I was able to learn several things from making this application:
                        </p>
                        <ul>
                            <li>How to use the tools to build an iOS app, especially Swift and Xcode</li>
                            <li>Working with APIs like the iOS <code>EKCalendar</code> interface</li>
                            <li>How to design effective UI elements, icons, and backgrounds with SVG tools</li>
                        </ul>
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