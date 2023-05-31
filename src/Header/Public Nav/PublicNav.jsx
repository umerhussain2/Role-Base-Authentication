import { Link } from "react-router-dom";

const PublicNav = () => {
  return (
    <>
      <Link to="/checkout" className="nav-links">
        Checkout
      </Link>
    </>
  );
};

export default PublicNav;
