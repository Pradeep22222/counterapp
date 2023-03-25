import "./App.css";
import { Add } from "./buttons/Add";
import { Subtract } from "./buttons/Subtract";
import { Display } from "./display/Display";

function App() {
  return (
    <div className="app">
      <Add></Add>
      <Display></Display>
      <Subtract></Subtract>
    </div>
  );
}

export default App;
