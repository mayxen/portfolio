import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {Jumbotron} from './migration';
import {
    Container,
    Row,
} from "react-bootstrap";
import {useTranslation} from 'react-i18next';

const Experience = ({experiences}) => {
    const {t} = useTranslation();
    return (
        <section className="section">
            <Container>
                <Jumbotron className="bg-white">
                    <h2 className="display-4 mb-5 text-center">
                        {t(experiences.heading)}
                    </h2>
                    <Row>
                        {
                            experiences.data.map((data, index) => {
                                return <ExperienceCard key={index} data={data}/>
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}

export default Experience;