import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React,{useEffect, useState} from "react";
import { FaLock, FaRegEnvelope, FaUser } from "react-icons/fa6";
import { auth } from "../../firebase/config";
import "./LoginSignup.css";

import useAuth, { AuthProvider } from "../../context/AuthContext";
import { ToastContainer, cssTransition, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
  const [active, setActive] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [registerEmail, setRegisterEmail] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPasword, setShowPasword] = useState(false);
  const navigate = useNavigate();
  
  const Bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
  })
  
  const notify_l = () => toast.success('✌️Logged In Succesfully.', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce
  })

  const notify_r = () => toast.success('✌️Registered Succesfully.', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce
  })
  const registerLink = () => {
    setActive("active");
  };

  const loginLink = () => {
    setActive("");
  };

  const toggleShowPassword = () => {
    setShowPasword(!showPasword);
  };

  const handleChange_l = (e) => {
    const value = e.target.value;
    setLoginPassword(value);
    setIsValid(value.length >= 6); // 6 is min length for firebase authentication
  };
  
  const handleChange_r = (e) => {
    const value = e.target.value;
    setRegisterPassword(value);
    setIsValid(value.length >= 6); // 6 is min length for firebase authentication
  };

 async function handleLogin(event) {
    event.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate('/')
      return notify_l;
    } catch (error) {
      throw error;
    }
  };

  async function handleRegister(event){
    event.preventDefault()

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      navigate('/')
      return notify_r;
    } catch (error) {
      throw error;
    }

  };
  const{user, authStatus} = useAuth()
  
  return (
    <AuthProvider value={{user, handleLogin, handleRegister, authStatus}}>
    <div
      className={`wrapper flex h-[480px] w-[420px] p-6 my-10 ${active} items-center justify-center mx-auto`}
    >
      <div className=''>
        <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover= {false}
        theme="colored"
        transition= {Bounce}
        ></ToastContainer>
      </div>
      <div className="form login">
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input
              className="text-blue-400 dark:text-white"
              type="text"
              name="email"
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="E-mail"
              required
            />
            <FaRegEnvelope className="absolute right-5 top-5 translate-y-1/2 font-light" />
            <input
            className="text-blue-400 dark:text-white"
              type={showPasword ? "text" : "password"}
              name="Password"
              placeholder="Password"
              minLength='6'
              onChange={handleChange_l}
              required
            />
            <FaLock className="absolute right-5 top-[82px] translate-y-1/2 font-light" />
            <div>
            {!isValid && <p className="text-red-500 mt-2">Password must be at least 6 characters long.</p>}
            </div>
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
            onClick={handleLogin}
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
              className="text-blue-400 dark:text-white"
              type="text"
              name="Username"
              placeholder="Username"
              required
            />
            <FaUser className="relative left-5 bottom-14 translate-y-1/2 font-light" />
            <input
              className="text-blue-400 dark:text-white"
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setRegisterEmail(e.target.value)}
              required
            />
            <FaRegEnvelope className="relative left-5 bottom-14 translate-y-1/2 font-light" />
            <input
              className="text-blue-400 dark:text-white"
              type={showPasword ? "text" : "password"}
              name="Password"
              placeholder="Password"
              minLength='6'
              onChange={handleChange_r}
              required
            />
            <FaLock className="relative left-5 bottom-14 translate-y-1/2 font-light" />
            <div>{!isValid && <p className="text-red-500 mt-2">Password must be at least 6 characters long.</p>}</div>
            <label htmlFor="toggle1" className="text-center">
              <input
                type="checkbox"
                id="toogle1"
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
            onClick={handleRegister}
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
    </AuthProvider>
  );
}

export default LoginSignup;
