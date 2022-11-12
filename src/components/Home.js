import { React } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Home = () => {
  const { user, logout, loading } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <h1>Welcome {user.email}</h1>
      <button onClick={handleLogout}>Cerrar sesion</button>
    </div>
  );
};

export default Home;
