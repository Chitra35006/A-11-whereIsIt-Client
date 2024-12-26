import React, { useEffect, useState } from "react";
import AllLostFoundCard from "./AllLostFoundCard";
import { Helmet } from "react-helmet-async";

const LostFoundAllItem = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or table view

  useEffect(() => {
    fetch("https://a-11-where-is-it-server.vercel.app/addPost")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data); // Initialize filtered list
      });
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(value) ||
        post.location.toLowerCase().includes(value)
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>All Lost & Found Items</title>
      </Helmet>

      <h1 className="mt-6 md:w-3/12 md:my-2 text-center font-semibold text-lg bg-blue-950 text-white rounded-sm p-2">
        All Lost & Found Items
      </h1>

      <div className="my-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by title or location..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 w-6/12 border rounded-md"
        />

        <div className="flex space-x-4">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded ${
              viewMode === "grid"
                ? "bg-gradient-to-r from-orange-400 via-orange-600 to-red-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`p-2 rounded ${
              viewMode === "table"
                ? "bg-gradient-to-r from-orange-400 via-orange-600 to-red-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Table View
          </button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid bg-gray-50 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <AllLostFoundCard key={post._id} post1={post} />
            ))
          ) : (
            <p className="col-span-full text-center">No items found</p>
          )}
        </div>
      ) : (
        <div className="bg-white overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Location</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <tr key={post._id} className="hover:bg-gray-50">
                    <td className="p-2 border">{post.title}</td>
                    <td className="p-2 border">{post.location}</td>
                    <td className="p-2 border">{post.date || "N/A"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center p-4">
                    No items found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LostFoundAllItem;
