import React from 'react';
import {useTranslation} from 'react-i18next';
import {
    Col,
} from "react-bootstrap";

const ExperienceCard = ({data}) => {
    const {t} = useTranslation();
    return (
        <Col lg="6">
            <div className="pb-5 text-center">
                <p className="lead">
                    {t(data.role)}
                    <br/>
                    {t(data.date)}
                </p>
            </div>
        </Col>
    );
}

export default ExperienceCard;