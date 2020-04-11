import { connect } from "react-redux";

import Table from "./components/Table";


const mapStateToProps = (state) => state.red;


export default connect(mapStateToProps)(Table)
