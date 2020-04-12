
import { wormTable } from "./wormtable"
import WormTable from "./components/WormTable";


export default wormTable({
    table: 'blue',
    initialValues: {
        n: 47,
        x: 2,
        m: 81,
    }
})(WormTable)
