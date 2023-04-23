import { RouterProvider } from "react-router-dom";
import "./styles/general.scss";
import router from "./modules/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
