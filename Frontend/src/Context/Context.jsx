import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
axios.defaults.withCredentials = true; // Ensure cookies are sent with requests
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isSeller, setIsSeller] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("/api/user-list");
        if (data.success) {
          setUsers(data.userList);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
      useEffect(() => {
    fetchUsers();
  }, []);

  const value = { isSeller, setIsSeller, axios, users, setUsers, navigate,fetchUsers };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
