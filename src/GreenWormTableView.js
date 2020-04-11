import Table from "./components/Table";
import { wormTable } from "./wormtable"


export default wormTable({
    table: 'green',
    initialValues: {
        n: 231,
        x: 1,
        m: 247,
    }
})(Table)
