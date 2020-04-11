import { connect } from "react-redux";

import Table from "./components/Table";


const mapStateToProps = (state) => state.blue;


export default connect(mapStateToProps)(Table)
