import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Store mock user in localStorage
    localStorage.setItem("user", JSON.stringify({ email, password }));
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen text-left w-96">
      <form onSubmit={handleSignup} className="p-8 w-96">
        <h2 className="text-2xl font-bold mb-4">Welcome Login System</h2>
        <p className="text-l">
          Your gateway to seamless transactions and easy payments.
        </p>
        <label>Email</label>
        <input
          type="email"
          placeholder="mahadev@lemonpay.tech"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 mb-4 border border-gray-300 bg-customPurple  text-black rounded"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Min 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 mb-4 border bg-white text-black rounded"
        />
        <button
          type="submit"
          className="w-full bg-white text-black font-bold p-2 rounded"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Signup;
