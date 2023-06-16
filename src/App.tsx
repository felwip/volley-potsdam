import 'devextreme/dist/css/dx.light.css';
import React, {useMemo, useState, useEffect} from "react";

import ReactTable from "./components/reactTable";
import {Table, CourtImages} from "./components/table";
import {Table2} from "./components/table2";

function App() {
  return (
    <div className="text-gray-900 bg-gray-300 font-sans-serif">
      {/* <header className="App-header">
        <h1 className="text-3xl font-bold underline">Hello Volley Potsdam!</h1>
      </header> */}
      {/* <body> */}
      <CourtImages />
      {/* <Table /> */}
      {/* <Table2 /> */}
      <ReactTable />
      {/* </body> */}
    </div>
  );
}

export default App;
