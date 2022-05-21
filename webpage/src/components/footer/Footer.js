import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { device } from '../../constants';
import styled from 'styled-components';
import { StyledH2 } from '../styled/comps';

//images
// import {ReactComponent as Resume } from '../../assets/resume-icon.svg';
// import {ReactComponent as MailTo } from '../../assets/mailto.svg';
// import {ReactComponent as Lnkd } from '../../assets/linkedin.svg';
// import {ReactComponent as Octocat } from '../../assets/octocat.svg';
import Resume from '../../assets/resume-icon.svg';
import MailTo from '../../assets/mailto.svg';
import Lnkd from '../../assets/linkedin.svg';
import Octocat from '../../assets/octocat.svg';

const links = [
    {icon: Octocat, href: "https://github.com/Varun-Kulkarni"},
    {icon: MailTo, href: "mailto:kulkarni.varun22@gmail.com"},
    {icon: Lnkd, href: "https://www.linkedin.com/in/varunkulkarni18/"},
    {icon: Resume, href: "#"}
]

const ImgCont = styled.div`
    width: 75%;
    // height: 50vh;
    align-self: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    
    img {
        width: 2rem;
        height: auto;
        @media ${device.md} {
            width: 4rem;
        }
    }
`

const Footer = () => {
    return (
        <Container style={{display: 'flex', flexDirection: 'column'}}>
            <StyledH2>Contact</StyledH2>
            <ImgCont>
                {
                    links.map(e => (<a href={e.href}>
                        <img src={e.icon}/>
                    </a>))
                }
            </ImgCont>
        </Container>
    );
}
export default Footer