import React, {useCallback, useState} from "react";
import {projects} from "../../editable-stuff/config";
import {useTranslation} from 'react-i18next';
import qs from "stringquery";
import Tags from "./Tags";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import Slider from "react-slick";
import Navbar2 from "../Navbar2";
import ImageViewerPanel from "../home/ImageViewerPanel";


const project = React.forwardRef((props, ref) => {

    const sliderSettings = {
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

    //big Image
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    return (
        <>
            <Navbar2/>
            {data !== undefined &&
                (
                    <>
                        <div className="container project">
                            {data.tags && <Tags tagsData={data.tags}/>}
                            <div>
                                <Card.Title as="h2" className="text-center">{t(data.name) || <Skeleton/>} </Card.Title>
                            </div>
                            <Slider {...sliderSettings}>
                                {data.img.map((data, index) => (
                                    <div key={index}>
                                        <img onClick={() => openImageViewer(index)} src={data} alt={data}/>
                                    </div>
                                ))}
                            </Slider>
                            <div className="m-3">
                                <Card.Text>{(!data.description) ? "" : t(data.description) ||
                                    <Skeleton count={3}/>} </Card.Text>
                            </div>
                            {(data.link) &&
                                <div className="m-3">
                                    <a target={"_blank"} href={t(data.link)}>Elastivaca Game!</a>
                                </div>
                            }
                        </div>
                        <ImageViewerPanel images={data.img} currentImage={currentImage} isViewerOpen={isViewerOpen}
                                          setCurrentImage={setCurrentImage} setIsViewerOpen={setIsViewerOpen}/>
                    </>
                )
            }

        </>);
});

export default project;
