import { IoLocationOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const Temperature = () => {
  const handleCityChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className="flex justify-between">
        <input
          type="text"
          className="bg-slate-600 border border-slate-500 text-slate-200 placeholder-slate-400 text-md w-60 p-2 focus:outline focus:border-slate-400"
          placeholder="Enter Your City Name"
          onChange={{ handleCityChange }}
        />
        <IoLocationOutline className="m-4 text-white cursor-pointer w-7 h-7 text-transform scale-100 hover:scale-150 transition-transform duration-300 ease-in-out " />
      </div>
      <div className="flex justify-center mt-8 ">
        <FaRegMoon className="text-slate-200 cursor-pointer w-12 h-12 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out" />
        {/* <IoSunnyOutline className="text-slate-200 cursor-pointer w-12 h-12 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out" /> */}
      </div>
      <div className="flex justify-center items-center text-slate-200 mt-8 ">
        <h1 className="font-semibold text-[55px]">23</h1>
        <h2 className="text-[33px]">°C</h2>
      </div>
      <div className="flex justify-center items-center text-slate-300 mt-8 text-[22px]">
        Mist
      </div>
      <div className="flex justify-center items-center text-slate-400 mt-5 text-[15px]">
        Today 2024-02-09 13:10 | Pitesti
      </div>
    </>
  );
};

export default Temperature;
