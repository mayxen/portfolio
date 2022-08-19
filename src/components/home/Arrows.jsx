import React from 'react';
import {
    Container,
} from "react-bootstrap";

const Arrows = () => {
    return (
        <section className="section">
            <Container>
                <div className="arrow">
                    <div className="curve"></div>
                    <div className="point"></div>
                </div>
                <div className="arrows"></div>
            </Container>
        </section>
    );
}

export default Arrows;