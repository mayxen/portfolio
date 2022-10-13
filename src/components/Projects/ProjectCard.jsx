import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import {useTranslation} from 'react-i18next';
import Slider from "react-slick";
import Tags from "./Tags";

const ProjectCard = ({data}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 1,
    };
    const {t} = useTranslation();

    function openProject() {
        document.location = "/#/project/data?id=" + data.id;
    }

    return (
        <Col md={4} className={'projectCard'}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body >
                    {data.tags && <Tags tagsData={data.tags}/>}
                    <div className="clickArea" onClick={openProject}>
                        <Card.Title as="h5">{t(data.name) || <Skeleton/>} </Card.Title>
                        <Card.Text>{(!data.shortDescription) ? "" : t(data.shortDescription) ||
                            <Skeleton count={3}/>} </Card.Text>
                    </div>
                    <Slider {...settings}>
                        {data.shortImg.map((data, index) => (
                            <div key={index}>
                                <img src={data} alt={data} onClick={openProject}/>
                            </div>
                        ))}
                    </Slider>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProjectCard;
