import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function VerifyEmail() {
  const API_BASE_URL =
    import.meta.env.REACT_APP_API_URL || "http://autoclaw-back.test";
  const [SearchParams] = useSearchParams();
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("");
  const email = SearchParams.get("email");
  const [token, setToken] = useState(SearchParams.get("token"));
  const navigate = useNavigate();
  // console.log(email, token);
  useEffect(() => {
    if (email === null) {
      navigate("/register");
    }
  }, [email, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/verify`, {
        email,
        token,
      });
      console.log(response.data);
      setMsg(response.data.message);
      navigate("/login");
    } catch (error) {
      console.error(error?.response);
      setErrors(error?.response?.data?.errors || "An error occurred");
      setMsg(error?.response?.data?.message || "An error occurred");
    }
  };
  const resendVerification = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/resend-verification`, {
        email,
      });
      console.log(response.data);
      setMsg(response.data.message);
    } catch (error) {
      console.error(error?.response);
      setErrors(error?.response?.data?.errors || "An error occurred");
      setMsg(error?.response?.data?.message || "An error occurred");
    }
  };


  console.log(errors);

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
            Verify your account
          </h2>
          <p className="mt-10 text-center text-sm/6 text-gray-600 dark:text-gray-400">
            Please enter the verification token sent to your email. {email}
          </p>
          <p className="text-red-500 text-center italic">{msg}</p>
          <p className="text-center text-sm/6 text-gray-600 dark:text-gray-400">
            Didn't receive the verification email?{" "}
            <button
              type="button"
              onClick={resendVerification}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Click here to resend it
            </button>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="token"
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                Verification Token
              </label>
              <div className="mt-2">
                <input
                  id="token"
                  name="token"
                  type="text"
                  required
                  autoComplete="token"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <span className="text-red-500 text-sm">{errors.token}</span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Verify Account
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
