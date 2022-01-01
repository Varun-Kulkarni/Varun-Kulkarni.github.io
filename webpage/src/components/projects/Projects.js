import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import styles from './Projects.module.css';
import { StyledH2 } from "../styled/comps";
import { ProjectBubble } from "../styled/CardStyles";
import { TimelineContainer } from "../styled/TimelineComps";

const Projects = () => {
    return (
        <Container id={styles.mainContainer}>
            <StyledH2>Projects</StyledH2>
            <TimelineContainer>
                <p>Hello</p>
                <p>Hello again</p>
            </TimelineContainer>
        </Container>
    )
}
export default Projects;