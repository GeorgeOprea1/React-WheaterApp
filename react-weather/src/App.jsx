import "./App.css";
import Temperature from "./components/Temperature";
import Highlights from "./components/Highlights";

function App() {
  return (
    <>
      <div className="bg-slate-800 h-screen flex justify-center  items-center ">
        <div className="w-full sm:w-[80%] h-[100%] sm:h-[70%] flex flex-col sm:flex-row justify-start items-start ">
          <div className="w-full sm:w-[50%] h-[100%]">
            <Temperature />
          </div>

          <div className="w-full sm:w-[50%] h-[100%]  p-10 grid grid-cols-2 gap-6 ">
            <h1 className=" w-[100%] text-slate-200 text-center text-2xl col-span-2">
              Today&apos;s Highlights
            </h1>
            <Highlights />
            <Highlights />
            <Highlights />
            <Highlights />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
