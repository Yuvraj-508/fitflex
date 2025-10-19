import React, { useState, useEffect } from "react";
import { useAppContext } from "../../Context/Context";
import toast from "react-hot-toast";
import { useLocation } from "react-router";
const AddUser = () => {
  const { axios, navigate } = useAppContext();
  const location = useLocation();
  const userToEdit = location.state?.user; // user data passed via navigate()

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [membershipType, setMembershipType] = useState("Monthly");
  const [membershipPrice, setMembershipPrice] = useState("");
  const [status, setStatus] = useState("Active"); // default
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditMode = !!userToEdit;

  // Prefill form if editing
  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name || "");
      setEmail(userToEdit.email || "");
      setPhone(userToEdit.phone || "");
      setAge(userToEdit.age || "");
      setGender(userToEdit.gender || "");
      setJoinDate(userToEdit.joinDate?.slice(0, 10) || "");
      setExpiryDate(userToEdit.expiryDate?.slice(0, 10) || "");
      setMembershipType(userToEdit.duration || "Monthly");
      setMembershipPrice(userToEdit.price || "");
      setStatus(userToEdit.status);
    }
  }, [userToEdit]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
   const payload = {
  name,
  ...(email && { email }),
  phone,
  age,
  gender,
  joinDate,
  expiryDate,
  duration: membershipType,
  price: membershipPrice,
  status: status // assuming `status` state already holds "Active", "Paused", or "Expired"
};


      let response;

      if (isEditMode) {
        // 🔁 Update existing user
        response = await axios.put(
          `/api/update-user/${userToEdit._id}`,
          payload
        );
      } else {
        // ➕ Add new user
        response = await axios.post("/api/add-user", payload);
      }

      const { data } = response;
      if (data.success) {
  toast.success(
    isEditMode
      ? "Member updated successfully!"
      : "Member added successfully!"
  );

  // Only for new user: download PDF
  if (!isEditMode && data.invoicePath) {
  const link = document.createElement("a");
  link.href = data.invoicePath;
  link.download = `${name}_invoice.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
}


  // Redirect after download or update
  navigate("/seller/user-list");
}
 else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to save member. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          {isEditMode ? "Edit Member" : "Add New Member"}
        </h2>

        <form onSubmit={onSubmitHandler} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: "Full Name",
                type: "text",
                value: name,
                setValue: setName,
                placeholder: "John Doe",
              },
              {
                label: "Email (optional)",
                type: "email",
                value: email,
                setValue: setEmail,
                placeholder: "john@example.com",
              },
              {
                label: "Phone Number",
                type: "text",
                value: phone,
                setValue: setPhone,
                placeholder: "+91 9876543210",
              },
              {
                label: "Age",
                type: "number",
                value: age,
                setValue: setAge,
                placeholder: "28",
              },
            ].map((field, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(e) => field.setValue(e.target.value)}
                  className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required={field.label !== "Email (optional)"}
                />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-600 border-b border-gray-200 pb-2">
            Membership Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {[
              {
                label: "Join Date",
                type: "date",
                value: joinDate,
                setValue: setJoinDate,
              },
              {
                label: "Expiry Date",
                type: "date",
                value: expiryDate,
                setValue: setExpiryDate,
              },
            ].map((field, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <label className="text-gray-700 font-medium">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  value={field.value}
                  onChange={(e) => field.setValue(e.target.value)}
                  className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">
                Membership Type
              </label>
              <select
                value={membershipType}
                onChange={(e) => setMembershipType(e.target.value)}
                className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Annual</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium">
                Membership Price (₹)
              </label>
              <input
                type="number"
                placeholder="999"
                value={membershipPrice}
                onChange={(e) => setMembershipPrice(e.target.value)}
                className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>

         <div className="flex items-center gap-4 mt-4">
  <select
    value={status}
    onChange={(e) => setStatus(e.target.value)}
    className="border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
  >
    <option value="Active">Active</option>
    <option value="Paused">Paused</option>
    <option value="Expired">Expired</option>
  </select>

  {/* Status Indicator */}
  <p
    className={`font-medium flex items-center justify-center px-3 py-1 rounded-full text-white w-32
      ${status === "Active" ? "bg-blue-500 animate-pulse" : ""}
      ${status === "Paused" ? "bg-yellow-500 animate-pulse" : ""}
      ${status === "Expired" ? "bg-red-500 animate-pulse" : ""}`}
  >
    {status}
  </p>
</div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition disabled:opacity-50"
            >
              {isSubmitting
                ? isEditMode
                  ? "Updating..."
                  : "Adding..."
                : isEditMode
                ? "Update Member"
                : "Add Member"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
