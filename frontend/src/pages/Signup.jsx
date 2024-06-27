import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const SignupUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigateTo = useNavigate();

    const handleSignUpUser = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address");
            return;
        }
        try {
            await axios.post(
                "http://localhost:8070/api/v1/user/userRegister",
                { name, email, password },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                }
            ).then((res) => {
                toast.success(res.data.message);
                navigateTo("/login");
                setName("");
                setEmail("");
                setPassword("");
            });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    // Handle key down event to restrict input to letters only
    const handleNameKeyDown = (event) => {
        const key = event.key;
        const isLetter = /^[a-zA-Z\s]*$/.test(key);
        if (!isLetter && key !== 'Backspace' && key !== 'Delete' && key !== 'ArrowLeft' && key !== 'ArrowRight') {
            event.preventDefault();
        }
    };

    // Email validation function
    const validateEmail = (email) => {
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        return emailPattern.test(email);
    };

    return (
        <section className="addpage">
            <section className="container form-component">
                <h1 className="form-title">Sign Up</h1>
                <form onSubmit={handleSignUpUser}>
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyPress={handleNameKeyDown}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div style={{ justifyContent: "center", alignItems: "center" }}>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </section>
        </section>
    );
};

export default SignupUser;
