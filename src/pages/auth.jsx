import "src/styles/auth.scss";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "src/modules/firebase";
import { useEffect } from "react";

const { AuthUI } = firebaseui.auth;

export default function AuthRoute() {
  useEffect(() => {
    const auth = firebase.auth();
    const ui = AuthUI.getInstance() || new AuthUI(auth);

    ui.start(".auth-container", {
      signInFlow: "popup",
      signInSuccessUrl: "/",
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
    });
  });

  return <div className="auth-container"></div>;
}
