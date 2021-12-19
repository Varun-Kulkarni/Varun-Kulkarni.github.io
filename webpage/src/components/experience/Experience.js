import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from './Experience.module.css';
import { MainText, StyledH2 } from "../styled/comps";
import { CardRow, WorkplaceCard } from "../styled/CardStyles";
const Experience = () => {
    return (
        <Container id={styles.mainContainer}>
            <StyledH2>Work Experience</StyledH2>
            <div style={{height: '5%'}}></div>
            <CardRow>
                <WorkplaceCard image="https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/NCR_Corporation_logo.svg/1200px-NCR_Corporation_logo.svg.png" title="NCR Corporation">
                    <MainText>akljd;fajksl;</MainText>
                </WorkplaceCard>
                {/* <VerticalCard image="Foo" />
                <VerticalCard>Hello</VerticalCard> */}
            </CardRow>
        </Container>
    )
}
export default Experience