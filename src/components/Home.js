import { React } from "react";
import { useAuth } from "../context/authContext";

const Home = () => {
  const { user } = useAuth();

  return <div>Home</div>;
};

export default Home;
