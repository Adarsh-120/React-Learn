import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import { useState } from "react";
function App() {
  const author = "Adarsh";

  const [name, setName] = useState("AKC");

  return (
    <div className="App">
      <p>Class Components</p>
      <ClassComponent />

      <br />

      <p>Function Components</p>
      <FunctionComponent
        name={name}
        age={20}
        author={author}
        setName={setName}
      />
    </div>
  );
}

export default App;
