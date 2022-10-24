import { useLoginStore } from "../context/loginStore";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const connectedUser = useLoginStore((state) => state.connectedUser);

  if (connectedUser) {
    return children;
  }
  alert("debes loguear");
  return <Navigate to="/" />;
};
