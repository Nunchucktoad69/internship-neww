import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "src/modules/firebase";
import { signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert(`Successfully Signed in with Google Account`);
      setIsLoggedIn(true);
      console.log(isLoggedIn);
      navigate(`/`);
    } catch (e) {
      console.error(e);
    }
  };

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  const sendPasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div>
      <div className="create">
        <h2>Login Account</h2>
        <form>
          <label>Email :</label>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password :</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />{" "}
          <br />
          <button onClick={login}>Login</button>
          <p className="or">-------- OR -------- </p>
          <div className="signin">
            <p onClick={googleSignIn}>Signin with google</p>
          </div>
          <center>
            <Link onClick={sendPasswordReset}>Forgot password??</Link>
          </center>
        </form>
      </div>
    </div>
  );
}
