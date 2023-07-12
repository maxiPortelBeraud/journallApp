import { Navigate } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";

export const journalRoutes = [
  {
    path: "/",
    element: <JournalPage />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
];
