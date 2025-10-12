import React, { useEffect, useState } from "react";
import { useAppContext } from "../../Context/Context.jsx";
import { useNavigate } from "react-router";

function SellerLogin() {
  const navigate = useNavigate();
  const { isSeller, setIsSeller } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller, navigate]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsSeller(true);
  };

  return (
    <div className="flex">
      {/* Sidebar placeholder for alignment */}

      {/* Right Content */}
      <div className="flex-1 min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <form
          onSubmit={onSubmitHandler}
          className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-300"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Seller Login
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button className="mt-4 w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SellerLogin;
