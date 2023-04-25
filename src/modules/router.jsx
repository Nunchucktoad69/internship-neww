import { createBrowserRouter } from "react-router-dom";
import Home from "src/pages";
import ProductRoute from "src/pages/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <ProductRoute />,
  },
]);

export default router;
