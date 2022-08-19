import React from "react";
import {about, experiences, getInTouch, mainBody, skills} from "../../editable-stuff/config";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Skills from "./Skills";
import MainBody from "./MainBody";
import Navbar from "../Navbar";
import GetInTouch from "./GetInTouch";
import Footer from "../Footer";

const home = React.forwardRef(
    ({gradient, title, message, icons}, ref) => {
        return (
            <>
                <Navbar ref={ref}/>
                <MainBody
                    gradient={mainBody.gradientColors}
                    title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
                    message={mainBody.message}
                    icons={mainBody.icons}
                    ref={ref}
                />
                {about.show && (
                    <AboutMe
                        heading={about.heading}
                        message={about.message}
                        link={about.imageLink}
                        imgSize={about.imageSize}
                        resume={about.resume}
                    />
                )}
                {skills.show && (
                    <Skills
                        heading={skills.heading}
                        hardSkills={skills.hardSkills}
                        softSkills={skills.softSkills}
                    />
                )}
                {experiences.show && (
                    <Experience experiences={experiences}/>
                )}
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
        );
    }
);

export default home;
