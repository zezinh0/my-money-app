import React, { useState } from "react";
import { useSelector } from "react-redux";

import If from "../operator/If";

const TabContent = (props) => {

    const tab = useSelector(state => state.tab);

    const selected = tab.selected === props.id
    const visible = tab.visible[props.id]

    return (
        <If test={visible}>
            <div id={props.id} className={`tab-pane ${selected ? 'active' : ''}`}>
                {props.children}
            </div>
        </If>
    )
}

export default TabContent