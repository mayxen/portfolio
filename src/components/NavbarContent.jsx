import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {mainBody} from "../editable-stuff/config.js";
import {NavLink} from "./home/migration";

const NavigationContent = ((props) => {
    return (
        <>
            <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/"}>
                {`<${mainBody.firstName} />`}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav mr-auto">
                    {
                        <NavLink className="nav-item lead" href={process.env.PUBLIC_URL + "/projects"}>
                            Projects
                        </NavLink>
                    }
                </Nav>
                {props.children}
            </Navbar.Collapse>
        </>
    );
});

export default NavigationContent;
