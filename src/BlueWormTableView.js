
import Table from "./components/Table";
import { wormTable } from "./wormtable"


export default wormTable({
    table: 'blue',
    initialValues: {
        n: 47,
        x: 2,
        m: 81,
    }
})(Table)
