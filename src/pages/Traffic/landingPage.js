import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [username, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .get("http://localhost:4000/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        setName(res.data.username);
        localStorage.setItem("username", res.data.username);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold">
          Welcome {username ? username : "User"} to Landing Page
        </h1>
        <button
          className="w-full flex justify-center items-center bg-red-300 py-3 rounded-lg mt-8"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
