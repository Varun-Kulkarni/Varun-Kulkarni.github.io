import React from "react";
import styled from 'styled-components';
import { MainText, StyledH3, StyledH3Mod } from "../styled/comps";
import {content} from './content';
import { Timeline, TimelineCard, TLCardBg, TLCardContent, TLCardFooter, TLCardHeaderCont, IconsContainer} from "../styled/TimelineBuidlingBlocks";
import {Button} from 'react-bootstrap';
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

const NCard = ({title, timeframe, accessory, bullets, technology, links, background}) => {
    const urls = technology.map(e => LOGOS[e]);
    return (
        <TimelineCard>
            <TLCardBg background={background}>
            {title.length > 30 && <StyledH3Mod>{title}</StyledH3Mod>}
            {title.length <= 30 && <StyledH3>{title}</StyledH3>}
            </TLCardBg>
            <TLCardContent>
                <TLCardHeaderCont> 
                    <MainText bold dark italic upsize>{timeframe}</MainText>
                    <IconsContainer>
                        {
                            urls.map((e, i) => (<img src={e} key={i}/>))
                        }
                    </IconsContainer>
                </TLCardHeaderCont>
                <MainText dark bold>{accessory}</MainText><ul>
                {
                    bullets.map(e => (<li>{e}</li>))
                }</ul>
            </TLCardContent>
            {   
                links.length > 0
                && <TLCardFooter>
                    {
                        links.map(e => (
                            <Button variant="outline-dark" href={e.href}>{e.title}</Button>
                        ))
                    }
                </TLCardFooter>
            }
        </TimelineCard>
    )
}


export const TimelineContainer = () => {
    return(
        <Timeline>
            {
                content.map((e, i) => (
                    <NCard key={i} 
                    background={e.backgroundImg}
                    title={e.title}
                    technology={e.technology}
                    timeframe={e.timeframe}
                    accessory={e.accessoryText}
                    bullets={e.bullets}
                    links={e.links}/>
                ))
            }
        </Timeline>
    )
}