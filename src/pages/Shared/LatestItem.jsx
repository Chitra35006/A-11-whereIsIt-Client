import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaCalendarAlt, FaClipboardList } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useTheme } from "../../context/ThemeContext";
import Loading from "../../Loading";

const LatestItem = () => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);
  const singlePostData = useLoaderData(); // Fetching Data

  useEffect(() => {
    if (singlePostData) {
      setLoading(false);
    }
  }, [singlePostData]);

  const limitText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="w-11/12 md:my-10 md:mb-0 mb-6 mx-auto">
      <h1
        className={`border-b-4 border-r-4 rounded-2xl border-red-600 md:text-2xl text-xl text-center p-2 text-red-600 font-medium md:w-3/12 w-6/12 mb-6 ${
          theme === "dark" ? "bg-slate-950" : "bg-red-100"
        }`}
      >
        Latest Post
      </h1>

      {loading ? (
        <Loading /> // Show Loader when data is being fetched
      ) : (
        <>
          <div
            className={`grid p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${
              theme === "dark" ? "bg-indigo-950" : "bg-gray-200"
            }`}
          >
            {singlePostData.map((post) => (
              <div
                key={post._id}
                className={`max-w-sm rounded-lg shadow-lg overflow-hidden ${
                  theme === "dark" ? "bg-slate-950" : "bg-white"
                }`}
              >
                {/* Title Section */}
                <div className="p-4 border-t">
                  <h2 className="md:text-lg text-[13px] font-semibold bg-gray-200 p-2 text-indigo-950 truncate">
                    {post.title}
                  </h2>
                </div>
                {/* Image Section */}
                <div
                  className={`relative w-full border rounded-md p-4 h-48 ${
                    theme === "dark" ? "border-slate-700" : "border-gray-300 "
                  }`}
                >
                  <img
                    src={post.photo}
                    alt={post.title}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                {/* Info Section */}
                <div className="p-4 flex flex-col space-y-2">
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1 text-red-600" />
                      <span
                        className={`font-medium ${
                          theme === "dark" ? "text-gray-200" : "text-gray-600"
                        }`}
                      >
                        {post.date}
                      </span>
                    </div>
                    <div className="flex items-center p-2 rounded-xl border border-blue-500 bg-blue-50">
                      <FaClipboardList className="mr-1 text-blue-600" />
                      <span className="text-gray-600 font-medium">
                        {post.post}
                      </span>
                    </div>
                  </div>
                  <p
                    className={`text-sm line-clamp-3 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {limitText(post.description, 100)}
                  </p>
                </div>
                {/* Button Section */}
                <div className="p-4 flex justify-end items-center">
                  <Link
                    className="focus:outline-none hover:outline-none focus:ring-0"
                    to={`/allPostViewDetails/${post._id}`}
                    tabIndex={-1} // Prevents focus on Link
                  >
                    <button
                      type="button"
                      className="w-full px-3 focus:outline-none focus:ring-0 hover:outline-none md:text-lg text-base bg-indigo-950 hover:bg-gradient-to-r from-red-500 via-red-600 to-red-900 text-white font-semibold py-2 rounded-md flex items-center justify-center gap-2"
                    >
                      <AiOutlineArrowRight size={18} />
                      <span>See More</span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className={`border btn text-xl mx-auto w-4/12 md:w-3/12 font-semibold hover:text-red-800 hover:bg-red-300 hover:border-none ${
                theme === "dark" ? "bg-gray-950" : "bg-gray-100"
              } ${theme === "dark" ? "border-red-800" : "border-none"} ${
                theme === "dark" ? "text-red-200" : "text-blue-950"
              }`}
            >
              <Link to="/allItems">See All</Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LatestItem;
