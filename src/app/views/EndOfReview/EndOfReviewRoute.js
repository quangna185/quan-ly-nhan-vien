import Loadable from "app/components/Loadable";
import { lazy } from "react";

const EndOfReview = Loadable(lazy(() => import("./EndOfReview")));

const EndOfReviewRoutes = [{ path: "/release", element: <EndOfReview /> }];

export default EndOfReviewRoutes;
