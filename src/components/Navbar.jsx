import React, {useState} from "react";
import {useScrollPosition} from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import {about, skills} from "../editable-stuff/config.js";
import {NavLink} from "./home/migration";
import NavbarContent from "./NavbarContent";
import {useTranslation} from 'react-i18next';

const Navigation = React.forwardRef((props, ref) => {
    const [isTop, setIsTop] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const navbarMenuRef = React.useRef();
    const navbarDimensions = useResizeObserver(navbarMenuRef);
    const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
    const {t} = useTranslation();
    useScrollPosition(
        ({prevPos, currPos}) => {
            if (!navbarDimensions) return;
            currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
                ? setIsTop(true)
                : setIsTop(false);
            setScrollPosition(currPos.y);
        },
        [navBottom]
    );

    React.useEffect(() => {
        if (!navbarDimensions) return;
        navBottom - scrollPosition >= ref.current.offsetTop
            ? setIsTop(false)
            : setIsTop(true);
    }, [navBottom, navbarDimensions, ref, scrollPosition]);

    return (
        <Navbar
            ref={navbarMenuRef}
            className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"
            }`}
            expand="lg"
        >
            <NavbarContent>
                {about.show && (
                    <NavLink
                        className="nav-item lead softMargin"
                        href={process.env.PUBLIC_URL + "/#aboutme"}
                    >
                        {t('About')}
                    </NavLink>
                )}
                {skills.show && (
                    <NavLink
                        className="nav-item lead softMargin"
                        href={process.env.PUBLIC_URL + "/#skills"}
                    >
                        {t('Skills')}
                    </NavLink>
                )}
            </NavbarContent>
        </Navbar>
    );
});

export default Navigation;
