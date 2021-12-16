import React from "react";
import styled from 'styled-components';
import { device } from "../../constants";
import Image from 'react-bootstrap/Image'


const H2Styled = styled.div`
    font-size: 4rem;
    color: #fdfffc;
`
const MainTextStyle = styled.p`
    font-size: 1rem;
    color: #fdfffc;
    font-family: 'Noto Sans Display', sans-serif;
`
const CircleAndTabImage = styled(Image)`
    clip-path: circle(50% at center);

    @media ${device.sm} {
        max-width: 80%;
        clip-path: polygon(0 100%,0 0,100% 0,80% 100%);
        position: relative;
        left: 50%;
        transform: translateX(-50%)
    }
`

export const StyledH2 = ({children}) => {
    return (
        <H2Styled>{children}</H2Styled>
    )
}
export const MainText = ({children}) => {
    return <MainTextStyle>{children}</MainTextStyle>
}
export const ClipImageCentered = ({src}) => {
    return <CircleAndTabImage src={src} fluid/>
}