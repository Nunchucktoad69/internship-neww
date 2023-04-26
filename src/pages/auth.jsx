import "src/styles/auth.scss";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "src/modules/firebase";

export default function Authentication() {
  return (
    <div className="auth-container">
      <StyledFirebaseAuth
        firebaseAuth={firebase.auth()}
        uiConfig={{
          signInFlow: "popup",
          signInSuccessUrl: "/",
          signInOptions: [
            {
              provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
              requireDisplayName: false,
            },
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          ],
        }}
      />
    </div>
  );
}
