import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { StopIcon } from "@heroicons/react/24/outline";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Store mock user in localStorage
    localStorage.setItem("user", JSON.stringify({ email, password }));
    setEmail("");
    setPassword("");

    const taskManagementSection = document.getElementById("task-management");
    if (taskManagementSection) {
      taskManagementSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen text-left w-96">
      <form onSubmit={handleSignup} className="p-8 w-96">
        <h2 className="text-3xl mb-4">Welcome Login System</h2>
        <p className="text-l mb-4">
          Your gateway to seamless <br></br>transactions and easy payments.
        </p>
        <div className="mb-2">
          <label>Email</label>
        </div>

        <input
          type="email"
          placeholder="mahadev@lemonpay.tech"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 mb-4 border border-gray-300 bg-customPurple  text-black rounded"
        />
        <div className="mb-2">
          <label>Password</label>
        </div>

        <input
          type="password"
          placeholder="Min 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 mb-2 border bg-white text-black rounded"
        />
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <div>
              <StopIcon class="h-6 w-6 text-white" />
            </div>
            <div>
              {" "}
              <p>Remember me</p>
            </div>
          </div>
          <div>
            <p>Forget Password?</p>
          </div>
        </div>
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
