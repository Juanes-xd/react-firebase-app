import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "./components";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/authContext";

const App = () => {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                {" "}
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
