import { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const API_BASE_URL =
    import.meta.env.REACT_APP_API_URL || "http://autoclaw-back.test";
  // State to hold form data
  const [formData, setFormData] = useState({
    firstname: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // console.table(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/api/register`, formData);
      console.log(res.data);
    } catch (errors) {
      console.log(errors?.response?.data?.message);
      console.table(errors?.response?.data?.errors);
      setErrors(errors?.response?.data?.errors);
    }
    console.table(errors);
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
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Firstname */}
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                Firstname
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  //   required
                  autoComplete="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className={`block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${errors.firstname ? "outline-red-500 dark:outline-red-400" : "outline-gray-300 dark:outline-gray-600"}`}
                />
              </div>
              <span className="text-red-500 dark:text-red-400 italic">
                {errors.firstname}
              </span>
            </div>

            {/* Surname */}
            <div>
              <label
                htmlFor="surname"
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                Surname
              </label>
              <div className="mt-2">
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  //   required
                  autoComplete="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className={`block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${errors.surname ? "outline-red-500 dark:outline-red-400" : "outline-gray-300 dark:outline-gray-600"}`}
                />
              </div>
              <span className="text-red-500 dark:text-red-400 italic">
                {errors.surname}
              </span>
            </div>

            {/* Email Address */}
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
                  type="text"
                  //   required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${errors.email ? "outline-red-500 dark:outline-red-400" : "outline-gray-300 dark:outline-gray-600"}`}
                />
              </div>
              <span className="text-red-500 dark:text-red-400 italic">
                {errors.email}
              </span>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  //   required
                  autoComplete="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${errors.phone ? "outline-red-500 dark:outline-red-400" : "outline-gray-300 dark:outline-gray-600"}`}
                />
              </div>
              <span className="text-red-500 dark:text-red-400 italic">
                {errors.phone}
              </span>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  //   required
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${errors.password ? "outline-red-500 dark:outline-red-400" : "outline-gray-300 dark:outline-gray-600"}`}
                />
              </div>
              <span className="text-red-500 dark:text-red-400 italic">
                {errors.password}
              </span>
            </div>

            {/* Confirm Password */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  //   required
                  autoComplete="confirmPassword"
                  value={formData.confirmPassword}
                  className={`block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ${errors.password ? "outline-red-500 dark:outline-red-400" : "outline-gray-300 dark:outline-gray-600"}`}
                />
              </div>
              <span className="text-red-500 dark:text-red-400 italic">
                {errors.password}
              </span>
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                Select a role
              </label>
              <div className="mt-2">
                <select
                  id="role"
                  name="role"
                  //   required
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="user">User</option>
                  <option value="vendor">Vendor</option>
                </select>
              </div>
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Click here to sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
