import React from "react";
import styled from 'styled-components';
import { MainText, StyledH2, StyledH3, StyledH3Mod } from "../styled/comps";
import { device, colors } from "../../constants";

export const Timeline = styled.div`
    @media ${device.md} {
        display: flex;
        flex-direction: column;
        margin: 2rem 0;

    }
`

export const TimelineCard = styled.div`
    position: relative;
    margin: 2rem 0;
    border: 2px solid ${colors.white};
    @media ${device.md} {
        margin: 1rem 0;
        width: 50%;
        &:nth-child(odd) {
            align-self: end;
        }
    }
`

export const TLCardBg = styled.div`
    height: 55vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.background});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0 0.5rem;
`

export const TLCardContent = styled.div`
    padding: 0.5rem;
    background: ${colors.white};
    
`
export const TLCardHeaderCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    img {
        width: 1.75rem;
        height: 1.75rem;
    }
`
export const TLCardFooter = styled.div`
    padding: 0.5rem;
    border-top: 1px solid ${colors.darkgrey};
    background: ${colors.white};
    padding: auto 1rem;
    display: flex;
    flex-direction: row;
`