import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <>
      <Link to="/dashboard" className="nav-links">
        Dashboard
      </Link>
      <Link to="/orderslist" className="nav-links">
        Orders List
      </Link>
      <Link to="/ordersdetail" className="nav-links">
        Orders Detail
      </Link>
    </>
  );
};

export default AdminNav;
