import "./App.css";
import SampleCompRTL from "./test-case/component-function/sampleCompRTL";
import SimpleShowHideComp from "./test-case/component-function/simpleShowHideComp";
import CompRole from "./test-case/component-function/compRole";
import CompVariant from "./test-case/component-function/compVariant";
import CompUserEvent from "./test-case/component-function/compUserEvent";
import CompAxiosCall from "./test-case/component-function/compAxiosCall";

function App() {
  return (
    <>
      <SampleCompRTL />
      <SimpleShowHideComp />
      <CompRole />
      <CompVariant />
      <CompUserEvent />
      <CompAxiosCall />
    </>
  );
}

export default App;
