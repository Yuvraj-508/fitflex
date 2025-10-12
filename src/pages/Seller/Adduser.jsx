import React, { useState } from "react";
import { useAppContext } from "../../Context/Context";
import toast from "react-hot-toast";
const AddUser = () => {
  const { axios } = useAppContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [membershipType, setMembershipType] = useState("Monthly");
  const [membershipPrice, setMembershipPrice] = useState("");
  const [status, setStatus] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare payload
      const payload = {
        name,
        ...(email && { email }), // only include if email is provided
        phone,
        age,
        gender,
        joinDate,
        expiryDate,
        duration: membershipType,
        price: membershipPrice,
        status: status ? "Active" : "Inactive",
      };

      // Send POST request to backend

     const { data } = await axios.post("/api/add-user", payload, {
      // responseType: "blob", // important if sending PDF as blob
    });

    if (data.success) {
      toast.success("User added successfully!")

      
      // Download invoice
      // const link = document.createElement("a");
      // link.href = data.invoicePath; // or URL
      // link.download = `${name}_invoice.pdf`;
      // link.click();
    
        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setAge("");
        setGender("");
        setJoinDate("");
        setExpiryDate("");
        setMembershipType("Monthly");
        setMembershipPrice("");
        setStatus(true);
      } else {
         toast.error(data.message || "Failed to add user. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add user. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Add New Member
        </h2>

        {/* Basic Info */}
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
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Membership Details */}
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
                required
              >
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Annual">Annual</option>
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

          {/* Status */}
          <div className="flex items-center gap-3 mt-6">
            <label className="flex items-center cursor-pointer gap-2">
              <input
                type="checkbox"
                checked={status}
                onChange={() => setStatus(!status)}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-300 rounded-full peer-checked:bg-blue-500 relative transition-all">
                <span
                  className={`absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out ${
                    status ? "translate-x-7" : "translate-x-0"
                  }`}
                ></span>
              </div>
              <span className="text-gray-700 font-medium">
                {status ? "Active" : "Inactive"}
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding..." : "Add Member"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
