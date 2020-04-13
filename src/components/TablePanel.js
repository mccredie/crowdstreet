import React from "react";
import classNames from "classnames";

import Table from "./Table";

import "./TablePanel.css";

export default ({w, className, onConfigure, ...rest}) => (
    <div className={classNames("TablePanel", className)} style={{width: `${w}%`}} >
        <div className="TablePanel-container" >
            <Table {...rest} />
            <button className="TablePanel-configButton" onClick={onConfigure}>Configure</button>
            <div className="TablePanel-widthLable">{w}%</div>
        </div>
    </div>
)
