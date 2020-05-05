import React, {Component} from 'react';
import SkillItem from './SkillItem';
import CertBadge from '../cert-badge/certBadge';
import './stacksSection.css';
const imgRoot = process.env.PUBLIC_URL + 'img/';
const javaLogo          = imgRoot + 'javalogo.svg';
const cLogo             = imgRoot + 'clogo.svg';
const pythonLogo        = imgRoot + 'pythonlogo.svg';
const jsLogo            = imgRoot + 'jslogo.svg';
const reactLogo         = imgRoot + 'reactlogo.svg';
const htmlLogo          = imgRoot + 'htmllogo.svg';
const cssLogo           = imgRoot + 'csslogo.svg';
const swiftLogo         = imgRoot + 'swiftlogo.svg';
const gitLogo           = imgRoot + 'gitlogo.svg';
const ubuntoLogo        = imgRoot + 'ubuntulogo.svg';
const elasticLogo       = imgRoot + 'elasticlogo.svg';
const grafanaLogo       = imgRoot + 'grafanalogo.svg';
const inkscapeLogo      = imgRoot + 'inkscapelogo.svg';
const xcodeLogo         = imgRoot + 'xcodelogo.svg';
const awsLogo           = imgRoot + 'awslogo.svg';
const certLogo          = imgRoot + 'aws-certified-solutions-architect-associate.png';

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
                            <SkillItem skill="Python" imgsrc={pythonLogo} />
                            <SkillItem skill="Javascript" imgsrc={jsLogo} />
                            <SkillItem skill="JSX/React" imgsrc={reactLogo} />
                            <SkillItem skill="HTML" imgsrc={htmlLogo} />
                            <SkillItem skill="CSS" imgsrc={cssLogo} />
                            <SkillItem skill="Swift" imgsrc={swiftLogo} />
                        </div>
                        <div className="col-sm-3">
                            <div className="stack-header">Software</div>
                            <SkillItem skill="Git" imgsrc={gitLogo} />
                            <SkillItem skill="Ubuntu" imgsrc={ubuntoLogo} />
                            <SkillItem skill="ElasticSearch, Logstash, Kibana (ELK)" imgsrc={elasticLogo} />
                            <SkillItem skill="Grafana" imgsrc={grafanaLogo} />
                            <SkillItem skill="Inkscape" imgsrc={inkscapeLogo} />
                            <SkillItem skill="Xcode" imgsrc={xcodeLogo} />
                        </div>
                        <div className="col-sm-3">
                            <div className="stack-header">Cloud</div>
                            <SkillItem skill="Amazon Web Services" imgsrc={awsLogo} />
                        </div>
                        <div className="col-sm-3">
                            <div className="stack-header">Certificates</div>
                            <CertBadge imgURL={certLogo} alt="AWS Certified Solutions Architect, Associate Badge" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default StacksSection;