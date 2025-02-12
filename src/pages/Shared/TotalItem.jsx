import React, { useEffect, useState } from "react";
import { FaSearch, FaCheckCircle, FaBoxOpen } from "react-icons/fa";
import UseTheme from "../../hooks/UseTheme";

const TotalItem = () => {
  const [items, setItems] = useState([]);
  const { theme } = UseTheme();

  useEffect(() => {
    fetch("http://localhost:5000/addPost")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
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
          : "bg-indigo-950"}`
      }
    >
      <div className="w-full">
        <h2
          className="p-2 rounded-md text-center text-2xl mb-4 font-bold border-2 md:w-3/12 w-6/12 
            border-indigo-300 text-indigo-300"
        >
          All Data
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 p-6 w-11/12 mx-auto">
        {/* Total Uploaded Items */}
        <div
          className={`shadow-md rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300
            ${theme === "dark" 
              ? "bg-gradient-to-r from-indigo-800 to-indigo-600 text-indigo-200" 
              : "bg-gradient-to-r from-indigo-100 to-indigo-300 text-indigo-900"}`
          }
        >
          <FaBoxOpen className={`text-5xl mb-3 ${theme === "dark" ? "text-indigo-300" : "text-indigo-600"}`} />
          <h3 className="text-xl font-semibold">Total Uploaded Items</h3>
          <p className="text-2xl font-bold">{totalItems}</p>
        </div>

        {/* Total Lost Items */}
        <div
          className={`shadow-md rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300
            ${theme === "dark" 
              ? "bg-gradient-to-r from-red-800 to-red-600 text-red-200" 
              : "bg-gradient-to-r from-red-100 to-red-300 text-red-900"}`
          }
        >
          <FaSearch className={`text-5xl mb-3 ${theme === "dark" ? "text-red-300" : "text-red-600"}`} />
          <h3 className="text-xl font-semibold">Lost Items</h3>
          <p className="text-2xl font-bold">{lostItems}</p>
        </div>

        {/* Total Found Items */}
        <div
          className={`shadow-md rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300
            ${theme === "dark" 
              ? "bg-gradient-to-r from-green-800 to-green-600 text-green-200" 
              : "bg-gradient-to-r from-green-100 to-green-300 text-green-900"}`
          }
        >
          <FaCheckCircle className={`text-5xl mb-3 ${theme === "dark" ? "text-green-300" : "text-green-600"}`} />
          <h3 className="text-xl font-semibold">Found Items</h3>
          <p className="text-2xl font-bold">{foundItems}</p>
        </div>
      </div>
    </div>
  );
};

export default TotalItem;
