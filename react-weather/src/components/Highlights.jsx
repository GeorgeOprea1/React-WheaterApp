import { CiPaperplane } from "react-icons/ci";

const Highlights = () => {
  return (
    <div
      className="bg-slate-600 p-2 text-slate-200 flex flex-col justify-around items-center 
    rounded-xl"
    >
      <h1 className="text-sm mt-2">Wind Status</h1>
      <div className="mt-2">
        <span className="lg:text-3xl  text-xl font-bold">2.5</span>
        <span className="lg:text-2xl  text-lg ">mph</span>
      </div>
      <div className="mt-2 flex">
        <CiPaperplane className="w-[24px] h-[24px] text-slate-200" />
        <div className="ms-2 text-slate-200">E</div>
      </div>
      <div className="w-full mt-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "45%" }}
        ></div>
      </div>
    </div>
  );
};

export default Highlights;
