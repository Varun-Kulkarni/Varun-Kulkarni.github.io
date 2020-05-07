import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProjectCard from './ProjectCard/ProjectCard';

const iconsUrl = process.env.PUBLIC_URL + '/img/';
const bootstrap = <img src={iconsUrl + 'bootstraplogo.svg'} alt="Bootstrap"></img>;
const c = <img src={iconsUrl + 'clogo.svg'} alt="C"></img>;
const css = <img src={iconsUrl + 'csslogo.svg'} alt="CSS"></img>;
const elastic = <img src={iconsUrl + 'elasticlogo.svg'} alt="Elasticsearch, Logstash, Kibana"></img>;
const gitbash = <img src={iconsUrl + 'gitbash.svg'} alt="Git"></img>;
const grafana = <img src={iconsUrl + 'grafanalogo.svg'} alt="Grafana"></img>;
const html = <img src={iconsUrl + 'htmllogo.svg'} alt="HTML5"></img>;
const inkscape = <img src={iconsUrl + 'inkscapelogo.svg'} alt="Inkscape"></img>;
const java = <img src={iconsUrl + 'javalogo.svg'} alt="Java"></img>;
const javascript = <img src={iconsUrl + 'jslogo.svg'} alt="Javascript"></img>;
const linux = <img src={iconsUrl + 'linuxlogo.svg'} alt="Linux"></img>;
const matlab = <img src={iconsUrl + 'matlablogo.png'} alt="Matlab"></img>;
const react = <img src={iconsUrl + 'reactlogo.svg'} alt="ReactJS"></img>;
const jmeter = <img src={iconsUrl + 'jmeterlogo.svg'} alt="JMeter"></img>;
const swift = <img src={iconsUrl + 'swiftlogo.svg'} alt="Swift"></img>;
const xcode = <img src={iconsUrl + 'xcodelogo.svg'} alt="XCode"></img>;
const imagesUrl = './images/';

const projectTitles = [
    "EcoCAR VIP",
    "COMP",
    "Web Design",
    "SeeCodeRun",
    "Photon"
];

const projectYears = {
    "EcoCAR VIP": "2019 - 2020",
    "COMP"      : "2019",
    "Web Design": "2018",
    "SeeCodeRun": "2017",
    "Photon"    : "2016"
};
const projectImage = {
    "Photon": [require(imagesUrl + "photon.svg")]
}
const circleColors = {
    "EcoCAR VIP": "#3fad2b",
    "Photon": "#3e81b1"
}
const projectStack = {
    "EcoCAR VIP": [matlab, gitbash],
    "COMP"      : [elastic, grafana, java, jmeter, linux],
    "Web Design": [html, css, javascript, bootstrap, inkscape, gitbash],
    "SeeCodeRun": [html, css, javascript, react, gitbash],
    "Photon"    : [swift, xcode, c, inkscape, gitbash]
}
const repo = {
    "Photon"    : "https://github.com/Varun-Kulkarni/Photon"
    
}
const firstParagraphs = {
    "EcoCAR VIP": "EcoCAR is a competition for college students sponsored by GM, Mathworks, the US Department of Energy, and other companies.  The goal is to transform a normal gasoline vehicle into a semi-autonomous, hybrid vehicle.  The competition emphasizes efficiency, cost-effectiveness, and consumer appeal for the next generation of cars that will populate our roads.  During my time on this team, I learned about the tools that helped contribute to SAE Level 2 Automation of a vehicle such as the MATLAB programming language, Simulink modeling, and toolboxes associated with the challenge",
    "Photon": "Photon is a productivity app designed for students. It uses the iOS calendar interface and allows the user of the application to do several things: create a task list, schedule events from the task list to the iOS calendar in an app-specific calendar, view current events/tasks and the remaining time for that task, and cleanly visualize the events that are scheduled for the next three hours. The app also allows visualization of All-day events. I was able to learn several things from making this application:"
}

const secondParagraphs = {
    "Photon":""
}

const unorderedList = {
    "Photon": <div><li>How to design effective UI elements, icons, and backgrounds with SVG tools</li><li>Working with APIs like the iOS <code>EKCalendar</code> interface</li><li>How to design effective UI elements, icons, and backgrounds with SVG tools</li></div>
}




class CardCreator extends Component {
    // renderCard = (project) => {
    //     ReactDOM.render(
    //         <ProjectCard title={project} year={projectYears[project]} />
    //         ,document.getElementById('card-creator-root')
    //     );
    // }
    render() {
        return (<p></p>);
    }
    componentWillMount(){
        for (var i = 0; i < projectTitles.length; i++) {
            let title = projectTitles[i];
            let aCard = <ProjectCard title={title} 
                year={projectYears[title]} 
                imgSrc1={projectImage[title]} 
                listHTML={unorderedList[title]}
                firstText={firstParagraphs[title]} 
                secondText={secondParagraphs[title]}
                circleColor={circleColors[title]} 
                imageSet={projectStack[title]} 
                repo={repo[title]}
            />
            ReactDOM.render(aCard, document.getElementById('card-' + i.toString()));
            // console.log(document.getElementById('skillicons-'+i.toString()));
            // let icons = projectStack[title];
            // console.log(icons);
            // let iconContainer = <div className='skill-icon-cont'>
            // </div>
            // let a = <ProjectCardStack imgURLList={icons}/>

            // for (var iconObj in icons) {
            //     iconContainer.appendChild(<img src={iconObj.icon} alt={iconObj.alt}></img>);
            // }
            // console.log(iconContainer);
            // ReactDOM.render(a, document.getElementById('skillicons-' + i.toString()));
        }
    }

    
}
export default CardCreator;