import "./App.css";
import Header from "./Components/Header";
import { Contain } from "./Components/HeaderStyle";
import Middle from "./Components/Middle";

function App() {
  return (
    <Contain>
      <Header />
      <Middle />
    </Contain>
  );
}

export default App;
