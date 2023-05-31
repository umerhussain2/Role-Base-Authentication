import React, { useState } from "react";
import { useAuth } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "Admin") {
      auth.login(user);
      navigate("/checkout", { replace: true });
    } else if (user === "Public-User") {
      auth.login(user);
      navigate("/", { replace: true });
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <div>
        <label htmlFor="admin">Admin</label>
        <input
          type="radio"
          name="role"
          id="admin"
          value="Admin"
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        <label htmlFor="public">Public</label>
        <input
          type="radio"
          name="role"
          value="Public-User"
          id="public"
          onChange={(e) => setUser(e.target.value)}
        />
        <button onClick={() => handleLogin()}>Login</button>
      </div>
    </>
  );
};

export default Login;
