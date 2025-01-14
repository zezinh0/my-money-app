import React from "react";


const TabHeader = (props) => {

    return (
        <li>
            <a href='javascript:;' data-toggle='tab' data-target={props.target} >
                <i className={`fa fa-${props.icon}`}></i> {props.label}
            </a>
        </li>
    )
}

export default TabHeader