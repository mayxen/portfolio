import React from "react";
import {projectsWeb} from "../../editable-stuff/config";
import ProjectCard from "./ProjectCard";
import Navbar2 from "../Navbar2";
import {useTranslation} from 'react-i18next';

const ProjectsWeb = React.forwardRef(
    ({gradient, title, message, icons}, ref) => {
        const {t} = useTranslation();
        return (
            <>
                <Navbar2/>
                {projectsWeb.data.length < 0 && (
                    <h2>{t("Parece que no hay ningún proyecto")}</h2>
                )}
                <div className="projectsCard">
                    {
                        projectsWeb.data.map((data, index) => {
                            return <ProjectCard key={index} data={data}/>
                        })
                    }
                </div>
            </>
        );
    }
);

export default ProjectsWeb;
