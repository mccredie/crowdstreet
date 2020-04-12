
import WormTable from "./components/WormTable";
import { wormTable } from "./wormtable"


export default wormTable({
    table: 'red',
    initialValues: {
        n: 8,
        x: 1,
        m: 29,
        w: 20,
    },
})(WormTable)
