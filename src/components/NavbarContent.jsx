import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {mainBody} from "../editable-stuff/config.js";
import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";

const NavigationContent = ((props) => {
    const {t} = useTranslation();
    return (
        <>
            <Navbar.Brand className="navbar-brand nav-item">
                <Link className="nav-item lead" to={process.env.PUBLIC_URL + "/"}>
                    {`<${mainBody.firstName} />`}
                </Link>
            </Navbar.Brand>
            <Nav className="navbar-nav mr-auto">
                {
                    <>
                        <Link className="nav-item lead" to={"/projects"}>
                            {t('Projects')}
                        </Link>
                        <Link className="nav-item lead" to={"/projectsWeb"}>
                            {t('Web projects')}
                        </Link>
                    </>
                }
            </Nav>
            {props.children}
        </>
    );
});

export default NavigationContent;
