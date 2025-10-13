import React, { useEffect, useState } from "react";
import { User, Phone, Calendar, Shield, Activity } from "lucide-react";
import { useParams } from "react-router";
import { useAppContext } from "../../Context/Context";
const UserProfile = () => {
  const { id } = useParams();
  const { navigate, axios } = useAppContext();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`/api/profile/${id}`);
        if (data.success) {
          setUser(data.user);
        } else {
          alert("User not found");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        alert("Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="text-blue-500 font-medium text-lg">
          Loading user profile...
        </p>
      </div>
    );

  if (!user)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 text-lg">User not found</p>
      </div>
    );

  return (
    <div className="flex-1 min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        {/* Header */}
        <div className="relative h-40 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-t-2xl flex items-end justify-center">
          <div className="absolute -bottom-16 bg-white rounded-full p-1 shadow-lg">
            <img
              src={`https://ui-avatars.com/api/?name=${user.name.replace(
                /\s/g,
                "+"
              )}&background=0D8ABC&color=fff`}
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-gray-200"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="pt-20 px-6 md:px-10 pb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
            {user.name}
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-6">
            {user.duration}
          </p>

          {/* Basic Info */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm md:text-base mb-8">
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
              <Phone size={16} /> {user.phone}
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
              <User size={16} /> {user.gender}
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
              <Activity size={16} /> {user.age} yrs
            </div>
          </div>

          {/* Membership Info */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 text-left">
            {[
              {
                label: "Join Date",
                value: new Date(user.joinDate).toLocaleDateString(),
                icon: <Calendar size={16} />,
              },
              {
                label: "Expiry Date",
                value: new Date(user.expiryDate).toLocaleDateString(),
                icon: <Calendar size={16} />,
              },
              { label: "Duration", value: user.duration },
              { label: "Price", value: `₹${user.price}` },
              { label: "Status", value: user.status, isStatus: true },
              { label: "Email", value: user.email || "Not Provided" },
              { label: "Address", value: user.address || "Not Provided" },
            ].map((info, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col"
              >
                <h4 className="text-gray-500 text-sm mb-1">{info.label}</h4>
                <p
                  className={`font-medium flex items-center gap-2 ${
                    info.isStatus
                      ? user.status === "Active"
                        ? "text-green-600"
                        : "text-red-500"
                      : "text-gray-800"
                  }`}
                >
                  {info.icon} {info.value}
                </p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-medium shadow-md transition-all"
            >
              Back
            </button>

            <button
              onClick={() => navigate("/seller/?=update", { state: { user } })}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
