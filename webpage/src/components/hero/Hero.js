import React from "react";
import Container from 'react-bootstrap/Container';
import styles from './Hero.module.css'
const Hero = () => {
    return (
        <Container fluid>
            <div className={styles.heroWrapper}>
                <div className={styles.titleText}>Hello</div>
            </div>
        </Container>
    )
}

export default Hero;