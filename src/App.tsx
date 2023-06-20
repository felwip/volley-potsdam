import "devextreme/dist/css/dx.light.css";
import Button from "devextreme-react/button";

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
      <Button text="Click me" onClick={sayHelloWorld} />
      <ExtremeScheduler />
      {/* </body> */}
    </div>
  );
}

export default App;
