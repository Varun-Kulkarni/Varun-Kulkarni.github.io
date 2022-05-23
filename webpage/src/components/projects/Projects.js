import React from "react";
import Container from 'react-bootstrap/Container';
import styles from './Projects.module.css';
import { StyledH2 } from "../styled/comps";
import { TimelineContainer } from "./TimelineContainer";

const Projects = () => {
    return (
        <Container id={styles.mainContainer}>
            <StyledH2>Projects</StyledH2>
            <TimelineContainer>
            </TimelineContainer>
        </Container>
    )
}
export default Projects;