import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarContent from "./NavbarContent";

const Navigation = ((props) => {
    return (
        <Navbar
            className={`px-3 backgroundBlue`}
            expand="lg"
        >
            <NavbarContent/>
        </Navbar>
    );
});

export default Navigation;
