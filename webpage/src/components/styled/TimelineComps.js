import React from "react";
import styled from 'styled-components';
import { MainText, StyledH2, StyledH3, StyledH3Mod } from "./comps";
import { device, colors } from "../../constants";
import {content} from '../projects/content';

/**Import other icons */
import KafkaUrl from "../../assets/apache_kafka_svgo.svg";
import elasticLogo from "../../assets/elasticsearch.svg";
import gitlogo from "../../assets/git_icon.svg";
import grafanalogo from "../../assets/grafana.svg";
import jslogo from "../../assets/javascript.svg";
import jenkinslogo  from "../../assets/jenkins_logo.png";
import kubelogo  from "../../assets/kubernetes.png";
import linuxlogo from "../../assets/linux.svg";
import reactLogo from "../../assets/react_logo.svg";
import nestLogo from "../../assets/nestjs.png";
import gcpLogo from "../../assets/gcp_logo.svg";
import xcodeLogo from '../../assets/xcodelogo.svg';
import pythonLogo from "../../assets/pythonlogo.png";
import tfLogo from '../../assets/tensorflow_logo.png';
import matlabLogo from '../../assets/matlablogo.png';
import javaLogo from '../../assets/javalogo.svg';
import apacheLogo from '../../assets/apachelogo.svg';
import cssLogo from '../../assets/csslogo.png';
import htmlLogo from '../../assets/htmllogo.png';
import bootstrapLogo from '../../assets/bootstraplogo.svg';
import inkscapeLogo from '../../assets/inkscapelogo.svg';
import cLogo from '../../assets/clogo.png';
import swiftLogo from '../../assets/swiftlogo.png';

const LOGOS = {
    "kafka": KafkaUrl ,
    "elastic": elasticLogo,
    "git": gitlogo,
    "grafana": grafanalogo,
    "js": jslogo,
    "jenkins": jenkinslogo,
    "kubernetes": kubelogo,
    "linux": linuxlogo,
    "react": reactLogo,
    "nestjs": nestLogo,
    "gcp": gcpLogo,
    "ios": xcodeLogo,
    "python3": pythonLogo,
    "tf": tfLogo,
    "matlab": matlabLogo,
    "java": javaLogo,
    "jmeter": apacheLogo,
    "css": cssLogo,
    "html": htmlLogo,
    "bootstrap": bootstrapLogo,
    "inkscape": inkscapeLogo,
    "c": cLogo,
    "swift": swiftLogo
}

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
    padding: 0.5rem 0;
    margin: 2rem 0;

    @media ${device.md} {
        position: relative;
        margin: 1rem 0;
        width: 45%;
        
        &:nth-child(odd) {
            align-self: flex-end;
        }
    }
`
const TLCardBg = styled.div`
    height: 30vh;
    background-size: contain;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    @media ${device.md} {
        height: 60vh;
    }
`
const TLCardContent = styled.div`
    margin: 0 0.5rem;
`
const HorizontalSplit = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between
`
const TLCardFooter = styled.div``
const HorizFlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const TinyIcon = styled.img`
    margin: 0 0.25rem;
    height: 1.75rem;
    width: auto;
`
const TLCircle = styled.div`
    background-color: ${colors.white}
    position: relative;
    border: 4px solid red;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    // top: -50%;
`
const iconSize = 35
const TimelineCardFilled = ({imgSrc, bulletPoints, title, timeframe, accessoryText, tech}) => {
    return (<><TLCircle></TLCircle> 
        <TLCard>
            <TLCardBg style={{backgroundImage: `url(${imgSrc})`}}></TLCardBg>
            <TLCardContent>
                {title.length > 30 && <StyledH3Mod>{title}</StyledH3Mod>}
                {title.length <= 30 && <StyledH3>{title}</StyledH3>}
                <HorizFlexContainer>
                    <MainText>{timeframe}</MainText>
                    <div>
                        {
                            tech.map(e => {
                                return <TinyIcon src={LOGOS[e]} alt={e} />
                            })
                        }
                    </div>
                </HorizFlexContainer>
                {accessoryText != undefined && <MainText style={{textDecoration: 'italic'}}>{accessoryText}</MainText>}
                <ul>
                    {bulletPoints.map(point => (<li style={{color: colors.white}}>{point}</li>))}
                </ul>
            </TLCardContent>
            {/* <TLCardContent>
                {title.length > 30 && <StyledH3Mod>{title}</StyledH3Mod>}
                {title.length <= 30 && <StyledH3>{title}</StyledH3>}
                <HorizFlexContainer>
                    <MainText style={{color: "#028090"}}>{timeframe}</MainText>
                    <div>
                        {
                        tech.map(e => {
                            // console.log(e)  
                            // const x = <img src={LOGOS[e]} key={e} />
                            return <img src={LOGOS[e]} alt={e} width={iconSize} height={iconSize}/>
                        })
                        }
                    </div>
                </HorizFlexContainer>
                
                {accessoryText != undefined && <MainText style={{textDecoration: 'italic'}}>{accessoryText}</MainText>}

                <ul>
                    {bulletPoints.map(point => (<li style={{color: colors.white}}>{point}</li>))}
                </ul>
            </TLCardContent> */}
            <TLCardFooter>
            
            </TLCardFooter>
        </TLCard>
        </>

        
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
                    key={entry.title}
                    tech={entry.technology}
                    accessoryText={entry.accessoryText}/>
                ))
            }
        </TL>
    );
}
