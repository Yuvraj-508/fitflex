import React, { useEffect, useState } from "react";
import { Clock, CheckCircle } from "lucide-react";
import axios from "axios";
import { useAppContext } from "../../Context/Context";

const SellerDashboard = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { users, setUsers } = useAppContext();

  const fetchUsers = async () => {
    try {
      const today = new Date();
      const filtered = users
        .map((u) => {
          const expiry = new Date(u.expiryDate);
          const diff = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));
          return { ...u, daysLeft: diff };
        })
        .filter((u) => u.daysLeft <= 7 && u.daysLeft >= 0);

      setFilteredUsers(filtered);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  // ✨ Beautiful loader
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="relative w-16 h-16">
          <div className="absolute w-16 h-16 border-4 border-teal-300 rounded-full animate-spin border-t-transparent"></div>
          <p className="absolute inset-0 flex items-center justify-center text-sm text-gray-600 font-medium">
            Loading
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Seller Dashboard
        </h1>

        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-purple-200 transition-all">
            <h3 className="text-gray-500 text-sm mb-1">Total Users</h3>
            <p className="text-3xl font-bold text-gray-800">{users.length}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-yellow-200 transition-all">
            <h3 className="text-gray-500 text-sm mb-1">Expiring in 7 Days</h3>
            <p className="text-3xl font-bold text-yellow-500">
              {filteredUsers.length}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-green-200 transition-all">
            <h3 className="text-gray-500 text-sm mb-1">Active</h3>
            <p className="text-3xl font-bold text-green-500">
              {users.filter((u) => u.status === "Active").length}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-red-200 transition-all">
            <h3 className="text-gray-500 text-sm mb-1">Expired</h3>
            <p className="text-3xl font-bold text-red-500">
              {users.filter((u) => u.status === "Expired").length}
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
              <tr>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Phone</th>
                <th className="py-3 px-6">Joining Date</th>
                <th className="py-3 px-6">Expiry Date</th>
                <th className="py-3 px-6">Duration</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Days Left</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, i) => {
                let color = "text-green-500";
                if (user.daysLeft <= 7 && user.daysLeft > 4)
                  color = "text-orange-400";
                if (user.daysLeft <= 4 && user.daysLeft > 2)
                  color = "text-yellow-500";
                if (user.daysLeft <= 2) color = "text-red-500";

                return (
                  <tr
                    key={i}
                    className="border-t border-gray-200 hover:bg-gray-50 transition-all"
                  >
                    <td className="py-3 px-6 font-medium flex items-center gap-2">
                      <CheckCircle size={16} className={color} />
                      {user.name}
                    </td>
                    <td className="py-3 px-6 text-gray-700">{user.phone}</td>
                    <td className="py-3 px-6 text-gray-700">
                      {new Date(user.joinDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-6 text-gray-700">
                      {new Date(user.expiryDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-6 text-gray-700">{user.duration}</td>
                    <td className="py-3 px-6 text-gray-700">{user.price}</td>
                    <td
                      className={`py-3 px-6 flex items-center gap-2 font-medium ${color}`}
                    >
                      <Clock size={16} /> {user.daysLeft} days
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
