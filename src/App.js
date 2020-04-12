import React from 'react';
import './App.css';

import RedWormTable from "./RedWormTableView";
import GreenWormTable from "./GreenWormTableView";
import BlueWormTable from "./BlueWormTableView";
import RedConfig from "./RedConfig"
import BlueConfig from "./BlueConfig"
import GreenConfig from "./GreenConfig"

function App() {
  return (
    <div className="App">
      <div>
          <RedWormTable className="App-redTable" />
          <GreenWormTable className="App-greenTable" />
          <BlueWormTable className="App-blueTable" />
      </div>
      <div style={{clear: 'both'}}>
          <RedConfig />
          <BlueConfig />
          <GreenConfig />
      </div>
    </div>
  );
}

export default App;
