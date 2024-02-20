import React from "react";
import { useAppDispatch } from "../store/user/user.hooks";

import { Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { setUser } from "../store/user/user.slice";
import { loginUser } from "../api/expressAPI";
import { useNavigate } from "react-router-dom";
import AuthPage from "../pages/Auth/AuthPage";

type LoginProps = {
  // switchToSignup: () => void;
};

const Login = ({}: LoginProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <AuthPage>
      <div className="flex flex-col justify-center content-center ">
        <h2 className="text-4xl font-semibold mb-5">Login</h2>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            dispatch(setUser(values));

            loginUser(values)
              .then((res) => {
                const { accessToken, refreshToken } = res.data.data;
                localStorage.setItem("token", accessToken);
                localStorage.setItem("refreshToken", refreshToken);

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
            <label className="font-semibold text-[14px]" htmlFor="email">
              Email
            </label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label
              className="font-semibold text-[14px] mt-4"
              htmlFor="password"
            >
              Password
            </label>
            <Field
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <div className="flex space-x-6 mt-6">
              <button
                type="submit"
                className="bg-[#0F172A] text-white hover:bg-sky-700"
              >
                Submit
              </button>

              <button
                type="button"
                onClick={() => navigate("/register")}
                className="bg-[#0F172A] text-white hover:bg-sky-700"
              >
                Create New Account
              </button>
            </div>
          </Form>
        </Formik>

        <ToastContainer />
      </div>
    </AuthPage>
  );
};

export default function LoginServices() {
  return (
    // <AuthRoutes>
    <Login />
    // </AuthRoutes>
  );
}
