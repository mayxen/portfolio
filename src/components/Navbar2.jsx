import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {mainBody} from "../editable-stuff/config.js";
import {NavLink} from "./home/migration";

const Navigation = ((props) => {
    return (
        <Navbar
            className={`px-3 navbar-white`}
            expand="lg"
        >
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
            </Navbar.Collapse>
        </Navbar>
    );
});

export default Navigation;
