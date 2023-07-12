import { Navigate, Outlet } from "react-router-dom";
import { useCheckAuth } from "../hooks";

export const JournalRouter = () => {
  const { status } = useCheckAuth();
  if (status === "notAuthenticated") return <Navigate to="/auth/login" />;
  return <Outlet />;
};
