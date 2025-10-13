import React, { useEffect, useState } from "react";
import { Search, Eye } from "lucide-react";
import { useAppContext } from "../../Context/Context";
import toast from "react-hot-toast";
import Loader from "../../Components/Loader";
const UserList = () => {
  const { users, navigate,setUsers,axios} = useAppContext();
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState(""); // "" = All
const [loading, setLoading] = useState(true);  
  // Process users (mark expired if needed)
const fetchUsers = async () => {
    try {
      setLoading(true); // show loader before fetching
      const {data} = await axios.get("/api/user-list");
      if(data.success){
     setUsers(data.userList);
    }
    } catch (err) {
      toast.error("Error fetching users:", err);
    } finally {
      setLoading(false); // hide loader after fetching
    }
  };
 useEffect(() => {
  fetchUsers();
}, [ ]);


  // Filter by search + status
  useEffect(() => {
    let temp = [...users];

    if (search) {
      const lowerSearch = search.toLowerCase();
      temp = temp.filter(
        (user) =>
          user.name?.toLowerCase().includes(lowerSearch) ||
          user.phone?.toString().includes(lowerSearch)
      );
    }

    if (statusFilter) {
      temp = temp.filter((user) => user.status === statusFilter);
    }

    setFilteredUsers(temp);
  }, [search, statusFilter, users]);

  const handleView = (userId) => {
    navigate(`/seller/user-profile/${userId}`);
  };

  // if (loading) return <Loader message="Fetching users, please wait..." />;
  return (
    <div className="flex-1 min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Member List</h2>

        {/* Search & Status Filter */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[250px] max-w-sm">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Expired">Expired</option>
            <option value="Paused">Paused</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200">
         {loading ? (
    // Loader section
    <div className="flex flex-col items-center justify-center py-10">
      {/* Spinner */}
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3"></div>
      <p className="text-gray-600 font-medium">Fetching users, please wait...</p>
    </div>
  ) : (
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                <tr>
                  <th className="py-3 px-4 text-left">#</th>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Phone</th>
                  <th className="py-3 px-4 text-left">Plan</th>
                  <th className="py-3 px-4 text-left">Price (₹)</th>
                  <th className="py-3 px-4 text-left">Joined</th>
                  <th className="py-3 px-4 text-left">Expiry</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user, index) => (
                    <tr
                      key={user._id}
                      className="border-t hover:bg-gray-50 transition-all"
                    >
                      <td className="py-3 px-4">{index + 1}</td>
                      <td className="py-3 px-4 font-medium text-gray-800">
                        {user.name}
                      </td>
                      <td className="py-3 px-4 text-gray-600">{user.phone}</td>
                      <td className="py-3 px-4 text-gray-600">
                        {user.duration}
                      </td>
                      <td className="py-3 px-4 text-gray-600">{user.price}</td>
                      <td className="py-3 px-4 text-gray-600">
                        {new Date(user.joinDate).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {new Date(user.expiryDate).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4">
                     <span
  className={`px-2 py-1 rounded-full text-xs font-medium ${
    user.status === "Active"
      ? "bg-green-100 text-green-800"
      : user.status === "Expired"
      ? "bg-red-100 text-red-800"
      : "bg-yellow-100 text-yellow-800 animate-pulse"
  }`}
>
  {user.status}
</span>

                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => handleView(user._id)}
                          className="flex items-center gap-1 mx-auto bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-md text-xs font-medium shadow-sm transition-all"
                        >
                          <Eye size={14} /> View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="9"
                      className="text-center py-6 text-gray-500 italic"
                    >
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
