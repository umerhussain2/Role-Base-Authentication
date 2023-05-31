import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/", { replace: true });
  };
  return (
    <>
      <h1>Profile</h1>
      <h3>{auth.user}</h3>
      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
};

export default Profile;
