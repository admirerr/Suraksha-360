import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TransRR() {
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
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-200 h-screen w-64 flex flex-col">
        <div className="py-4 px-6">
          <h2 className="text-lg font-semibold mb-4">Transport Portal</h2>
          <ul>
            <li className="mb-2">
              <a href="/transport/landingPageTrans" className="text-gray-800 hover:text-gray-600 font-semibold">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/data/transPR" className="text-gray-800 hover:text-gray-600 font-semibold">
                Pending Request
              </a>
            </li>
            <li className="mb-2">
              <a href="/data/transUA" className="text-gray-800 hover:text-gray-600 font-semibold">
                Update Availability
              </a>
            </li>
            
          </ul>
          <button className="bg-red-500 text-white font-semibold py-2 px-4 mt-4 rounded hover:bg-red-600" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full bg-gray-100">
    
        {/* Main content area */}
        
        <div className="w-full h-screen flex justify-center items-center">
    <div className="text-center">
    
      <h1 className="text-4xl  text-gray-800 mb-5">We want vehicles to carry 5,000 people from Vizag to Pune. Is everything good?</h1>
      <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 mr-4">
        Yes
      </button>
      <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600">
        No
      </button>
    </div>
  </div>

      </div>
    </div>
  );
}

export default TransRR;
