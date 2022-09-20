import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import {Jumbotron} from "./migration";
import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";
import Arrows from "./Arrows";
import i18n from 'i18next';

const MainBody = React.forwardRef(({gradient, title, message, icons}, ref) => {

    const changeLang = () => {
        i18n.changeLanguage((i18n.language === "es-ES") ? "en" : "es-ES").then(r => "");
    }
    const {t} = useTranslation();

    return (
        <Jumbotron
            fluid
            id="home"
            style={{
                background: `linear-gradient(136deg,${gradient})`, backgroundSize: "1200% 1200%",
            }}
            className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
        >
            <div id="stars"></div>
            <Container className="text-center">
                <h1 ref={ref} className="display-1">
                    {title}
                </h1>
                <Typist>
                    <div className="lead typist">
                        {t(message)}
                    </div>
                </Typist>
                <div className="p-5">
                    {icons.map((icon, index) => (<a
                        key={`social-icon-${index}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={icon.url}
                        aria-label={`My ${icon.image.split("-")[1]}`}
                    >
                        <i className={`fab ${icon.image}  fa-3x socialicons`}/>
                    </a>))}
                </div>
            </Container>
            <Link className="btn btn-outline-light btn-lg buttonMargin" to={"/projects"}
                  aria-label="View recent projects">
                {t('View recent projects')}
            </Link>
            <div className="btn btn-outline-light btn-lg buttonMargin" onClick={changeLang}
                  aria-label="change language">
                {t('changeLang')}
            </div>
            <Arrows/>
        </Jumbotron>);
});

export default MainBody;
