import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import styles from './About.module.css'
import { StyledH2, MainText } from "../styled/comps";
import Portrait from '../../assets/portrait-square.jpg';
const About = () => {
    return (
        <Container fluid id={styles.mainContainer}>
            <Row>
                <Col sm>
                    <Image src={Portrait} fluid />
                </Col>
                <Col>
                    <StyledH2>About</StyledH2>
                    <MainText>Hello! I'm Varun Kulkarni.  I'm a student studying computer science at Georgia Institute of Technology and I'm in my 4th year.  I am a full-stack developer with interests in Machine Learning and Cloud Computing, and I want to make interesting, exciting software that helps people.</MainText>
                    <MainText>When I'm not programming, I'm usually biking, exploring my surroundings, or attempting to sing (various degrees of success there).  I'm also a huge cartoon watcher and D&amp;D enthusiast :)</MainText>
                    <MainText>I love building with a focus on implementation, solving problems, and I know that a good product not only gets the job done, but also appeals visually while doing the job. If I sound like someone who could lend a hand, or if any of you just wanna chat, reach out!</MainText>
                </Col>
            </Row>
        </Container>
    )
}
export default About;