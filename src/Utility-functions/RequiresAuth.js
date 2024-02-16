import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authentication-context";

export const RequiresAuth = ({ children }) => {

    const { authState } = useAuth();
    const location = useLocation();

    return authState.token ? children : <Navigate to="/login" state={{ from: location }} replace />;
}