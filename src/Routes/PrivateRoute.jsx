import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-64">
        <ImSpinner9 className="   animate-spin text-[#78ffd6]  " size={50} />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signIn" replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
