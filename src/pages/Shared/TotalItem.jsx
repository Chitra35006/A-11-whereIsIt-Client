import React, { useEffect, useState } from "react";
import { FaSearch, FaCheckCircle, FaBoxOpen } from "react-icons/fa";
import UseTheme from "../../hooks/UseTheme";
import Loading from "../../Loading";
import { motion } from "framer-motion";

const TotalItem = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = UseTheme();

  useEffect(() => {
    fetch("https://a-11-where-is-it-server.vercel.app/addPost")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Calculate total uploaded items
  const totalItems = items.length;
  const lostItems = items.filter((item) => item.post === "Lost").length;
  const foundItems = items.filter((item) => item.post === "Found").length;

  return (
    <div
      className={`w-10/12 mx-auto mt-20 rounded-3xl p-4 
        ${theme === "dark" 
          ? "bg-gradient-to-r from-gray-900 to-indigo-950" 
          : "bg-indigo-950"}`}
    >
      <div className="w-full">
        <h2
          className="p-2 rounded-md text-center text-2xl mb-4 font-bold border-2 md:w-3/12 w-6/12 
            border-indigo-300 text-indigo-300"
        >
          All Data
        </h2>
      </div>

      {loading ? (
        <Loading />  // Use the Loading component here
      ) : (
        <div className="grid md:grid-cols-3 gap-6 p-6 w-11/12 mx-auto">
          <motion.div
  className={`shadow-2xl rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300
    ${theme === "dark" 
      ? "bg-gradient-to-r from-indigo-900 to-slate-900 text-indigo-200" 
      : "bg-gradient-to-r from-indigo-100 to-indigo-300 text-indigo-900"} 
    h-48 sm:h-56 md:h-64`}
  initial={{ opacity: 0, rotate: 0, x: 100, y: -100 }}
  whileInView={{
    opacity: 1,
    rotate: 360, // Rotate in a circular motion
    x: [100, 0], // X-axis circular movement
    y: [100, 0], // Y-axis circular movement
  }}
  transition={{
    duration: 1,
    ease: "easeOut",
    loop: Infinity, // Loops animation
    repeatDelay: 1, // Adds a delay between loops
  }}
  viewport={{ once: false }}
>
  <FaBoxOpen className={`text-5xl mb-3 ${theme === "dark" ? "text-indigo-300" : "text-indigo-600"}`} />
  <h3 className="text-xl font-semibold">Total Uploaded Items</h3>
  <p className="text-2xl font-bold">{totalItems}</p>
</motion.div>

<motion.div
  className={`shadow-2xl rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300
    ${theme === "dark" 
      ? "bg-gradient-to-r from-red-800 to-slate-900 text-red-200" 
      : "bg-gradient-to-r from-red-100 to-red-300 text-red-900"} 
    h-48 sm:h-56 md:h-64`}
  initial={{ opacity: 0, rotate: 0, x: -100, y: -100 }}
  whileInView={{
    opacity: 1,
    rotate: 360,
    x: [100, 0],
    y: [100, 0],
  }}
  transition={{
    duration: 1,
    ease: "easeOut",
    loop: Infinity,
    repeatDelay: 1,
  }}
  viewport={{ once: false }}
>
  <FaSearch className={`text-5xl mb-3 ${theme === "dark" ? "text-red-300" : "text-red-600"}`} />
  <h3 className="text-xl font-semibold">Lost Items</h3>
  <p className="text-2xl font-bold">{lostItems}</p>
</motion.div>

<motion.div
  className={`shadow-2xl rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300
    ${theme === "dark" 
      ? "bg-gradient-to-r from-green-600 to-slate-900 text-green-200" 
      : "bg-gradient-to-r from-green-100 to-green-300 text-green-900"} 
    h-48 sm:h-56 md:h-64`}
  initial={{ opacity: 0, rotate: 0, x: 100, y: 100 }}
  whileInView={{
    opacity: 1,
    rotate: 360,
    x: [100, 0],
    y: [100, 0],
  }}
  transition={{
    duration: 1,
    ease: "easeOut",
    loop: Infinity,
    repeatDelay: 1,
  }}
  viewport={{ once: false }}
>
  <FaCheckCircle className={`text-5xl mb-3 ${theme === "dark" ? "text-green-300" : "text-green-600"}`} />
  <h3 className="text-xl font-semibold">Found Items</h3>
  <p className="text-2xl font-bold">{foundItems}</p>
</motion.div>

        </div>
      )}
    </div>
  );
};

export default TotalItem;
