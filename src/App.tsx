import React from "react";

import {Table, CourtImages} from "./components/table";

function App() {
  return (
    <div className="text-gray-900 bg-gray-300 font-sans-serif">
      {/* <header className="App-header">
        <h1 className="text-3xl font-bold underline">Hello Volley Potsdam!</h1>
      </header> */}
      {/* <body> */}
      <CourtImages />
      <Table />
      {/* </body> */}
    </div>
  );
}

export default App;
