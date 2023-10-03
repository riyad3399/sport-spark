import { BallTriangle } from "react-loader-spinner";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

  const loaderContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", 
  };

  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div style={loaderContainerStyle}>
        <BallTriangle
          height={180}
          width={180}
          radius={5}
          color="#0000FF"
          ariaLabel="ball-triangle-loading"
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
