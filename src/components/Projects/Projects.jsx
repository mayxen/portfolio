import React from "react";
import {projects} from "../../editable-stuff/config";
import ProjectCard from "../home/ProjectCard";

const Projects = React.forwardRef(props => {
        return (
            <>
                {projects.data.length < 0 && (
                    <h2>Parece que no hay ningún proyecto</h2>
                )}
                {
                    projects.data.map((data, index) => {
                        return <ProjectCard key={index} data={data}/>
                    })
                }
            </>
        );
    }
);

export default Projects;
