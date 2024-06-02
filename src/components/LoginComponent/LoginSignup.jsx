import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React from "react";
import { FaLock, FaRegEnvelope, FaUser } from "react-icons/fa6";
import { auth } from "../../firebase/config";
import "./LoginSignup.css";

function LoginSignup() {
  const [active, setActive] = React.useState("");
  const [registerEmail, setRegisterEmail] = React.useState("");
  const [loginEmail, setLoginEmail] = React.useState("");
  const [registerPassword, setRegisterPassword] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");
  const [showPasword, setShowPasword] = React.useState(false);
  const registerLink = () => {
    setActive("active");
  };

  const loginLink = () => {
    setActive("");
  };

  const toggleShowPassword = () => {
    setShowPasword(!showPasword);
  };

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      throw error;
    }
  };

  const handleRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div
      className={`wrapper flex h-[480px] w-[420px] p-6 my-5 ${active} items-center justify-center`}
    >
      <div className="form login">
        <form>
          <h1>Login</h1>
          <div className="input-box text-gray-700">
            <input
              type="text"
              name="email"
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="E-mail"
              required
            />
            <FaRegEnvelope className="absolute right-5 top-5 translate-y-1/2 font-light" />
            <input
              type={showPasword ? "text" : "password"}
              name="Password"
              placeholder="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
            <FaLock className="absolute right-5 bottom-24 translate-y-1/2 font-light" />
            <label htmlFor="toggle" className="text-center">
              <input
                type="checkbox"
                id="toogle"
                onClick={toggleShowPassword}
                className="boder-none outline-none rounded-lg bg-slate-100 hover:bg-slate-200"
              />
              Show Password
            </label>
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" name="remember" /> Remember Me
            </label>
            <a href="">Forget Password?</a>
          </div>

          <button
            onClick={handleLogin()}
            className="bg-slate-400 hover:bg-slate-500"
          >
            Login{" "}
          </button>

          <div className="register-link">
            <p>
              Don't have an account ?{" "}
              <a onClick={registerLink} className="cursor-pointer">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="form register">
        <form>
          <h1>Registration</h1>
          <div className="input-box">
            <input
              type="text"
              name="Username"
              placeholder="Username"
              required
            />
            <FaUser className="relative left-5 bottom-14 translate-y-1/2 font-light" />
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setRegisterEmail(e.target.value)}
              required
            />
            <FaRegEnvelope className="relative left-5 bottom-14 translate-y-1/2 font-light" />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              onChange={(e) => setRegisterPassword(e.target.value)}
              required
            />
            <FaLock className="relative left-5 bottom-14 translate-y-1/2 font-light" />
            <label htmlFor="toggle" className="text-center">
              <input
                type="checkbox"
                id="toogle"
                onClick={toggleShowPassword}
                className="boder-none outline-none rounded-lg bg-slate-100 hover:bg-slate-200"
              />
              Show Password
            </label>
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" name="remember" id="" /> I agree to the
              terms & conditions.
            </label>
            <a href=""></a>
          </div>

          <button
            onClick={handleRegister()}
            className=" bg-slate-400 hover:bg-slate-500"
          >
            Register
          </button>

          <div className="register-link">
            <p>
              Already have an account ?{" "}
              <a onClick={loginLink} className="cursor-pointer">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
