import { CiPaperplane } from "react-icons/ci";

const Highlights = ({ stats }) => {
  return (
    <div
      className="bg-slate-600 p-2 text-slate-200 flex flex-col justify-around items-center 
    rounded-xl text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
    >
      <h1 className="text-sm mt-2">{stats.title}</h1>
      <div className="mt-2">
        <span className="lg:text-3xl  text-xl font-bold">{stats.value} </span>
        <span className="lg:text-2xl  text-md ">{stats.unit} </span>
      </div>
      {stats.direction ? (
        <div className="mt-2 flex justify-center items-center">
          <CiPaperplane
            alt="Direction Icon"
            className="sm:w-[24px] w-[16px] sm:h-[24px] h-[16px] text-slate-200"
          />
          <div className="ms-2 text-slate-200 lg:text-lg  text-s">
            {stats.direction}
          </div>
        </div>
      ) : null}
      {stats.title == "Humidity" ? (
        <div className="w-full mt-4 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
            style={{ width: `${stats.value}%` }}
          ></div>
        </div>
      ) : null}
    </div>
  );
};

export default Highlights;
