import React from 'react';
import './App.css';

import RedWormTable from "./RedWormTableView";
import GreenWormTable from "./GreenWormTableView";
import BlueWormTable from "./BlueWormTableView";
import RedConfig from "./RedConfig";
import BlueConfig from "./BlueConfig";
import GreenConfig from "./GreenConfig";
import { makeSaver, retrieve } from "./local-storage";

function App() {
  return (
    <div className="App">
      <div>
          <RedWormTable className="App-redTable" />
          <GreenWormTable className="App-greenTable" />
          <BlueWormTable className="App-blueTable" />
      </div>
      <div className="App-config">
          <RedConfig
                onSubmit={makeSaver("redtable")}
                initialValues={retrieve(
                    "redtable",
                    {
                        n: 8,
                        x: 1,
                        m: 29,
                        d: 'ltr-up',
                        w: 20,
                    }
                )}
          />
          <BlueConfig
            onSubmit={makeSaver("bluetable")}
            initialValues={retrieve(
                "bluetable",
                {
                    n: 47,
                    x: 2,
                    m: 81,
                    d: 'rtl-up',
                    w: 40,
                }
            )}
          />
          <GreenConfig
            onSubmit={makeSaver("greentable")}
            initialValues={retrieve(
                "greentable",
                {
                    n: 231,
                    x: 1,
                    m: 247,
                    d: 'ltr-up',
                    w: 30,
                },
            )}
          />
      </div>
    </div>
  );
}

export default App;
