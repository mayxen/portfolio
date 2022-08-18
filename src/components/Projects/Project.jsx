import React from "react";
import {projects} from "../../editable-stuff/config";
import {useTranslation} from 'react-i18next';

const project = React.forwardRef((props, ref) => {
        const {t} = useTranslation();
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const id = params.get('id');
        // eslint-disable-next-line
        const data = projects.data.find(i => i.id == id);
        return (
            <>
                <p>{t(data.name)}</p>
            </>
        );
    }
);

export default project;
