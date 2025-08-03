import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { useState } from "react";
import { useGeneralContext } from "./GeneralContext";

const Dashboard = () => {
  const backendURL = process.env.REACT_APP_BACKEND_URL;
  const frontendURL = process.env.REACT_APP_FRONTEND_URL;
  // console.log(backendURL, frontendURL);
  const [loading, setLoading] = useState(true);
  const { setUserData, showSideBar } = useGeneralContext();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const tokenQuery = params.get("token");
        if (tokenQuery) {
          localStorage.setItem("token", tokenQuery);
          // Optionally clean up the URL
          window.history.replaceState({}, "", "/dashboard");
        }

        const token = localStorage.getItem("token") || tokenQuery;
        console.log(token);
        console.log(localStorage.getItem("token"));
        const res = await axios.get(`${backendURL}/verify`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.success) {
          const id = res.data.user.id;
          const data = await axios.get(`${backendURL}/user/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUserData(data.data.user);
        } else {
          window.location.href = frontendURL; // back to frontend
          console.log("token is not available");
        }
      } catch (err) {
        console.log("Token invalid or not found");
        window.location.href = frontendURL; // back to frontend
      } finally {
        setLoading(false);
      }
    };

    checkLogin();
  }, [backendURL, frontendURL, setUserData]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      <WatchList />
      <div className={`content ${showSideBar ? "show-content" : ""}`}>
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
