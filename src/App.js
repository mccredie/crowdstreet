import React from 'react';
import './App.css';

import RedWormTable from "./RedWormTableView";
import GreenWormTable from "./GreenWormTableView";
import BlueWormTable from "./BlueWormTableView";
import ConfigPanel from "./ConfigPanel";

function App() {
  return (
    <div className="App">
      <div style={{clear: "right"}}>
          <RedWormTable className="App-redTable" />
          <GreenWormTable className="App-greenTable" />
          <BlueWormTable className="App-blueTable" />
      </div>
      <div className="App-config">
          <ConfigPanel />
      </div>

    </div>
  );
}

export default App;
