import React, { useState } from "react";


import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:8070/api/v1/user/adminlogout", {
        withCredentials: true,
      });
      toast.success(response.data.message);

      navigateTo("/"); // Redirect to home page after logout
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const gotoHomePage = () => {
    navigateTo("/");
    setShow(false); // Close sidebar after navigation
  };

  const gotoAddNewAdmin = () => {
    navigateTo("/admin/addnew");
    setShow(false); // Close sidebar after navigation
  };

  return (
    <div className="S_navigation">
            <ul>
                <li>
                    <Link to ="#">
                        <span className="S_title ">page</span>
                    </Link>
                </li>

                <li>
                    <Link to="#">
                        <span className="S_title">add admin</span>
                    </Link>
                </li>

                <li>
                    <Link to='#'>
                        <span className="S_title "></span>
                    </Link >
                </li>

                <li>
                    <Link to='#'>
                        <span className="S_title"></span>
                    </Link>
                </li>

            </ul>
        </div>
  );
};

export default Sidebar;
