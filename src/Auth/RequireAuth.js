import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

 const RequireAuth = ({ children }) => {
  const { isLogIn } = useAuth();
  const location = useLocation();
  return (
    <div>
      {isLogIn ? (
        <>{children}</>
      ) : (
        <Navigate to={"/login"} state={{ from: location }} />
      )}
    </div>
  );
};
export default RequireAuth;