import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>loading</div>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" replace={true} state={{ from: location }} />;
  }
};

export default PrivateRoute;
