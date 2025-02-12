import { FaHandHoldingHeart } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { GiShakingHands } from "react-icons/gi";

const Unity = () => {
    return (
        <div className="p-8 rounded-lg mx-auto w-11/12 mt-20 bg-slate-50"> 
        
        {/* Title with Red-Indigo Gradient */}
        <h2 className="text-center mx-auto p-2 rounded-md text-2xl mb-4 font-bold border-indigo-950 border-2  text-indigo-950 md:w-1/4 w-full">
          Our Goals
        </h2>
        
        <p className="text-center text-gray-700">
          Let's build a new nation by spreading love and kindness, fostering unity, sharing knowledge, and helping each other in every situation.
        </p>

        <div className="grid md:grid-cols-12 gap-8 mt-10">
          {/* Item 1 - Indigo */}
          <div className="flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md bg-indigo-100 border-red-600">
            <TiWorld className="text-4xl text-indigo-500" />
            <p className="mt-2 text-lg font-semibold text-black">Build a New Nation</p>
          </div>

          {/* Item 2 - Red */}
          <div className="flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 bg-red-100 border-indigo-900">
            <FaGift className="text-4xl text-red-500" />
            <p className="mt-2 text-lg font-semibold text-black">Spread Love</p>
          </div>

          {/* Item 3 - Indigo */}
          <div className="flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 bg-indigo-200 border-red-600">
            <GiShakingHands className="text-4xl text-indigo-600" />
            <p className="mt-2 text-lg font-semibold text-black">Help</p>
          </div>

          {/* Item 4 - Red */}
          <div className="flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 bg-red-200 border-indigo-900">
            <FaPeopleGroup className="text-4xl text-red-600" />
            <p className="mt-2 text-lg font-semibold text-black">Unity</p>
          </div>

          {/* Item 5 - Indigo */}
          <div className="flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 bg-indigo-100 border-red-600">
            <FaHandHoldingHeart className="text-4xl text-indigo-700" />
            <p className="mt-2 text-lg font-semibold text-black">Kindness</p>
          </div>

          {/* Item 6 - Red */}
          <div className="flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 bg-red-300 border-indigo-900">
            <FaLightbulb className="text-4xl text-red-700" />
            <p className="mt-2 text-lg font-semibold text-black">Ideas</p>
          </div>
        </div>
      </div>
    );
};

export default Unity;
