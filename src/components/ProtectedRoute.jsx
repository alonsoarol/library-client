import { useLoginStore } from "../context/loginStore";
import { Navigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export const ProtectedRoute = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const connectedUser = useLoginStore((state) => state.connectedUser);

  if (!connectedUser) {
    enqueueSnackbar("you must log in", {
      variant: "error",
    });
    return <Navigate to="/" />;
  }
  if (children.type.name === "Customers") {
    if (!connectedUser.permissions.admin) {
      enqueueSnackbar("you do not have admin privilege", {
        variant: "error",
      });
      return <Navigate to="/" />;
    }
  }
  return children;
};
