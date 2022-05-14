import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import app from "../../../Firebase/firebase.init";

function RequireAuth({ children }) {
  const [users, loading] = useAuthState(app);
  const location = useLocation();
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!users) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;
