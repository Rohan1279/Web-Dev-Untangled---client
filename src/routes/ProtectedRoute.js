import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../contexts/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center space-x-2 my-10">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white-400"></div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default ProtectedRoute;
