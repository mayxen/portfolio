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
            <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/"}>
                {`<${mainBody.firstName} />`}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav mr-auto">
                    {
                        <Link className="nav-item lead" to={"/projects"}>
                            {t('Projects')}
                        </Link>
                    }
                </Nav>
                {props.children}
            </Navbar.Collapse>
        </>
    );
});

export default NavigationContent;
