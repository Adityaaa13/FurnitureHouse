import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import bannerHero from "../assets/bannerHero.jpg";
import { Logo } from "../components";
import { useAuthContext } from "../contexts";

const Login = () => {
  const { loginHandler, token, loggingIn } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showTestAccounts, setShowTestAccounts] = useState(false);

  // Test accounts for easy login
  const testAccounts = [
    { email: "aditya@gmail.com", password: "123@", name: "Aditya" },
    { email: "john@example.com", password: "password123", name: "John Doe" },
    { email: "jane@example.com", password: "password456", name: "Jane Smith" },
    { email: "admin@furniturehouse.com", password: "admin123", name: "Admin User" },
  ];

  useEffect(() => {
    let id;
    if (token) {
      id = setTimeout(() => {
        navigate(location?.state?.from?.pathname ?? "/");
      }, 1000);
    }

    return () => {
      clearInterval(id);
    };
  }, [token, navigate, location]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!loginCredentials.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginCredentials.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!loginCredentials.password) {
      newErrors.password = "Password is required";
    } else if (loginCredentials.password.length < 3) {
      newErrors.password = "Password must be at least 3 characters long";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    try {
      await loginHandler(loginCredentials);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleGuestLogin = () => {
    setLoginCredentials({
      email: "aditya@gmail.com",
      password: "123@",
    });
    setErrors({});
  };

  const handleTestAccountLogin = (account) => {
    setLoginCredentials({
      email: account.email,
      password: account.password,
    });
    setErrors({});
  };

  return (
    <main className="grid grid-rows-1 lg:grid-cols-2 w-full h-screen m-auto">
      <section className="hidden lg:block max-h-screen rounded-lg">
        <img src={bannerHero} alt="" className="w-full h-full object-cover" />
      </section>
      <div className="flex items-center justify-center w-full px-5">
        <section className="px-7 py-10 rounded-md shadow-md bg-white/[0.7] flex flex-col gap-6 w-full max-w-lg">
          <Logo />
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold mb-3">Login to your account</h1>

            <form
              action=""
              className="flex flex-col gap-3"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col">
                Email
                <input
                  type="email"
                  className={`border rounded-md p-1.5 shadow-sm ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  value={loginCredentials.email}
                  onChange={(e) => {
                    setLoginCredentials({
                      ...loginCredentials,
                      email: e.target.value,
                    });
                    if (errors.email) {
                      setErrors({ ...errors, email: "" });
                    }
                  }}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">{errors.email}</span>
                )}
              </label>
              <label className="flex flex-col">
                Password
                <input
                  type="password"
                  className={`border rounded-md p-1.5 shadow-sm ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  value={loginCredentials.password}
                  onChange={(e) => {
                    setLoginCredentials({
                      ...loginCredentials,
                      password: e.target.value,
                    });
                    if (errors.password) {
                      setErrors({ ...errors, password: "" });
                    }
                  }}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <span className="text-red-500 text-sm mt-1">{errors.password}</span>
                )}
              </label>
              <div className="w-full py-2 flex flex-col gap-4 items-center">
                <button
                  className="btn-primary w-2/3 text-lg text-center disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={
                    loggingIn ||
                    !loginCredentials.email ||
                    !loginCredentials.password
                  }
                  type="submit"
                >
                  {loggingIn ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Logging In...
                    </span>
                  ) : (
                    "Login"
                  )}
                </button>
                <button
                  type="button"
                  className="btn-secondary w-2/3 text-sm md:text-base text-center"
                  onClick={handleGuestLogin}
                  disabled={loggingIn}
                >
                  Login as a Guest
                </button>
                
                {/* Test Accounts Section */}
                <div className="w-full">
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-800 text-sm underline"
                    onClick={() => setShowTestAccounts(!showTestAccounts)}
                  >
                    {showTestAccounts ? "Hide" : "Show"} Test Accounts
                  </button>
                  
                  {showTestAccounts && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-md">
                      <p className="text-sm text-gray-600 mb-2">Available test accounts:</p>
                      <div className="space-y-2">
                        {testAccounts.map((account, index) => (
                          <button
                            key={index}
                            type="button"
                            className="block w-full text-left text-xs p-2 bg-white border rounded hover:bg-gray-50"
                            onClick={() => handleTestAccountLogin(account)}
                            disabled={loggingIn}
                          >
                            <span className="font-medium">{account.name}</span>
                            <br />
                            <span className="text-gray-500">{account.email}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <Link to="/signup" className="underline text-gray-600 hover:text-gray-800">
                  Create New Account
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
