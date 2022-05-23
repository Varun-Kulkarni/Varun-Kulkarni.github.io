import React from "react";
import Container from 'react-bootstrap/Container';
import { StyledH1 } from "../components/styled/comps";
import resumeURI from '../assets/Varun_Kulkarni_Resume.pdf'
import styled from 'styled-components';
import { colors } from "../constants";

const EmbedCont = styled.div`
    width: 100%;
    height: 100vh;
`

const Resume = () => {
    return ( 
        <Container fluid style={{background: colors.darkgrey}}>
            <StyledH1>Resume</StyledH1>
            <EmbedCont>
                <embed width="100%" height="100%" type="application/pdf" src={resumeURI}/>
            </EmbedCont>
        </Container>
    )
}

export default Resume;