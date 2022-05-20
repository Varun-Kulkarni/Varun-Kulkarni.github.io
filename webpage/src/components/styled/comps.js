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
const s1 = '1.618rem';
const s2 = '2.618rem';
const H2Styled = styled.div`
    font-size: 4.236rem;
    color: ${props => props.dark ? colors.darkgrey: colors.white};

`
const H3Styled = styled.div`
    font-size: 2.618rem;
    color: ${props => props.dark ? colors.darkgrey: colors.white};
`
const H3Modified = styled.div`
    font-size: 1.75rem;
    color: ${props => props.dark ? colors.darkgrey: colors.white};
`

const H4Styled = styled.div`
    font-size: 1.618rem;
    color: ${props => props.dark ? colors.darkgrey: colors.white};
    text-decoration: underline;
    text-decoration-style: double;
`
const MainTextStyle = styled.p`
    font-size: ${props => props.upsize ? '1.3rem': '1rem'};
    color: ${props => props.dark ? colors.darkgrey: colors.white};
    font-style: ${props => props.italic ? 'italic': 'none'};
    font-family: 'Noto Sans Display', sans-serif;
    font-weight: ${props => props.bold ? 'bold':'none'}
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

export const StyledH2 = ({dark, children}) => {
    return <H2Styled dark={dark}>{children}</H2Styled>
}
export const StyledH3 = ({dark, children}) => {
    return <H3Styled dark={dark}>{children}</H3Styled>
}
export const StyledH3Mod = ({dark, children}) => {
    return <H3Modified dark={dark}>{children}</H3Modified>
}
export const StyledH4 = ({dark, children}) => {
    return <H4Styled dark={dark}>{children}</H4Styled>
}
export const MainText = ({italic, dark, bold, children, upsize}) => {
    return <MainTextStyle bold={bold} italic={italic} dark={dark} upsize={upsize}>{children}</MainTextStyle>
}
export const ClipImageCentered = ({src}) => {
    return <CircleAndTabImage src={src} fluid/>
}