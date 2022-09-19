import React from "react";
import {projects} from "../../editable-stuff/config";
import {useTranslation} from 'react-i18next';
import qs from "stringquery";
import Tags from "./Tags";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import Slider from "react-slick";
import Navbar2 from "../Navbar2";


const project = React.forwardRef((props, ref) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 1,
    };

    const {t} = useTranslation();
    const search = window.location.hash.split("?")[1];
    const urlData = qs("?" + search);

    // eslint-disable-next-line
    const data = projects.data.find(i => i.id == urlData.id);
    return (
        <>
            <Navbar2/>
            {data !== undefined &&
                (
                    <div className="container project">
                        {data.tags && <Tags tagsData={data.tags}/>}
                        <div>
                            <Card.Title as="h2" className="text-center">{t(data.name) || <Skeleton/>} </Card.Title>
                        </div>
                        <Slider {...settings}>
                            {data.img.map((data, index) => (
                                <div key={index}>
                                    <img src={data} alt={data}/>
                                </div>
                            ))}
                        </Slider>
                        <div className="m-3">
                            <Card.Text>{(!data.description) ? "" : t(data.description) ||
                                <Skeleton count={3}/>} </Card.Text>
                        </div>
                    </div>
                )
            }
        </>);
});

export default project;
