import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8070/api/v1/user/login",
        { email, password, confirmPassword },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      const userRole = response.data.user.role; // Assuming the response contains the user's role
      toast.success(response.data.message);

      if (userRole === "Admin") {
        navigateTo("/admindashboard"); // Navigate to admin dashboard
      } else {
        navigateTo("/"); // Navigate to default user dashboard
      }

      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="Login-Nav">
      <button className="first-home" onClick={() => navigateTo("/")}> Home </button>
      <button className="first-home2" onClick={() => navigateTo("/signup")}> Sign Up </button>
      </div>
    <section className="container form-component">
      <h1 className="form-title">WELCOME TO MOKSHA RESTAURANT</h1>
      <p></p>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
    </>
  );
};

export default Login;
