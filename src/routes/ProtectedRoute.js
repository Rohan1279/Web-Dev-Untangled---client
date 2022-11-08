import React, { useContext } from "react";
import { Authcontext } from "../contexts/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  if (loading) {
    return <h1 className="text-5xl">Loading...</h1>;
  }
  if (user) {
    return children;
  }
};

export default ProtectedRoute;
