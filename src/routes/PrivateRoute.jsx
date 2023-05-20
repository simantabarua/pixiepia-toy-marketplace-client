import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

import { useContext } from "react";
import Loading from "../components/common/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading/>;
  }
  if (user) {
    return children;
  } 
    return <Navigate to="/login" replace={true} state={{ from: location }} />;
  
};

export default PrivateRoute;
