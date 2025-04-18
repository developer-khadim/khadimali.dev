import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../redux/slices/userSlice";
import toast from "react-hot-toast";
import { USER_API_ENDPOINT } from "../constant/data";
import ReusableBtn from "./Dashboard/Components/ReusableBtn";

const AdminLogin = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/admin");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, {
        email: form.email,
        password: form.password,
      });

      if (res.data.success === true) {
        dispatch(setUser(res.data.user));
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        navigate("/admin");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-center">
          <h2 className="text-3xl font-bold text-white tracking-wide drop-shadow-md">
            Admin Login
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          <div className="relative group">
            <div
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400
              group-focus-within:text-indigo-600 transition-colors duration-300"
            >
              <FiMail size={20} />
            </div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`
                w-full pl-10 p-3 rounded-lg border
                focus:outline-none focus:ring-2
                transition-all duration-300
                ${
                  errors.email
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:border-indigo-600 focus:ring-indigo-300"
                }
              `}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 animate-shake">
                {errors.email}
              </p>
            )}
          </div>

          <div className="relative group">
            <div
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400
              group-focus-within:text-indigo-600 transition-colors duration-300"
            >
              <FiLock size={20} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className={`
                w-full pl-10 pr-10 p-3 rounded-lg border
                focus:outline-none focus:ring-2
                transition-all duration-300
                ${
                  errors.password
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:border-indigo-600 focus:ring-indigo-300"
                }
              `}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2
                text-gray-400 hover:text-indigo-600
                transition-colors duration-300
                focus:outline-none focus:text-indigo-600"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1 animate-shake">
                {errors.password}
              </p>
            )}
          </div>

          <ReusableBtn
            type="submit"
            text="Sign In"
            loadingText={
              <div className="flex items-center justify-center">
                <FiLoader className="mr-2 animate-spin" size={20} />
                <span className="animate-pulse">Signing In...</span>
              </div>
            }
            isLoading={isLoading}
            disabled={isLoading}
            className={`w-full flex items-center justify-center ${
              isLoading && "cursor-not-allowed"
            }`}
          />

          <div className="text-center text-sm text-gray-500 mt-4">
            <Link
              to="/"
              className="cursor-pointer hover:underline hover:text-indigo-600 transition-colors"
            >
              Back to Portfolio
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
