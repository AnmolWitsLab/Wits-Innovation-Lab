import "./App.css";
import Header from "./Components/Header";
import { Contain } from "./Components/HeaderStyle";
import Middle from "./Components/Middle";
import MiddleSection from "./Components2/MiddleSection";

function App() {
  return (
    <Contain>
      <Header />
      <Middle />
      <MiddleSection />
    </Contain>
  );
}

export default App;
