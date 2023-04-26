import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "src/modules/firebase";
import AuthProvider from "./modules/auth-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
