import Login from "src/components/login";
import Signup from "src/components/signup";
import { useState } from "react";
import "src/styles/auth.scss";

export default function Authentication() {
  const [signIn, setSignin] = useState(true);

  const signup = () => {
    setSignin(false);
    console.log(signIn);
  };

  const login = () => {
    setSignin(true);
    console.log(signIn);
  };

  return (
    <div className="Auth">
      <div className="content">{signIn ? <Login /> : <Signup />}</div>
      <center>
        <div className="add">
          {signIn ? (
            <div className="signup">
              <p>
                Dont have an account??
                <span onClick={signup} style={{ color: "blue" }}>
                  Signup
                </span>
              </p>
            </div>
          ) : (
            <div className="signup">
              <p>
                Already have an account??
                <span onClick={login} style={{ color: "blue" }}>
                  Login
                </span>
              </p>
            </div>
          )}
        </div>
      </center>
    </div>
  );
}
