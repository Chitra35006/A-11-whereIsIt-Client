import { FaHandHoldingHeart } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { GiShakingHands } from "react-icons/gi";

const Unity = () => {
    return (
        <div className="p-8 rounded-lg mx-auto w-11/12 mt my-20 bg-slate-90"> 
        
        <h2 className="text-center mx-auto p-2 rounded-md text-2xl mb-4 font-bold bg-gradient-to-r from-orange-400 via-orange-600 to-red-600 text-white md:w-1/4 w-full">Our Goals</h2>
        <p className='text-center'>Let's build a new nation by spreading love and kindness, fostering unity, sharing knowledge, and helping each other in every situation</p>
        <div className="grid md:grid-cols-12  gap-8  mt-10">
          {/* Item 1 */}
          <div className="flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md bg-blue-100 border-orange-600">
            <TiWorld className="text-4xl text-blue-500" />
            <p className="mt-2  text-lg font-semibold text-black text-blue-40">Build a New Nation</p>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 bg-yellow-100 border-orange-600 ">
            <FaGift className="text-4xl text-yellow-500" />
            <p className="mt-2  text-lg font-semibold  text-black">Spread Love</p>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4  bg-green-100 border-orange-600 " >
            <GiShakingHands className="text-4xl text-green-500" />
            <p className="mt-2  text-lg font-semibold text-black">Help</p>
          </div>
          {/* Item 4 */}
          <div className="flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4   bg-violet-100 border-orange-600 ">
            <FaPeopleGroup className=" text-4xl text-purple-500" />
            <p className="mt-2  text-lg font-semibold text-black">Unity</p>
          </div>
          {/* Item 5 */}
          <div className="flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4   bg-pink-100 border-orange-600 ">
            <FaHandHoldingHeart className="text-4xl text-pink-500" />
            <p className="mt-2  text-lg font-semibold text-black">Kindness</p>
          </div>
          {/* Item 6 */}
          <div className="flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md  p-4 bg-orange-200 border-orange-600">
            <FaLightbulb className="text-4xl text-orange-500" />
            <p className="mt-2  text-lg font-semibold text-black">Ideas</p>
          </div>
        </div>
      </div>
    );
};

export default Unity;