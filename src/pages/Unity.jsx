import { FaHandHoldingHeart } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { GiShakingHands } from "react-icons/gi";
import { motion } from "framer-motion"; // Import framer-motion
import UseTheme from "../hooks/UseTheme";

const Unity = () => {
  const { theme } = UseTheme();

  return (
    <div
      className={`p-8 rounded-lg mx-auto w-11/12 mt-20 ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"}`}
    >
      {/* Title with Red-Indigo Gradient */}
      <h2
        className={`text-center mx-auto p-2 rounded-md text-2xl mb-4 font-bold border-2 md:w-1/4 w-full 
        ${theme === "dark" ? "text-indigo-200 border-indigo-200" : "text-indigo-950 border-indigo-950"}`}
      >
        Our Goals
      </h2>

      <p className={`text-center ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
        Let's build a new nation by spreading love and kindness, fostering unity, sharing knowledge, and helping each other in every situation.
      </p>

      <div className="grid md:grid-cols-12 gap-8 mt-10">
        {/* Item 1 */}
        <motion.div
          className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 
            ${theme === "dark" ? "bg-indigo-950 border-red-400 text-indigo-300" : "bg-indigo-100 border-red-600 text-black"}`}
          initial={{ opacity: 0, x: 50 }} // Animate from right (x: 50)
          whileInView={{ opacity: 1, x: 0 }} // Reset to original position when in view
          viewport={{ once: false }} // Triggers animation every time it comes into view
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <TiWorld className={`${theme === "dark" ? "text-indigo-300" : "text-indigo-500"} text-4xl`} />
          <p className="mt-2 text-lg font-semibold">Build a New Nation</p>
        </motion.div>

        {/* Item 2 */}
        <motion.div
          className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 
            ${theme === "dark" ? "bg-slate-800 border-indigo-400 text-red-300" : "bg-red-100 border-indigo-900 text-black"}`}
          initial={{ opacity: 0, x: 50 }} // Animate from right (x: 50)
          whileInView={{ opacity: 1, x: 0 }} // Reset to original position when in view
          viewport={{ once: false }} // Triggers animation every time it comes into view
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <FaGift className={`${theme === "dark" ? "text-red-300" : "text-red-500"} text-4xl`} />
          <p className="mt-2 text-lg font-semibold">Spread Love</p>
        </motion.div>

        {/* Item 3 */}
        <motion.div
          className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 
            ${theme === "dark" ? "bg-gray-950 border-red-400 text-indigo-300" : "bg-indigo-200 border-red-600 text-black"}`}
          initial={{ opacity: 0, x: 50 }} // Animate from right (x: 50)
          whileInView={{ opacity: 1, x: 0 }} // Reset to original position when in view
          viewport={{ once: false }} // Triggers animation every time it comes into view
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <GiShakingHands className={`${theme === "dark" ? "text-indigo-300" : "text-indigo-600"} text-4xl`} />
          <p className="mt-2 text-lg font-semibold">Help</p>
        </motion.div>

        {/* Item 4 */}
        <motion.div
          className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 
            ${theme === "dark" ? "bg-gray-950 border-indigo-400 text-red-300" : "bg-red-200 border-indigo-900 text-black"}`}
          initial={{ opacity: 0, x: 50 }} // Animate from right (x: 50)
          whileInView={{ opacity: 1, x: 0 }} // Reset to original position when in view
          viewport={{ once: false }} // Triggers animation every time it comes into view
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <FaPeopleGroup className={`${theme === "dark" ? "text-red-300" : "text-red-600"} text-4xl`} />
          <p className="mt-2 text-lg font-semibold">Unity</p>
        </motion.div>

        {/* Item 5 */}
        <motion.div
          className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 
            ${theme === "dark" ? "bg-indigo-950 border-red-400 text-indigo-300" : "bg-indigo-100 border-red-600 text-black"}`}
          initial={{ opacity: 0, x: 50 }} // Animate from right (x: 50)
          whileInView={{ opacity: 1, x: 0 }} // Reset to original position when in view
          viewport={{ once: false }} // Triggers animation every time it comes into view
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <FaHandHoldingHeart className={`${theme === "dark" ? "text-indigo-300" : "text-indigo-700"} text-4xl`} />
          <p className="mt-2 text-lg font-semibold">Kindness</p>
        </motion.div>

        {/* Item 6 */}
        <motion.div
          className={`flex flex-col items-center justify-center col-span-6 md:col-span-4 border-r-4 rounded-md p-4 
            ${theme === "dark" ? "bg-slate-800 border-indigo-400 text-red-300" : "bg-red-300 border-indigo-900 text-black"}`}
          initial={{ opacity: 0, x: 50 }} // Animate from right (x: 50)
          whileInView={{ opacity: 1, x: 0 }} // Reset to original position when in view
          viewport={{ once: false }} // Triggers animation every time it comes into view
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <FaLightbulb className={`${theme === "dark" ? "text-red-300" : "text-red-700"} text-4xl`} />
          <p className="mt-2 text-lg font-semibold">Ideas</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Unity;
