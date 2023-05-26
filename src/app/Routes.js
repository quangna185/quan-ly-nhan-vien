import Layout from "./components/Layout/Layout";

import NotFound from "./components/NotFound";
import AddNewEmployeeRoutes from "./views/AddNewEmployee/AddNewEmployeeRoute";
import ManageEmployeeRoutes from "./views/ManagerEmployee/ManagerEmployeeRoutes";
import EndOfReviewRoutes from "./views/EndOfReview/EndOfReviewRoute";
import ApprovedRoutes from "./views/Approved/ApprovedRoutes";
import ApprovalRoutes from "./views/Approval/ApprovalRoutes";
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      ...AddNewEmployeeRoutes,
      ...ApprovalRoutes,
      ...ApprovedRoutes,
      ...ManageEmployeeRoutes,
      ...EndOfReviewRoutes,
    ],
  },

  { path: "*", element: <NotFound /> },
];

export default routes;
