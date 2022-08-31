import "./App.css";
import Header from "./Components/Header";
import { Contain } from "./Components/HeaderStyle";
import Middle from "./Components/Middle";
import MiddleSection from "./Components2/MiddleSection";
import MiddleSection2 from "./Components2/MiddleSection2";
import MiddleSection3 from "./Components2/MiddleSection3";
import MiddleSection4 from "./Components2/MiddleSection4";
import MiddleSection5 from "./Components3/MiddleSection5";

function App() {
  return (
    <Contain>
      <Header />
      <Middle />
      <MiddleSection />
      <MiddleSection2 />
      <MiddleSection3 />
      <MiddleSection4 />
      <MiddleSection5 />
    </Contain>
  );
}

export default App;
