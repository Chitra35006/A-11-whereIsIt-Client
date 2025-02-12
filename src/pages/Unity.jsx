import { FaHandHoldingHeart } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { GiShakingHands } from "react-icons/gi";

import UseTheme from "../hooks/UseTheme";

const Unity = () => {
  const { theme } = UseTheme();
  
  return (
    <div className={`p-8 rounded-lg mx-auto w-11/12 mt-20 ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"}`}> 
      
      {/* Title with Red-Indigo Gradient */}
      <h2 className={`text-center mx-auto p-2 rounded-md text-2xl mb-4 font-bold border-2 md:w-1/4 w-full 
        ${theme === "dark" ? "text-indigo-200 border-indigo-200" : "text-indigo-950 border-indigo-950"}`}>
        Our Goals
      </h2>

      <p className={`text-center ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
        Let's build a new nation by spreading love and kindness, fostering unity, sharing knowledge, and helping each other in every situation.
      </p>

      <div className="grid md:grid-cols-12 gap-8 mt-10">
        {/* Item 1 */}
        <div className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 
          ${theme === "dark" ? "bg-indigo-950 border-red-400 text-indigo-300" : "bg-indigo-100 border-red-600 text-black"}`}>
          <TiWorld className={`${theme === "dark" ? "text-indigo-300" : "text-indigo-500"} text-4xl`} />
          <p className="mt-2 text-lg font-semibold">Build a New Nation</p>
        </div>

        {/* Item 2 */}
        <div className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 
          ${theme === "dark" ? "bg-slate-800 border-indigo-400 text-red-300" : "bg-red-100 border-indigo-900 text-black"}`}>
          <FaGift className={`${theme === "dark" ? "text-red-300" : "text-red-500"} text-4xl`} />
          <p className="mt-2 text-lg font-semibold">Spread Love</p>
        </div>

        {/* Item 3 */}
        <div className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 
          ${theme === "dark" ? "bg-gray-950 border-red-400 text-indigo-300" : "bg-indigo-200 border-red-600 text-black"}`}>
          <GiShakingHands className={`${theme === "dark" ? "text-indigo-300" : "text-indigo-600"} text-4xl`} />
          <p className="mt-2 text-lg font-semibold">Help</p>
        </div>

        {/* Item 4 */}
        <div className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 
          ${theme === "dark" ? "bg-gray-950 border-indigo-400 text-red-300" : "bg-red-200 border-indigo-900 text-black"}`}>
          <FaPeopleGroup className={`${theme === "dark" ? "text-red-300" : "text-red-600"} text-4xl`} />
          <p className="mt-2 text-lg font-semibold">Unity</p>
        </div>

        {/* Item 5 */}
        <div className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 
          ${theme === "dark" ? "bg-indigo-950 border-red-400 text-indigo-300" : "bg-indigo-100 border-red-600 text-black"}`}>
          <FaHandHoldingHeart className={`${theme === "dark" ? "text-indigo-300" : "text-indigo-700"} text-4xl`} />
          <p className="mt-2 text-lg font-semibold">Kindness</p>
        </div>

        {/* Item 6 */}
        <div className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 
          ${theme === "dark" ? "bg-slate-800 border-indigo-400 text-red-300" : "bg-red-300 border-indigo-900 text-black"}`}>
          <FaLightbulb className={`${theme === "dark" ? "text-red-300" : "text-red-700"} text-4xl`} />
          <p className="mt-2 text-lg font-semibold">Ideas</p>
        </div>
      </div>
    </div>
  );
};

export default Unity;
