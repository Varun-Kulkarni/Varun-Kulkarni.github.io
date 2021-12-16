import React from "react";
import styled from 'styled-components';

const H2Styled = styled.div`
    font-size: 4rem;
    color: #fdfffc;
`
const MainTextStyle = styled.p`
    font-size: 1rem;
    color: #fdfffc;
    font-family: 'Noto Sans Display', sans-serif;
`

export const StyledH2 = ({children}) => {
    return (
        <H2Styled>{children}</H2Styled>
    )
}
export const MainText = ({children}) => {
    return <MainTextStyle>{children}</MainTextStyle>
}