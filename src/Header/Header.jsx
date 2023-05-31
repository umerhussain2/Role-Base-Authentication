import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Context";
import AdminNav from "./Admin Nav/AdminNav";
import PublicNav from "./Public Nav/PublicNav";

const Header = () => {
  const auth = useAuth();
  return (
    <>
      <Link to="/" className="nav-links">
        Home
      </Link>
      <Link to="/productdetails" className="nav-links">
        Product Details
      </Link>

      {auth.user === "Admin" && <AdminNav />}
      {auth.user === "Public-User" && <PublicNav />}
      {!auth.user && (
        <Link to="/login" className="nav-links">
          Login
        </Link>
      )}
      {auth.user && (
        <Link to="/profile" className="nav-links">
          Profile
        </Link>
      )}
    </>
  );
};

export default Header;
