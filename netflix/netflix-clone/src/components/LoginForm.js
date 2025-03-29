import React, { useState } from "react";
import { loginUser } from "../api"; // Ensure correct API path
import "./LoginForm.css"; // Import CSS for styling

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages

    try {
      // Send email and password to the login API
      await loginUser({ email, password });
      console.log("Login successful");
      onLoginSuccess(); // Trigger callback function on success
    } catch (error) {
      console.error("Login failed:", error.message);
      const message =
        error.response?.data?.message || "Invalid credentials. Please try again.";
      setErrorMessage(message); // Set error message for the user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="input-field"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="input-field"
        required
      />
      <button type="submit" className="submit-btn">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
