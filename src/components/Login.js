import { React, useState } from "react";

const Login = () => {
  const [user, userState] = useState({
    email: "",
    password: "",
  });

  return (
    <form>
      <input type="email" name="email" id="email" />
      <input type="password" name="password" id="password" />
    </form>
  );
};

export default Login;
