import React from "react";
import Home from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Program from "./Components/Program";
import Choose from "./Components/Choose";
import Transformation from "./Components/Transformation";
import PricingPlan from "./Components/Pricing";
import TestimonialSection from "./Components/testiminol";
import { Contact } from "lucide-react";
import ContactForm from "./Components/Contact";
import FitnessFooter from "./Components/Footer";
import { Route, Routes, useLocation } from "react-router";
import SellerLayout from "./pages/Seller/SellerLayout";
import Adduser from "./pages/Seller/Adduser";
import UserList from "./pages/Seller/UserList";
import { useAppContext } from "./Context/Context.jsx";
import SellerLogin from "./Components/Seller/SellerLogin";
import UserProfile from "./pages/Seller/UserProfile.jsx";
import SellerDashboard from "./pages/Seller/Dashboard.jsx";
import Analytics from "./pages/Seller/Analytics.jsx";
import { Toaster } from "react-hot-toast";
import Loader from "./Components/Loader.jsx";
function App() {
  const isSellerPath = useLocation().pathname.includes("/seller");
  const { isSeller,loading } = useAppContext();

  return (
    <div
      className={`${!isSellerPath ? "bg-black h-full overflow-hidden" : " "}`}
    >
      {loading && <Loader message="Fetching users, please wait..." />}
      {!isSellerPath && <Navbar />}
      <Toaster/>

      {!isSellerPath ? (
        // Only homepage content
        <div>
          <Hero />
          <Program />
          <Transformation />
          <Choose />
          <PricingPlan />
          <TestimonialSection />
          <ContactForm />
        </div>
      ) : (
        // Seller routes
        <Routes>
          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            <Route index element={<Adduser />} />
            <Route path="user-list" element={<UserList />} />

            {/* Add :id for dynamic user */}
            <Route path="user-profile/:id" element={<UserProfile />} />

            <Route path="dashboard" element={<SellerDashboard />} />
            <Route path="analytics" element={<Analytics/>}/>
          </Route>
        </Routes>
      )}

      {!isSellerPath && <FitnessFooter />}
    </div>
  );
}
export default App;
