import React from "react";
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { MainText, StyledH2, StyledH4 } from "./comps";
import { device, colors } from "../../constants";
import Row from "react-bootstrap/esm/Row";

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
    border: 1px dashed red;
`
const FillImage = styled(Image)`
    display: block;
    width: 100%;
`

export const CardRow = ({children}) => {
    return <CardRowStyle>{children}</CardRowStyle>
}

export const WorkplaceCard = ({title, time, children, image}) => {
    return (
        <>
            <HorizWrapperStyle md="4">
                <FillImage src={image} />
            </HorizWrapperStyle>
            <HorizWrapperStyle>
                <StyledH4>{title}</StyledH4>
                <br></br>
                {children}
            </HorizWrapperStyle>
        </>
    )
}