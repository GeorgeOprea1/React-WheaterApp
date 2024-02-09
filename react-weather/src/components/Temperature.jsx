import { IoLocationOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const Temperature = ({ setCity, stats, getLocation }) => {
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-around ">
      <div className="flex justify-around pt-4 ml-2 mr-2">
        <input
          type="text"
          className="bg-slate-600 border border-slate-500 text-slate-200 placeholder-slate-400 text-md w-[80%] p-2 focus:outline focus:border-slate-400 rounded-xl"
          placeholder="Enter Your City Name"
          onChange={handleCityChange}
          defaultValue={"Bucuresti"}
        />
        <IoLocationOutline
          onClick={getLocation}
          alt="Location Icon"
          className="m-4 text-white cursor-pointer w-7 h-7 text-transform scale-100 hover:scale-150  active:scale-75 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="flex justify-center mt-8 ">
        {stats.isDay === 0 ? (
          <FaRegMoon
            alt="Moon Icon"
            className="text-slate-200 cursor-pointer w-12 h-12 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        ) : (
          <IoSunnyOutline
            alt="Sun Icon"
            className="text-yellow-300 cursor-pointer w-12 h-12 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        )}
      </div>
      <div className="flex justify-center items-center text-slate-200 mt-8  text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
        <h1 className="font-semibold text-[55px] ">{stats.temp}</h1>
        <h2 className="text-[33px]">°C</h2>
      </div>
      <div className="flex justify-center items-center text-slate-300 mt-8 text-[22px]">
        {stats.condition}
      </div>
      <div className="flex justify-center items-center text-slate-400 mt-5 text-[15px]">
        Today {stats.time} | {stats.location}
      </div>
    </div>
  );
};

export default Temperature;
