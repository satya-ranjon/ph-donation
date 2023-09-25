import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import AppWrapper from "../layout/AppWrapper";
import Home from "../pages/home/Home";
import Donation from "../pages/Donation/Donation";
import DonationDetails from "../pages/DonationDetails/DonationDetails";
import Statistics from "../pages/Statistics/Statistics";
import { getDonate, getDonates } from "../fetch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => getDonates(),
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/donation-details/:donationID",
        element: <DonationDetails />,
        loader: ({ params }) => getDonate(params.donationID),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

export default router;
