import React from "react";
import { connect } from "react-redux";


import ConfigPanelComponent from "./components/ConfigPanel";
import Config from "./Config";
import { close } from "./config/actions";


const mapStateToProps = (state) => ({
    visible: state.config !== null,
    table: state.config,
})

const mapDispatchToProps = (dispatch) => ({
    onCancel: () => dispatch(close()),
});


const ConfigPanel = ({visible, table, onCancel}) => (
    <ConfigPanelComponent visible={visible}>
        <Config table={table} onCancel={onCancel}/>
    </ConfigPanelComponent>
);

export default connect(mapStateToProps, mapDispatchToProps)(ConfigPanel);

