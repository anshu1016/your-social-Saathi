import axios from "axios";
import { toast } from "react-toastify";
const LoginUser = async (creds, navigate, setIsLogIn) => {
  try {
    const {
      status,
      data: { encodedToken, foundUser },
    } = await axios.post("/api/auth/login", {
      ...creds,
    });
    if (status === 200 || status === 201) {
      localStorage.setItem("userToken", encodedToken);
      localStorage.setItem("socialUser", JSON.stringify(foundUser));
      setIsLogIn(true);
      navigate("/");
      toast.success("WelCome Saathi !");
    }
  } catch (error) {
    toast.warn("Your Password is incorrect. Re-enter your password");
  }
};
const SignupUser = async (data, navigate, setIsLogIn, dataDispatch) => {
  try {
    const {
      status,
      data: { encodedToken, createdUser },
    } = await axios.post("/api/auth/signup", { ...data });
    if (status === 200 || status === 201) {
      localStorage.setItem("userToken", encodedToken);
      localStorage.setItem("socialUser", JSON.stringify(createdUser));
      setIsLogIn(true);
      dataDispatch({ type: "Add_NEW_USER", payload: createdUser });
      navigate("/");
      toast.success("Welcome Saathi !");
    }
  } catch (error) {
    toast.warn("Please Use Another Credentials...");
  }
};
export { SignupUser, LoginUser };
