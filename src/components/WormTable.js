import React from "react";

import Table from "./Table";
import Config from "./Config";

export default (props) => (
    <div>
        <Table {...props} />
        <Config {...props} />
    </div>
)
