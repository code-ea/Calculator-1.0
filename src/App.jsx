import {useState} from "react";
import "./App.css";

function App() {

  const[count, setCount] = useState(0);

  function increaseHandler(){
    setCount(count+1);
  }

  function decreaseHandler(){
    setCount(count-1);
  }

  function multiplyHandler(){
    setCount(count*2);
  }

  function divideHandler(){
    setCount(count/2);
  }

  function logHandler(){
    setCount(Math.round(Math.log2(count)));
  }

  function sqrtHandler(){
    setCount(Math.round(Math.sqrt(count)));
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="flex w-[100vw] h-[100vh] bg-[#000000] justify-center items-center">
      <div className="flex flex-col w-[15vw] h-[50vh] bg-[#000000] items-center">
          <div className="flex flex-row-reverse font-bold text-5xl border border-[#000000] bg-[#91B491] rounded-lg w-full">
            {count}
          </div>
          
          <button onClick={resetHandler} className="flex flex-row bg-[#b8c0c8] hover:text-[#FFFFFF] hover:bg-[#ef9a9a] font-bold border rounded-lg w-full justify-center items-center transition-all duration-200">
            Reset
          </button>

          <div className="bg-[#ccccb3] w-full h-full border border-[#000000] flex justify-center items-center w-full grid grid-cols-3 rounded-lg">
            <button onClick={increaseHandler} className="hover:text-[#FFFFFF] group text-4xl w-full h-full font-bold border border-[#000000] hover:bg-[#5dd3e5] hover:shadow-2xl transition-all duration-200">
              <div className="group-hover:animate-bounce group-hover:scale-125">+</div>
            </button>

            <button onClick={decreaseHandler} className="hover:text-[#FFFFFF] group text-4xl w-full h-full font-bold border border-[#000000] hover:bg-[#5dd3e5] hover:shadow-2xl transition-all duration-200">
              <div className="group-hover:animate-bounce group-hover:scale-125">-</div>
            </button>

            <button onClick={multiplyHandler} className="hover:text-[#FFFFFF] group text-4xl w-full h-full font-bold border border-[#000000] hover:bg-[#5dd3e5] hover:shadow-2xl transition-all duration-200">
              <div className="group-hover:animate-bounce group-hover:scale-125">*</div>
            </button>

            <button onClick={divideHandler} className="hover:text-[#FFFFFF] group text-2xl w-full h-full font-bold border border-[#000000] hover:bg-[#5dd3e5] hover:shadow-2xl transition-all duration-200">
              <div className="group-hover:animate-bounce group-hover:scale-125">%</div>
            </button>

            <button onClick={logHandler} className="hover:text-[#FFFFFF] group text-xl w-full h-full font-bold border border-[#000000] hover:bg-[#5dd3e5] hover:shadow-2xl transition-all duration-200">
              <div className="group-hover:animate-bounce group-hover:scale-125">log</div>
            </button>

            <button onClick={sqrtHandler} className="hover:text-[#FFFFFF] group text-xl w-full h-full font-bold border border-[#000000] hover:bg-[#5dd3e5] hover:shadow-2xl transition-all duration-200">
              <div className="group-hover:animate-bounce group-hover:scale-125">sqrt</div>
            </button>

          </div>
      </div>
    </div>
  );
}

export default App;
