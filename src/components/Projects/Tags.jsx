import React from "react";
import {tags} from "../../editable-stuff/config";

const Tags = ({tagsData}) => {

    return (
        <div className="tags">
            {tagsData.map((data, index) => (
                <span key={index} className="tag" style={{backgroundColor: data !== tags[data] ? tags[data] : ''}}>
                    {data}
                </span>
            ))}
        </div>
    );
};

export default Tags;
