import "devextreme/dist/css/dx.light.css";
import Button from "devextreme-react/button";
import Header from "./components/header";

import ExtremeScheduler from "./components/extremeScheduler";

function App() {
  const sayHelloWorld = () => {
    alert("Hello world!");
  };

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
      <ExtremeScheduler />
      {/* </body> */}
    </div>
  );
}

export default App;
