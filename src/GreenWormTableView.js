import { wormTable } from "./wormtable"
import WormTable from "./components/WormTable";

export default wormTable({
    table: 'green',
    initialValues: {
        n: 231,
        x: 1,
        m: 247,
    }
})(WormTable)
