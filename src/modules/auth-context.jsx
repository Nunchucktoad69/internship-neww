import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import firebase from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext({});

AuthProvider.propTypes = { children: PropTypes.node };

export default function AuthProvider(props) {
  /**
   * @type {[firebase.User]}
   */
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = firebase.auth();
    auth.currentUser;
    return onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}
