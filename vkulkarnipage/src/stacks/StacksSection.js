import React, {Component} from 'react';
import SkillItem from './SkillItem';
import './stacksSection.css';
const javaLogo = process.env.PUBLIC_URL + '/img/javalogo.svg';
const cLogo = process.env.PUBLIC_URL + 'img/clogo.svg';



class StacksSection extends Component {
    render() {
        return (
            <div>
            <div className="general-header">Technologies</div>
                <div id="skills-container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="stack-header">Languages</div>
                            <SkillItem skill="Java" imgsrc={javaLogo}/>
                            <SkillItem skill="C" imgsrc={cLogo}/>
                            <SkillItem skill="Python" imgsrc={cLogo} />
                            <SkillItem skill="Javascript" imgsrc={cLogo} />
                            <SkillItem skill="JSX/React" imgsrc={cLogo} />
                            <SkillItem skill="HTML" imgsrc={cLogo} />
                            <SkillItem skill="CSS" imgsrc={cLogo} />
                            <SkillItem skill="Swift" imgsrc={cLogo} />
                        </div>
                        <div className="col-sm-3">
                            <div className="stack-header">Software</div>
                            <SkillItem skill="Git" imgsrc={cLogo} />
                            <SkillItem skill="Ubuntu" imgsrc={cLogo} />
                            <SkillItem skill="Red Hat Server" imgsrc={cLogo} />
                            <SkillItem skill="ElasticSearch, Logstash, Kibana (ELK)" imgsrc={cLogo} />
                            <SkillItem skill="Grafana" imgsrc={cLogo} />
                            <SkillItem skill="Inkscape" imgsrc={cLogo} />
                            <SkillItem skill="Xcode" imgsrc={cLogo} />
                        </div>
                        <div className="col-sm-3">
                            <div className="stack-header">Cloud</div>
                            <SkillItem skill="Amazon Web Services" imgsrc={cLogo} />
                        </div>
                        <div className="col-sm-3">
                            <div className="stack-header">Certificates</div>
                            <SkillItem skill="Amazon Web Services, Solutions Architect Associate" imgsrc={cLogo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default StacksSection;