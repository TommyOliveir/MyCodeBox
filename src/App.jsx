// import { SimpleTimer } from "./components/SimpleTimer";

// import Calculator from "./components/calculator/Calculator";
import CalcContextProvider from "./components/calculator/CalcContext";
import { GetIDOfAnObj } from "./components/getIdOfObject/GetIDOfAnObj";
// import Eval from "./components/Eval";
import { UserContextProvider } from "./hooks/useUserHook";

function App() {
  console.log("app render");
  return (
    <div>
      <UserContextProvider>
        <CalcContextProvider>
          {/* <SimpleTimer></SimpleTimer> */}
          {/* <Calculator />  */}
          <GetIDOfAnObj />
        </CalcContextProvider>
        {/* <Eval/> */}
      </UserContextProvider>
    </div>
  );
}

export default App;
