import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { MainText, StyledH2 } from "../styled/comps";
import { CardRow, WorkplaceCard } from "../styled/CardStyles";
import styles from './Experience.module.css';
const Experience = () => {
    return (
        <Container id={styles.mainContainer}>
            <StyledH2>Work Experience</StyledH2>
            <div style={{height: '5%'}}></div>
            <CardRow>
                <WorkplaceCard image="https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/NCR_Corporation_logo.svg/1200px-NCR_Corporation_logo.svg.png" title="NCR Corporation" time="Summer 2021, returning Full-Time in Summer 2022">
                    <MainText><span className={styles.emphasis}>About the Company:&nbsp;</span>NCR is a world leader in enterprise technology for restaurants, stores, and banking services across the globe.  Since building one of the first cash registers for grocery stores, the company has been providing hardware and software to run the next generation of businesses and help them thrive.</MainText>
                    <MainText><span className={styles.emphasis}>What I learned:&nbsp;</span>I worked at the Innovation Lab at NCR, which is a subset of the software team that focuses on the next generation of NCR products and ways to reach our customers.  During my summer at the company I learned a little bit about how user/market research is performed, how large companies grow and operate, and was able to contribute to a full-stack application.</MainText>
                </WorkplaceCard>
            </CardRow>
            <CardRow>
                <WorkplaceCard image="https://www.openet.com/wp-content/uploads/openet-avatar-e1585759267861.jpg" title="Openet, an Amdocs Company" time="Summer 2019 &amp; Summer 2020 - Winter 2021">
                    <MainText><span className={styles.emphasis}>About the Company: &nbsp;</span>Openet Telecom is a digital BSS (Business Support System) company which engages in various platforms of software relating to cellular devices and the latest telecommunications technology. It has projects in areas from underlying network architecture to data plan configuration.</MainText>
                    <MainText><span className={styles.emphasis}>What I learned:&nbsp;</span>During my two internships at Openet's Reston office (Summer 2019 and Summer 2020), I was able to pick up a host of unique technologies ranging from JMeter testing to Kafka data streams.  I also presented to global clients and <u>seriously</u> improved my ping pong game.</MainText>
                </WorkplaceCard>
            </CardRow>
            <CardRow>
                <WorkplaceCard image="https://image.pngaaa.com/641/1524641-middle.png" title="George Mason University"time="Summer 2017" >
                <MainText><span className={styles.emphasis}>About the Company: &nbsp;</span>George Mason University is a university in Fairfax, VA.  Each year it hosts the Aspiring Scientists Summer Internship Program (ASSIP) at its Fairfax and Manassas campuses for high school juniors and seniors. Interns work with university professors on projects related to their fields of interest.</MainText>
                    <MainText><span className={styles.emphasis}>What I learned:&nbsp;</span>During my summer, I worked on the SeeCodeRun project with a graduate student and a faculty member at Mason. I learned a little bit about the academic research process, reading and reviewing papers, and was able to contribute features to the Github repository.</MainText>
                </WorkplaceCard>
            </CardRow>
        </Container>
    )
}
export default Experience