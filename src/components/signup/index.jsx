import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "src/modules/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert(`Verification sent to your account!!`);
      navigate("/Auth");
    } catch (e) {
      alert(e);
    }
  };

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert(`Successfully Signed in with Google Account`);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="create">
      <h2>SignUp Account</h2>
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
        <button onClick={signup}>Signup</button> <br />
        <br />
        <br />
        -------- OR -------- <br />
        <br />
        <div className="signin">
          <p onClick={googleSignIn}>Signin with google</p>
        </div>
      </form>
    </div>
  );
}
