import React from "react";
import classNames from "classnames";

import Table from "./Table";

import "./WormTable.css";

export default ({w, className, onConfigure, ...rest}) => (
    <div className={classNames("WormTable", className)} style={{width: `${w}%`}} >
        <div className="WormTable-container" >
            <Table {...rest} />
            <button className="WormTable-configButton" onClick={onConfigure}>Configure</button>
            <div className="WormTable-widthLable">{w}%</div>
        </div>
    </div>
)
/*<Config {...rest} />*/
