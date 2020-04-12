import React from "react";
import classNames from "classnames";

import Table from "./Table";
import Config from "./Config";

import "./WormTable.css";

export default ({w, color, className, ...rest}) => (
    <div className={classNames("WormTable", className)} style={{width: `${w}%`}} >
        <div className="WormTable-container" style={{borderColor: color}} >
            <Table {...rest} />
            <button className="WormTable-configButton">Configure</button>
            <div className="WormTable-widthLable">{w}%</div>
        </div>
    </div>
)
/*<Config {...rest} />*/
