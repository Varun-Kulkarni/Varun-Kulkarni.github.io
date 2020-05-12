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
const jmeter = <img src={iconsUrl + 'apachelogo.svg'} alt="JMeter"></img>;
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
    "COMP"      : "Jun - Aug 2019",
    "Web Design": "2015 & 2018",
    "SeeCodeRun": "Jun - Aug 2017",
    "Photon"    : "Jun - Aug 2016"
};
const projectImage = {
    "Photon": [require(imagesUrl + "photon.svg")],
    "SeeCodeRun": [require(imagesUrl + "DivHoverFeat.png"), require(imagesUrl + "LineHoverFeat.png")],
    "COMP" : [require(imagesUrl + "GrafanaFwStats.png"), require(imagesUrl + "KibanaRatingGroups.png")],
    "Web Design": [require(imagesUrl + "eWasteSite.png"), require(imagesUrl + "igemSite.png")],
    "EcoCAR VIP": [require(imagesUrl + "EcoCarLogo.jpg")]
}
const circleColors = {
    "EcoCAR VIP": "#3fad2b",
    "COMP"  : "#f7a21d",
    "Photon": "#3e81b1",
    "SeeCodeRun": "#578aeb",
    "Web Design": "#006a6b"
}
const projectStack = {
    "EcoCAR VIP": [matlab, gitbash],
    "COMP"      : [elastic, grafana, java, jmeter, linux],
    "Web Design": [html, css, javascript, bootstrap, inkscape, gitbash],
    "SeeCodeRun": [html, css, javascript, gitbash],
    "Photon"    : [swift, xcode, c, inkscape, gitbash]
}
const repo = {
    "Photon"    : "https://github.com/Varun-Kulkarni/Photon",
    "SeeCodeRun": "https://github.com/Varun-Kulkarni/SeeCodeRun/tree/issue224",
    "Web Design": ["https://rockridgeigem.github.io", "https://varun-kulkarni.github.io/pages/tsa/index.html"]
    
}
const firstParagraphs = {
    "EcoCAR VIP": "EcoCAR is a competition for college students sponsored by GM, Mathworks, the US Department of Energy, and other companies.  The goal is to transform a normal gasoline vehicle into a semi-autonomous, hybrid vehicle.  The competition emphasizes efficiency, cost-effectiveness, and consumer appeal for the next generation of cars that will populate our roads.  During my time on this team, I learned about the tools that helped contribute to SAE Level 2 Automation of a vehicle such as the MATLAB programming language, Simulink modeling, and toolboxes associated with the challenge",
    "Photon": "Photon is a productivity app designed for students. It uses the iOS calendar interface and allows the user of the application to do several things: create a task list, schedule events from the task list to the iOS calendar in an app-specific calendar, view current events/tasks and the remaining time for that task, and cleanly visualize the events that are scheduled for the next three hours. The app also allows visualization of All-day events. I was able to learn several things from making this application:",
    "SeeCodeRun": "During an internship at GMU, I worked on this pastebin project which was started months before I interned.  I added a feature to the pastebin which could potentially help new Javascript programmers learn about functions in JS which modify website elements",
    "Web Design": "My first major website was a site I made for a competition called the Technology Student Association (kinda like a Science Olympiad for technology challenges).  One part of this competition challenged teams to make a site which focused on the school's Career & Technical Education Program, the school's competition chapter, and their Career & Technical Education programs.  This website became the first major webpage that I finished, and we ended up winning second in the State for this competition.  I learned CSS fundamentals, Responsive Web Design fundamentals, Javascript, and really basic scripts for hosting by making this site",
    "COMP"  : "COMP (Centralized Operations Management Platform) is a data analytics and visualization platform that is part of Openet Telecom's data fabric.  While I interened at Openet, my main goal was to configure the extensive toolkit for use in a new deployment, which included installation, customization, and testing.  Using Elasticsearch, Logstash, Kibana (the ELK Stack, as it is commonly referred as) and Grafana dashboards, I was able to make informative dashboards which showed statistics, KPIs, and other facets of the system and how it was running.  I was able to sync data colleciton and dashboards to the cluster of servers for the deployment for one of Openet's clients and show live, comprehensive analysis of their solution.  During the last week of my internship I demoed my live models to the customer over a conference call, and I later learned that the visualization platform may be part of the final deployment to the customer."
}

const secondParagraphs = {
    "Photon":"",
    "SeeCodeRun": <div>The feature works as such:<ul><li>When a user hovers over a line of Javascript which modifies an element (such as addClass), all elements directly affected that line are highlighted in live preview. </li><li>Lines are also color coded based on unique objects that they modify, and when a user hovers over an object in the Javascript Document Object Model (DOM), it will highlight in a corresponding color if there is such a line which has direclty modified its visual properties.</li></ul>Though SeeCodeRun is now a completed project and didn't implement my experimental feature in the final release, I was able to learn a lot about Javascript, the (DOM), how large JS applications beyond simple webpages are made, and effective code review and version control techniques.  This university internship was also my first major interaction with software academia, which I met as I reviewed papers, attended meetings, &amp; presented to researchers.</div>,
    "Web Design": "The second full website I developed was for my school's synthetic biology team.  This was the first site I used front end frameworks on and I learned a good chunk of the frontend I know through building this project, from SVG graphics to parallax, to cleaner Responsive Web design.  The website shows information about the synthetic bio team, the projects they work on, community outreach events, and more.  Click the links below to see the sites!"
}

const unorderedList = {
    "Photon": <div><li>How to design effective UI elements, icons, and backgrounds with SVG tools</li><li>How to work with APIs like the iOS <code>EKCalendar</code> interface</li><li>How to use tools like Xcode to combine UI with code and manage basic testing of both</li></div>
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