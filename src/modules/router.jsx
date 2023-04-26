import { createBrowserRouter } from "react-router-dom";
import Home from "src/pages";
import Authentication from "src/pages/auth";
import ContactRoute from "src/pages/contact";
import ProductRoute from "src/pages/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Authentication />,
  },
  {
    path: "/products",
    element: <ProductRoute />,
  },
  {
    path: "/contact",
    element: <ContactRoute />,
  },
]);

export default router;
