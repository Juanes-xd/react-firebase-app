import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/authContext";
import Pago from "./components/Checkout/Pago";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/Pago" element={<Pago />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
