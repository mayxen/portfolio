import React from "react";
import {about, experiences, leadership, mainBody, repos, skills} from "../../editable-stuff/config";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Project from "./Project";
import Leadership from "./Leadership";
import Skills from "./Skills";
import MainBody from "./MainBody";

const home = React.forwardRef(
    ({gradient, title, message, icons}, ref) => {
        return (
            <>
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
                {
                    experiences.show && (
                        <Experience experiences={experiences}/>
                    )
                }
                {repos.show && (
                    <Project
                        heading={repos.heading}
                        username={repos.gitHubUsername}
                        length={repos.reposLength}
                        specfic={repos.specificRepos}
                    />
                )}
                {leadership.show && (
                    <Leadership
                        heading={leadership.heading}
                        message={leadership.message}
                        img={leadership.images}
                        imageSize={leadership.imageSize}
                    />
                )}
                {skills.show && (
                    <Skills
                        heading={skills.heading}
                        hardSkills={skills.hardSkills}
                        softSkills={skills.softSkills}
                    />
                )}
            </>
        );
    }
);

export default home;
