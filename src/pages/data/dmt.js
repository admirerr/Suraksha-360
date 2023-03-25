import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DMT() {
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
    navigate("/Home");
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-200 h-screen w-64 flex flex-col">
        <div className="py-4 px-6">
          <h2 className="text-lg font-semibold mb-4">Menu</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-800 hover:text-gray-600 font-semibold">
                Hospitals
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-800 hover:text-gray-600 font-semibold">
                Transportation
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-800 hover:text-gray-600 font-semibold">
                District Magistrates
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-800 hover:text-gray-600 font-semibold">
                Traffic Officials
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-800 hover:text-gray-600 font-semibold">
                Option 5
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
        {/* Main content area */}
<div className="w-full h-screen flex justify-center items-center">
  <table className="table-auto">
    <thead>
      <tr>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Age</th>
        <th className="px-4 py-2">City</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">John Doe</td>
        <td className="border px-4 py-2">28</td>
        <td className="border px-4 py-2">New York</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Jane Smith</td>
        <td className="border px-4 py-2">35</td>
        <td className="border px-4 py-2">Los Angeles</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Bob Johnson</td>
        <td className="border px-4 py-2">42</td>
        <td className="border px-4 py-2">Chicago</td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
}

export default DMT;
