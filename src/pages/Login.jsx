import { useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.REACT_APP_API_URL || "http://autoclaw-back.test";
  const [showPassword, setShowPassword] = useState(false);
  let currentStatus = null;
  // State to hold form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    try {
      const res = await axios.post(`${API_BASE_URL}/api/login`, formData);
      if (res.status === 200) {
        const token = res.data.token;
        const user = res.data.user;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        console.log("User data stored in localStorage:", user);
        toast.success("Login successful!");

        if (user.email_verified_at === null || user.email_verified_at === "") {
          return navigate("/verify-email?email=" + user.email);
        }

        if (user.role === "admin") {
          navigate(`/admin/dashboard`);
        } else if (user.role === "vendor") {
          navigate(`/vendor/dashboard`);
        } else {
          navigate(`/`);
        }
        // navigate("/shop/create/dashboard");
      }
    } catch (err) {
      const backendErrors = err?.response?.data?.errors;
      if (backendErrors) {
        setErrors(backendErrors);
      } else {
        toast.error(err?.response?.data?.message || "An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Header />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white dark:bg-gray-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className={`block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${errors.email ? "outline-red-500 dark:outline-red-400" : "outline-gray-300 dark:outline-gray-600"}`}
                />
              </div>
              <span className="text-red-500 dark:text-red-400 italic">
                {errors.email}
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  className={`block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${errors.password ? "outline-red-500 dark:outline-red-400" : "outline-gray-300 dark:outline-gray-600"}`}
                />
                <span onClick={()=> setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400">
                  {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </span>
              </div>
              <span className="text-red-500 dark:text-red-400 italic">
                {errors.password}
              </span>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? "Logging in..." : "Sign in"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Click here to register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
