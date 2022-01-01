import React from "react";
import styled from 'styled-components';
import { MainText, StyledH2, StyledH3, StyledH4 } from "./comps";
import { device, colors } from "../../constants";
import {content} from '../projects/content';



const TL = styled.div`
    display: block;
    @media ${device.md} {
        display: flex;
        flex-direction: column;
        position: relative;
        // border: 1px solid red;
        margin: 2rem 0;
        &:after {
            background-color: ${colors.white};
            content: '';
            position: absolute;
            width: 0.5rem;
            height: 100%;
            left: calc(50% - 0.25rem);
        }
    }
`

const TLCard = styled.div`
    border: 1px solid white;
    height: inherit;

    @media ${device.md} {
        position: relative;
        margin: 0.5rem 0;
        width: 45%;
        
        &:nth-child(odd) {
            align-self: flex-end;
        }
    }
`
const TLCardBg = styled.div`
    min-height: 30vh;
    background-size: contain;
    background-color: black;
    background-repeat: no-repeat;
    background-position: center;
`
const TLCardContent = styled.div`
    margin: 0 0.5rem;
`
const HorizontalSplit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between
`
const TLCardFooter = styled.div``

const TimelineCardFilled = ({imgSrc, bulletPoints, title, timeframe}) => {
    return (
        <TLCard>
            <TLCardBg style={{backgroundImage: `url(${imgSrc})`}}>
            </TLCardBg>
            <TLCardContent>
                <HorizontalSplit>
                    <StyledH3>{title}</StyledH3>
                </HorizontalSplit>
                <MainText style={{color: "#028090"}}>{timeframe}</MainText>
                <ul>
                    {bulletPoints.map(point => (<li style={{color: colors.white}}>{point}</li>))}
                </ul>
            </TLCardContent>
            <TLCardFooter>
            
            </TLCardFooter>
            
        </TLCard>
    )
}

export const TimelineContainer = () => {
    return(
        <TL>
            {
                content.map(entry => (
                    <TimelineCardFilled 
                    imgSrc={entry.backgroundImg} 
                    bulletPoints={entry.bullets} 
                    title={entry.title} 
                    timeframe={entry.timeframe}
                    key={entry.title} />
                ))
            }
        </TL>
    )
}
