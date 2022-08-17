import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ProjectCard = ({data}) => {

    function openProject() {
        document.location = "/project/data?id=" + data.id;
    }

    return (
        <Col md={4} className={'projectCard'} onClick={openProject}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body>
                    <Card.Title as="h5">{data.name || <Skeleton/>} </Card.Title>
                    <Card.Text>{(!data.description) ? "" : data.description || <Skeleton count={3}/>} </Card.Text>
                    {/*<img ref={data.img[0]} alt={data.img[0]} />*/}
                    <p>{data.img[0]}</p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProjectCard;
