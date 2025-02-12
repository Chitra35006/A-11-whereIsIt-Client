import React, { useEffect, useState } from "react";
import { FaSearch, FaCheckCircle, FaBoxOpen } from "react-icons/fa";

const TotalItem = () => {
  const [items, setItems] = useState([]);
  
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
   <div className="w-10/12 mx-auto mt-20 bg-indigo-950 rounded-3xl p-4">
   <div className="w-full">
  <h2 className="p-2 rounded-md text-center text-2xl mb-4 font-bold border-indigo-200 border-2 text-indigo-200 md:w-3/12 w-6/12">
    All Data
  </h2>
</div>

     <div className="grid md:grid-cols-3 gap-6 p-6 w-11/12 mx-auto">
      {/* Total Uploaded Items */}
      <div className="bg-indigo-100 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
        <FaBoxOpen className="text-5xl text-indigo-600 mb-3" />
        <h3 className="text-xl font-semibold text-indigo-800">Total Uploaded Items</h3>
        <p className="text-2xl font-bold text-indigo-700">{totalItems}</p>
      </div>

      {/* Total Lost Items */}
      <div className="bg-red-100 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
        <FaSearch className="text-5xl text-red-600 mb-3" />
        <h3 className="text-xl font-semibold text-red-800">Lost Items</h3>
        <p className="text-2xl font-bold text-red-700">{lostItems}</p>
      </div>

      {/* Total Found Items */}
      <div className="bg-green-100 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
        <FaCheckCircle className="text-5xl text-green-600 mb-3" />
        <h3 className="text-xl font-semibold text-green-800">Found Items</h3>
        <p className="text-2xl font-bold text-green-700">{foundItems}</p>
      </div>
    </div>
   </div>
  );
};

export default TotalItem;
