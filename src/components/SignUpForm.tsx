import React from "react";
import { UserRole } from "../store/user/userInterface";
import { useAppDispatch } from "../store/user/user.hooks";
import { setUser } from "../store/user/user.slice";

import { Field, Form, Formik } from "formik";
import { registerUser } from "../api/expressAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AuthPage from "../pages/Auth/AuthPage";

type LoginProps = {
  // switchToLogin: () => void;
};
const SignUpForm = ({}: LoginProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //   const notify = (message: AxiosResponse<unknown, unknown> ) => toast(` ${message}`);
  return (
    <AuthPage>
      <div className="flex flex-col justify-center content-center items-center">
        <h2 className="text-xl font-semibold mb-5">Create New Account</h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            userRole: UserRole.BUYER,
          }}
          onSubmit={async (values) => {
            console.log("onSubmit", values);
            await new Promise((r) => setTimeout(r, 500));
            dispatch(setUser(values));

            registerUser(values)
              .then((res) => {
                console.log(res.data);
                toast.success(`${res.data.message}`, {
                  position: "bottom-right",
                  autoClose: 2500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                navigate("/register/info");
              })
              .catch((res) => {
                console.log(res.message);
                toast.error(
                  `${
                    String(res.message).includes("409")
                      ? "User is Already Registered"
                      : res.message
                  }`,
                  {
                    position: "bottom-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  }
                );
              });
          }}
        >
          <Form className="flex flex-col justify-start content-start items-start w-full max-w-md gap-y-2">
            <label className="font-semibold text-[14px]" htmlFor="firstName">
              First Name
            </label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="John"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label className="font-semibold text-[14px]" htmlFor="lastName">
              Last Name
            </label>
            <Field
              id="lastName"
              name="lastName"
              placeholder="Doe"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label className="font-semibold text-[14px]" htmlFor="phone">
              Phone Number
            </label>
            <Field
              id="phone"
              name="phone"
              placeholder="+92"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label className="font-semibold text-[14px]" htmlFor="email">
              Email
            </label>
            <Field
              id="email"
              name="email"
              placeholder="Email"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label className="font-semibold text-[14px]" htmlFor="password">
              Setup Password
            </label>
            <Field
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="font-semibold text-[14px]" htmlFor="password">
              Confirm Password
            </label>
            <Field
              id="password"
              name="confirmPassword"
              placeholder="Password"
              type="password"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="font-semibold text-[14px]" htmlFor="userRole">
              User Role
            </label>
            <Field
              as="select"
              name="userRole"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="ADMIN">Admin</option>
              <option value="SELLER">Seller</option>
              <option value="BUYER">Buyer</option>
            </Field>

            <div className="flex space-x-6 mt-6">
              <button
                type="submit"
                className="bg-[#0F172A] text-white hover:bg-sky-700"
              >
                Submit
              </button>

              <button
                type="button"
                onClick={() => navigate("/login")}
                className="bg-[#0F172A] text-white hover:bg-sky-700"
              >
                Login
              </button>
            </div>
          </Form>
        </Formik>

        <ToastContainer />
      </div>
    </AuthPage>
  );
};

export default function SignupServices() {
  return (
    // <AuthRoutes>
    <SignUpForm />
    // </AuthRoutes>
  );
}
