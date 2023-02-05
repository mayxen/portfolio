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
                <p className="leadBig">
                    {t(data.role)} ({t(data.date)})
                </p>
                <ul className="list">
                    {data.roles.map((data, i) =>
                        <li key={i}>{t(data)}</li>
                    )}
                </ul>
            </div>
        </Col>
    );
}

export default ExperienceCard;