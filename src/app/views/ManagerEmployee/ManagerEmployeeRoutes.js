import Loadable from "app/components/Loadable";
import { lazy } from "react";

const ManagerEmployee = Loadable(lazy(() => import("./ManagerEmployee")));

const ManagerEmployeeRoutes = [
  { path: "/manage_employee", element: <ManagerEmployee /> },
];

export default ManagerEmployeeRoutes;
