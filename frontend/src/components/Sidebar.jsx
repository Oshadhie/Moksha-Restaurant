import React, { useState } from "react";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAddModerator } from "react-icons/md";
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
    <>
      <nav className= "sidebar">

        <div className="links">
          <TiHome onClick={gotoHomePage} />
          <MdAddModerator onClick={gotoAddNewAdmin} />
          <RiLogoutBoxFill onClick={handleLogout} />
        </div>
      </nav>
      
    </>
  );
};

export default Sidebar;
