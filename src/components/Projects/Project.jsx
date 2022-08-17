import React from "react";
import {projects} from "../../editable-stuff/config";
import qs from "qs";

const project = React.forwardRef((props, ref) => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get('id');
    const data = projects.data.find(i => i.id == id);
        return (
            <>
                <p>{data.name}</p>
            </>
        );
    }
);

export default project;
