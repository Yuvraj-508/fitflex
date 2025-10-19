import React from "react";
import Home from "./Components/Hero.jsx";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Program from "./Components/Program.jsx";
import Choose from "./Components/Choose.jsx";
import Transformation from "./Components/Transformation.jsx";
import PricingPlan from "./Components/Pricing.jsx";
import TestimonialSection from "./Components/testiminol.jsx";
import { Contact } from "lucide-react";
import ContactForm from "./Components/Contact.jsx";
import FitnessFooter from "./Components/Footer.jsx";
import { Route, Routes, useLocation } from "react-router";
import SellerLayout from "./pages/Seller/SellerLayout.jsx";
import Adduser from "./pages/Seller/Adduser.jsx";
import UserList from "./pages/Seller/UserList.jsx";
import { useAppContext } from "./Context/Context.jsx";
import SellerLogin from "./Components/Seller/SellerLogin.jsx";
import UserProfile from "./pages/Seller/UserProfile.jsx";
import SellerDashboard from "./pages/Seller/Dashboard.jsx";
import Analytics from "./pages/Seller/Analytics.jsx";
import { Toaster } from "react-hot-toast";
import Loader from "./Components/Loader.jsx";
function App() {
  const isSellerPath = useLocation().pathname.includes("/seller");
  const { isSeller,loading } = useAppContext();

  return (
   <div className={`${!isSellerPath ? "bg-black min-h-screen" : ""}`}>
  {loading && <Loader message="Fetching users, please wait..." />}
  <Toaster />

  {!isSellerPath && <Navbar />}

  {!isSellerPath ? (
    // 🌟 Homepage content wrapped in <main> for blur effect
    <main className="transition-all duration-500 ease-in-out">
      <Hero />
      <Program />
      <Transformation />
      <Choose />
      <PricingPlan />
      <TestimonialSection />
      <ContactForm />
    </main>
  ) : (
    // 🧑‍💻 Seller (admin) routes
    <Routes>
      <Route
        path="/seller"
        element={isSeller ? <SellerLayout /> : <SellerLogin />}
      >
        <Route index element={<Adduser />} />
        <Route path="user-list" element={<UserList />} />
        <Route path="user-profile/:id" element={<UserProfile />} />
        <Route path="dashboard" element={<SellerDashboard />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
    </Routes>
  )}

  {!isSellerPath && <FitnessFooter />}
</div>

  );
}
export default App;
