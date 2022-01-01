import React from "react";
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { MainText, StyledH2, StyledH3, StyledH4 } from "./comps";
import { device, colors } from "../../constants";
import Row from "react-bootstrap/Row";

// const WrapperStyle = styled(Col)`
//     background: white;
//     max-width: 33vw;
//     border: 2px solid black;
//     padding: 5px
// `

const HorizWrapperStyle = styled(Col)`
    background: ${colors.darkgrey};
    padding: 1%;
`

const CardTitle = styled.div`
    font-size: 2rem;

`;
const CardRowStyle = styled(Row)`
    display: flex;
    align-items: center;
`
const FillImage = styled(Image)`
    display: block;
    width: 80%;
    margin-left: 50%;
    transform: translateX(-50%);
    @media screen and (max-width: 992px) {
        width: 75%;
    }
`

export const CardRow = ({children}) => {
    return <CardRowStyle>{children}</CardRowStyle>
}

export const WorkplaceCard = ({title, time, children, image}) => {
    return (
        <>
            <HorizWrapperStyle lg="4">
                <FillImage src={image} />
            </HorizWrapperStyle>
            <HorizWrapperStyle>
                <StyledH3>{title}</StyledH3>
                <MainText><i>{time}</i></MainText>
                <br></br>
                {children}
            </HorizWrapperStyle>
        </>
    )
}

const ProjectLeftCard = styled(Col)`
    border: 2px solid white;
    height: 40vh;

`

export const ProjectBubble = ({direction}) => {
    if (direction === "left") {
        return(
            <Row>
                <ProjectLeftCard lg="5"></ProjectLeftCard>
                <Col style={{border: "1px solid red "}}></Col>
                <ProjectLeftCard lg="5"></ProjectLeftCard>
            </Row>
        )
    } else {
        return (
            <Row></Row>
        )
    }
}