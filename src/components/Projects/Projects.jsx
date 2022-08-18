import React from "react";
import {projects} from "../../editable-stuff/config";
import ProjectCard from "./ProjectCard";
import Navbar2 from "../Navbar2";
import {useTranslation} from 'react-i18next';

const Projects = React.forwardRef(
    ({gradient, title, message, icons}, ref) => {
        const {t} = useTranslation();
        return (
            <>
                <Navbar2/>
                {projects.data.length < 0 && (
                    <h2>{t("Parece que no hay ningún proyecto")}</h2>
                )}
                <div className="projectsCard">
                    {
                        projects.data.map((data, index) => {
                            return <ProjectCard key={index} data={data}/>
                        })
                    }
                </div>
            </>
        );
    }
);

export default Projects;
