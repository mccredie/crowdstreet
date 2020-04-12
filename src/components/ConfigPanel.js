import React from 'react';

import "./ConfigPanel.css";

export default ({visible, children}) => (
    <>
    {visible &&
        <div className="ConfigPanel">{children}</div>
    }
    </>
);

