import { React } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Home = () => {
  const { user, logout, loading } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Welcome {user.email || user.displayName}</h1>
      <button onClick={handleLogout}>Cerrar sesion</button>
    </div>
  );
};

export default Home;
