import React from "react";
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import {StyledH1, Subtitle} from '../styled/comps';
import { device } from "../../constants";
const Hero = () => {
    return (
        <Container fluid>
            <HeroWrapper>
                <Subtitle>Hello I'm</Subtitle>
                <StyledH1>Varun Kulkarni</StyledH1>
                <Subtitle>a Full-Stack Dev</Subtitle>
            </HeroWrapper>
        </Container>
    )
}

export default Hero;

const HeroWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${device.md} {
        align-items: center;
    }
`
