import React, {Component} from 'react';
import './organizations.css';
import SingleLayout from '../projects/ProjectCard/imageLayouts/singleLayout';

let openetLogo = require('./logos/openet.jpg');
let gmuLogo = require('./logos/gmu.png');

class OrganizationsSection extends Component {
    render() {
        return (
            <div>
                <div className="general-header">Organizations &amp; Work</div>
                <div id="orgs-section">
                    <div className="row">
                        <div className="col-sm-4 custom-card-container">
                            <div>Openet Telecom</div>
                            <br></br>
                            <div className="text-center"><SingleLayout imgSrc1={openetLogo} alt1={"Openet Telecom logo"} /></div>
                            <br></br>
                            <div className="project-text"><i>Summer 2019</i></div>
                            <div className="project-text">Openet Telecom is a digital BSS (Business Support System) company which engages in various platforms of software relating
                            to cellular devices and the latest telecommunications technology. It has projects in areas like underlying network architecture to data plan configuration. 
                            While working there as a Summer Intern, I helped make visualization software and tested configurations of network servers and devices.</div>
                        </div>
                        <div className="col-sm-4 custom-card-container">
                            <div>George Mason University</div>
                            <br></br>
                            <div className="text-center"><SingleLayout imgSrc1={gmuLogo} alt1={"George Mason University logo"} /></div>
                            <br></br>
                            <div className="project-text"><i>Summer 2017</i></div>
                            <div className="project-text">George Mason University hosts the Aspiring Scientists Summer Internship Program (ASSIP) each summer at their 
                            Fairfax and Manassas campuses.  Interns work with professors on projects related to their fields of interest.  While interning here, I contributed to the SeeCodeRun
                            project as mentioned above and learned about how the area of research and academia functions. </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default OrganizationsSection;