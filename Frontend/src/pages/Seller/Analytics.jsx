import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useAppContext } from "../../Context/Context";
  
const COLORS = ["#10B981", "#EF4444"]; // Active: green, Expired: red
     
const Analytics = () => {
  const { users } = useAppContext();

  const [stats, setStats] = useState({
    weeklyNew: 0,
    monthlyNew: 0,
    expiredNotRenewed: 0,
    revenue: 0,
  });

  const [month, setMonth] = useState(new Date().getMonth()); // current month
  const [year, setYear] = useState(new Date().getFullYear()); // current year

  // Compute stats based on selected month/year
  const computeStats = (users, month, year) => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday

    let weeklyNew = 0,
      monthlyNew = 0,
      expiredNotRenewed = 0,
      revenue = 0;

    users.forEach((user) => {
      const join = new Date(user.joinDate);
      const expiry = new Date(user.expiryDate);

      // Filter by selected month/year
      if (join.getMonth() === month && join.getFullYear() === year) {
        monthlyNew++;
        if (join >= startOfWeek) weeklyNew++;
      }

      if (expiry < today && user.status === "Expired") expiredNotRenewed++;

      // Revenue from users in this month
      if (join.getMonth() === month && join.getFullYear() === year)
        revenue += Number(user.price);
    });

    setStats({ weeklyNew, monthlyNew, expiredNotRenewed, revenue });
  };

  // Recompute whenever month/year changes or users change
  useEffect(() => {
    computeStats(users, month, year);
  }, [users, month, year]);

  // Pie chart data
  const pieData = [
    {
      name: "Active",
      value: users.filter((u) => u.status === "Active").length,
      color: "#10B981",
    },
    {
      name: "Expired",
      value: users.filter((u) => u.status === "Expired").length,
      color: "#EF4444",
    },
  ];

  // Bar chart data
  const barData = [
    { name: "New This Week", users: stats.weeklyNew },
    { name: "New This Month", users: stats.monthlyNew },
    { name: "Expired Not Renewed", users: stats.expiredNotRenewed },
  ];

  return (
    <div className="flex-1 min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Analytics Dashboard
        </h1>

        {/* Month/Year Selection */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div>
            <label className="text-gray-600 mr-2">Select Month:</label>
            <select
              className="border rounded-lg p-2"
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
            >
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((m, i) => (
                <option key={i} value={i}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-gray-600 mr-2">Select Year:</label>
            <select
              className="border rounded-lg p-2"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
            >
              {[...Array(5)].map((_, i) => {
                const y = new Date().getFullYear() - i;
                return (
                  <option key={y} value={y}>
                    {y}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-purple-200 transition-all">
            <h3 className="text-gray-500 text-sm mb-1">New Users This Week</h3>
            <p className="text-3xl font-bold text-gray-800">{stats.weeklyNew}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-yellow-200 transition-all">
            <h3 className="text-gray-500 text-sm mb-1">New Users This Month</h3>
            <p className="text-3xl font-bold text-yellow-500">{stats.monthlyNew}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-red-200 transition-all">
            <h3 className="text-gray-500 text-sm mb-1">Expired Not Renewed</h3>
            <p className="text-3xl font-bold text-red-500">{stats.expiredNotRenewed}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-green-200 transition-all">
            <h3 className="text-gray-500 text-sm mb-1">Revenue (₹)</h3>
            <p className="text-3xl font-bold text-green-500">{stats.revenue}</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
            <h3 className="text-gray-700 font-semibold mb-4 text-center">
              Active vs Expired Users
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
            <h3 className="text-gray-700 font-semibold mb-4 text-center">
              User Insights
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={barData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
