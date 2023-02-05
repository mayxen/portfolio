import React, {useCallback, useState} from "react";
import {getInTouch, projects, projectsWeb} from "../../editable-stuff/config";
import {useTranslation} from 'react-i18next';
import qs from "stringquery";
import Tags from "./Tags";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import Slider from "react-slick";
import Navbar2 from "../Navbar2";
import ImageViewerPanel from "./ImageViewerPanel";
import { GoMarkGithub, GoBrowser } from "react-icons/go";
import GetInTouch from "../home/GetInTouch";
import Footer from "../Footer";


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

    console.log(urlData)


    let data;
    if (Boolean(urlData.isWeb)) {
        // eslint-disable-next-line
        data = projectsWeb.data.find(i => i.id == urlData.id);
    } else {
        // eslint-disable-next-line
        data = projects.data.find(i => i.id == urlData.id);
    }

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
                                        <img className="clickArea" onClick={() => openImageViewer(index)} src={data} alt={data}/>
                                    </div>
                                ))}
                            </Slider>
                            <div className="m-3">
                                <div id="contain" className="letter">
                                    <p className="inkTitle">{t(data.name) || <Skeleton/>}</p>
                                    <p id="labarum"></p>
                                    <p>{(!data.description) ? "" : t(data.description) ||
                                        <Skeleton count={3}/>}</p>

                                </div>
                            </div>
                            <div className="m-3 floatingButtons">
                                {(data.linkGithub) &&
                                    <a  rel="noreferrer"  target={"_blank"} href={t(data.linkGithub)}><GoMarkGithub /> Github repository</a>
                                }
                                {(data.link) &&
                                    <a  rel="noreferrer"  target={"_blank"} href={t(data.link)}><GoBrowser /> web link</a>
                                }
                            </div>
                        </div>
                        <ImageViewerPanel images={data.img} currentImage={currentImage} isViewerOpen={isViewerOpen}
                                          setCurrentImage={setCurrentImage} setIsViewerOpen={setIsViewerOpen}/>
                        <Footer>
                            {getInTouch.show && (
                                <GetInTouch
                                    heading={getInTouch.heading}
                                    message={getInTouch.message}
                                    email={getInTouch.email}
                                />
                            )}
                        </Footer>
                    </>
                )
            }
        </>);
});

export default project;
