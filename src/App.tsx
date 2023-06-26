import ExtremeScheduler from "./components/extremeScheduler";
import Button from "devextreme-react/button";

import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/header";
import {CourtList} from "./components/courts";

function App() {
  const sayHelloWorld = () => {
    alert("Hello world!");
  };

  const App = () => {
    return (
      <div className="text-gray-900 bg-gray-300 font-sans-serif">
        {/* <header className="App-header">
        <h1 className="text-3xl font-bold underline">Hello Volley Potsdam!</h1>
      </header> */}
        {/* <body> */}
        <Header />
        <div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-lime-600 via-yellow-300 to-red-600">
          <Button text="Click me" onClick={sayHelloWorld} />
          <button>Hello Button</button>
        </div>
        <Router>
          <Route path="/" Component={ExtremeScheduler} />
          <Route path="/courts" Component={CourtList} />
        </Router>
        {/* <ExtremeScheduler /> */}
        {/* </body> */}
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
}

// export default App;
