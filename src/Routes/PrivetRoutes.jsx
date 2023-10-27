/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";


const PrivetRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (user?.email) {
        return children;
    }
    if (loading) {
        return <p className="w-full h-[50vh] flex items-center justify-center"><RotatingLines
            strokeColor="purple"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        /></p>
    }
    return <Navigate to='/login' replace ></Navigate>
};

export default PrivetRoutes;