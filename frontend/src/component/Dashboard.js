// Dashboard.js
import { React, useState, useEffect } from "react";
import Navbar from "./Navbar";
import DevDashboard from "./DevDashboard";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import axios from "axios";

function Dashboard() {
  const [skills, setSkills] = useState([]);
  const [users, setUsers] = useState([]);
  const location = useLocation();
  //let data = location.state.data;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/DevDashboard");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      {users.length > 0 && users[0].userMode === "developer" ? (
        <DevDashboard />
      ) : (
        <div className="bg-gray-50 px-8 h-[90vh] text-5xl font-bold flex justify-center items-center">
          Signin First!
        </div>
      )}
      <Footer />
    </>
  );
}

export default Dashboard;
