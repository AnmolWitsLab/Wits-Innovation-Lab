import "./App.css";
import Header from "./Components/Header";
import { Contain } from "./Components/HeaderStyle";
import Middle from "./Components/Middle";
import MiddleSection from "./Components2/MiddleSection";
import MiddleSection2 from "./Components2/MiddleSection2";
import MiddleSection3 from "./Components2/MiddleSection3";
import MiddleSection4 from "./Components2/MiddleSection4";
import ContactUs from "./Components3/ContactUs";
import MiddleSection5 from "./Components3/MiddleSection5";
import MiddleSection6 from "./Components3/MiddleSection6";

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
      <MiddleSection6 />
      <ContactUs />
    </Contain>
  );
}

export default App;
