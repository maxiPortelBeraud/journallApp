import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthRouter, JournalRouter } from "./";

import { authRoutes } from "../auth/routes/authRoutes";
import { journalRoutes } from "../journal/routes/journalRoutes";

import { useCheckAuth } from "../hooks";
import { SpinnerAuth } from "../ui";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthRouter />,
    children: authRoutes,
  },
  {
    path: "/",
    element: <JournalRouter />,
    children: journalRoutes,
  },
]);

export const AppRouter = () => {
  const { status } = useCheckAuth();
  if (status === "checking") return <SpinnerAuth />;
  return <RouterProvider router={router} />;
};
