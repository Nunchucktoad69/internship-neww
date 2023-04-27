import { createBrowserRouter } from "react-router-dom";
import Home from "src/pages";
import AboutRoute from "src/pages/about";
import AuthRoute from "src/pages/auth";
import BMIRoute from "src/pages/bmi";
import ContactRoute from "src/pages/contact";
import ProductRoute from "src/pages/products";
import RoutinesRoute from "src/pages/routines";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <AuthRoute />,
  },
  {
    path: "/routines",
    element: <RoutinesRoute />,
  },
  {
    path: "/products",
    element: <ProductRoute />,
  },
  {
    path: "/contact",
    element: <ContactRoute />,
  },
  {
    path: "/about",
    element: <AboutRoute />,
  },
  {
    path: "/bmi",
    element: <BMIRoute />,
  },
]);

export default router;
