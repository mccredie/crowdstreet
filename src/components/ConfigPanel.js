import React from 'react';
import classNames from 'classnames';
import Config from "./Config";

import "./ConfigPanel.css";

export default ({className, children, ...props}) => (
    <div className={classNames("ConfigPanel", className)}>
        {children}
        <Config {...props} />
    </div>
);

