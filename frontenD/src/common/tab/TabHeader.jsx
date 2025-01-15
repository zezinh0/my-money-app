import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selecTab } from "./tabActions";
import If from "../operator/If";

const TabHeader = (props) => {
    const dispatch = useDispatch();
    const tab = useSelector(state => state.tab);

    const selected = tab.selected === props.target;
    const visible = tab.visible[props.target]
    return (
        <If test={visible}>
            <li className={selected ? 'active' : ''}>
                <a href='javascript:;' data-toggle='tab' data-target={props.target} onClick={() => dispatch(selecTab(props.target))}>
                    <i className={`fa fa-${props.icon}`}></i> {props.label}
                </a>
            </li>
        </If>
    )
}

export default TabHeader