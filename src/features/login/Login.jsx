import React, { useState } from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginUser } from "../../services/AuthServices";
import { useAuth } from "../../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { setIsLogIn } = useAuth();
  const navigate = useNavigate();
  const { username, password } = loginDetails;
  const handleLogin = () => {
    if (username && password) {
      LoginUser({ username, password }, navigate, setIsLogIn, toast);
    } else {
      setTimeout(() => {
        toast.warn("Please fills all details!");
      }, 200);
    }
  };

  const handleGuestLogin = () => {
    const creds = { username: "arunshukla98710@gmail.com", password: "124421" };
    setLoginDetails(creds);
    LoginUser(creds, navigate, setIsLogIn);
  };

  return (
    <div className="container">
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">
            UserName
            <span>*</span>
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter Your Username..."
            value={username}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, username: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">
            Password
            <span>*</span>
          </label>
          <input
            id="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Password..."
            name="password"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
            value={password}
          />
          {loginDetails.password &&
            (showPassword ? (
              <FaEyeSlash
                onClick={() => setShowPassword(false)}
                className="eyeIcon"
              />
            ) : (
              <FaEye
                onClick={() => setShowPassword(true)}
                className="eyeIcon"
              />
            ))}
        </div>
        <button className="loginBtn" onClick={handleLogin}>
          Login
        </button>
        <button className=" guestBtn" onClick={handleGuestLogin}>
          Login as Guest
        </button>
        <NavLink to={"/signup"}>
          <p className="link">Create An Account</p>
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
