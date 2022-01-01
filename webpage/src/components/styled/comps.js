import React from "react";
import styled from 'styled-components';
import { device, colors } from "../../constants";
import Image from 'react-bootstrap/Image'

/*Use type-scale.com to generate rem values based on the golden ratio
 - p: 1rem ~16px
 - h4: 1.618rem
 - h3: 2.618rem
 - h2: 4.236rem
 - h1/title: 6.854rem or 11.809rem

*/
const H2Styled = styled.div`
    font-size: 4.236rem;
    color: ${colors.white};
`
const H3Styled = styled.div`
    font-size: 2.618rem;
    color: ${props => props.dark ? colors.darkgrey: colors.white};
`

const H4Styled = styled.div`
    font-size: 1.618rem;
    color: ${props => props.dark ? colors.darkgrey: colors.white};
    text-decoration: underline;
    text-decoration-style: double;
`
const MainTextStyle = styled.p`
    font-size: 1rem;
    color: ${props => props.dark ? colors.darkgrey: colors.white};
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
    return <H2Styled>{children}</H2Styled>
}
export const StyledH3 = ({children}) => {
    return <H3Styled>{children}</H3Styled>
}
export const StyledH4 = ({dark, children}) => {
    return <H4Styled dark={dark}>{children}</H4Styled>
}
export const MainText = ({dark, children}) => {
    return <MainTextStyle dark={dark}>{children}</MainTextStyle>
}
export const ClipImageCentered = ({src}) => {
    return <CircleAndTabImage src={src} fluid/>
}