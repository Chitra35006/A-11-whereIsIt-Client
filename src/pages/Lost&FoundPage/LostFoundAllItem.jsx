import React, { useEffect, useState } from "react";
import AllLostFoundCard from "./AllLostFoundCard";
import { Helmet } from "react-helmet-async";
import UseTheme from "../../hooks/UseTheme";
import Loading from "../../Loading"; // Import the Loading component

const LostFoundAllItem = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or table view
  const [loading, setLoading] = useState(true); // Loading state
  const [sortOption, setSortOption] = useState("date"); // Sort by date or post type
  const [filterStatus, setFilterStatus] = useState(""); // Filter by Lost or Found
  const { theme } = UseTheme();

  useEffect(() => {
    setLoading(true);
    fetch("https://a-11-where-is-it-server.vercel.app/addPost")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data); // Initialize filtered list
        setLoading(false);
      })
      .catch(() => setLoading(false)); // Stop loading even if there is an error
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

  // Handle sorting
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    sortPosts(value);
  };

  // Handle filter status change
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterStatus(value);
    filterPosts(value);
  };

  // Sort posts by date or post status (Lost/Found)
  const sortPosts = (sortBy) => {
    let sortedPosts = [...filteredPosts];
    if (sortBy === "date") {
      sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date
    } else if (sortBy === "status") {
      sortedPosts.sort((a, b) => a.post.localeCompare(b.post)); // Sort by status (Lost/Found)
    }
    setFilteredPosts(sortedPosts);
  };

  // Filter posts by Lost/Found status
  const filterPosts = (status) => {
    let filtered = posts;
    if (status) {
      filtered = posts.filter((post) => post.post === status);
    }
    setFilteredPosts(filtered);
  };

  return (
    <div className={`w-11/12 mx-auto transition-all duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <Helmet>
        <title>All Lost & Found Items</title>
      </Helmet>

      <h1 className={`mt-6 md:w-3/12 md:my-2 text-center font-semibold text-lg rounded-sm p-2 
        ${theme === "dark" ? "bg-slate-950 text-indigo-200" : "bg-blue-950 text-white"}`}>
        All Lost & Found Items
      </h1>

      {/* Loading Indicator */}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="my-4 flex justify-between items-center">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search by title or location..."
              value={searchTerm}
              onChange={handleSearch}
              className={`p-2 w-6/12 border rounded-md transition-all duration-300 
                ${theme === "dark" 
                  ? "bg-gray-800 text-white placeholder-gray-400 border-gray-600 focus:border-indigo-400" 
                  : "bg-white text-gray-900 placeholder-gray-500 border-gray-300 focus:border-indigo-600"}`}
            />

            {/* Toggle View Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-all duration-300
                  ${viewMode === "grid"
                    ? "bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white"
                    : theme === "dark"
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-200 text-gray-800"}`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-2 rounded transition-all duration-300
                  ${viewMode === "table"
                    ? "bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white"
                    : theme === "dark"
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-200 text-gray-800"}`}
              >
                Table View
              </button>
            </div>
          </div>

          {/* Sorting and Filtering */}
          <div className="my-4 flex space-x-4">
            {/* Sort Dropdown */}
            <select
              value={sortOption}
              onChange={handleSortChange}
              className={`p-2 w-3/12 border rounded-md transition-all duration-300 
                ${theme === "dark" 
                  ? "bg-gray-800 text-white border-gray-600 focus:border-indigo-400" 
                  : "bg-white text-gray-900 border-gray-300 focus:border-indigo-600"}`}
            >
              <option value="date">Sort by Date</option>
              <option value="status">Sort by Status (Lost/Found)</option>
            </select>

            {/* Filter by Lost/Found Status */}
            <select
              value={filterStatus}
              onChange={handleFilterChange}
              className={`p-2 w-3/12 border rounded-md transition-all duration-300 
                ${theme === "dark" 
                  ? "bg-gray-800 text-white border-gray-600 focus:border-indigo-400" 
                  : "bg-white text-gray-900 border-gray-300 focus:border-indigo-600"}`}
            >
              <option value="">All</option>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </div>

          {/* Grid View */}
          {viewMode === "grid" ? (
            <div className={`grid p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 
              ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <AllLostFoundCard key={post._id} post1={post} />
                ))
              ) : (
                <p className="col-span-full text-center">No items found</p>
              )}
            </div>
          ) : (
            // Table View
            <div className={`overflow-x-auto ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white"}`}>
              <table className="w-full border-collapse border border-gray-200">
                <thead className={`${theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-black"}`}>
                  <tr>
                    <th className="p-2 border">Title</th>
                    <th className="p-2 border">Location</th>
                    <th className="p-2 border">Date</th>
                    <th className="p-2 border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                      <tr key={post._id} className={`${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-50"}`}>
                        <td className="p-2 border">{post.title}</td>
                        <td className="p-2 border">{post.location}</td>
                        <td className="p-2 border">{post.date || "N/A"}</td>
                        <td className="p-2 border">{post.post}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center p-4">
                        No items found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LostFoundAllItem;
