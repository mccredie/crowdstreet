import React from "react";

import Table from "./Table";
import Config from "./Config";

import "./WormTable.css";

export default ({w, color, ...rest}) => (
    <div className="WormTable" style={{width: `${w}%`}} >
        <div className="WormTable-container" style={{borderColor: color}} >
            <Table {...rest} />
            <div className="WormTable-widthLable">{w}%</div>
        </div>
        <Config {...rest} />
    </div>
)
