import { createContext, useState } from "react";
import { loginService, signupService } from "../../api/apiServices";
import { notify } from "../../utils/utils";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null
  );
  const [loggingIn, setLoggingIn] = useState(false);
  const [signingUp, setSigningUp] = useState(false);

  const signupHandler = async ({
    username = "",
    email = "",
    password = "",
  }) => {
    setSigningUp(true);
    try {
      const response = await signupService(username, email, password);
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("token", response?.data?.encodedToken);
        localStorage.setItem(
          "userInfo",
          JSON.stringify(response?.data?.createdUser)
        );
        setToken(response?.data?.encodedToken);
        setUserInfo(response?.data?.createdUser);
        notify("success", "Signed Up Successfully!!");
        return { success: true };
      }
    } catch (err) {
      console.log(err);
      const errorMessage = err?.response?.data?.errors
        ? err?.response?.data?.errors[0]
        : "Some Error Occurred!!";
      notify("error", errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setSigningUp(false);
    }
  };

  const loginHandler = async ({ email = "", password = "" }) => {
    setLoggingIn(true);
    try {
      const response = await loginService(email, password);
      console.log({ response });
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("token", response?.data?.encodedToken);
        localStorage.setItem(
          "userInfo",
          JSON.stringify(response?.data?.foundUser)
        );
        setToken(response?.data?.encodedToken);
        setUserInfo(response?.data?.foundUser);
        notify("success", "Logged In Successfully!!");
        return { success: true };
      }
    } catch (err) {
      console.log(err);
      const errorMessage = err?.response?.data?.errors
        ? err?.response?.data?.errors[0]
        : "Some Error Occurred!!";
      notify("error", errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoggingIn(false);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setToken(null);
    setUserInfo(null);
    notify("info", "Logged out successfully!!", 100);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        loggingIn,
        loginHandler,
        logoutHandler,
        signupHandler,
        signingUp,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
