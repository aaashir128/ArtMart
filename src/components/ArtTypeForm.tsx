import React from "react";
import { UserRole } from "../store/user/userInterface";
import { useAppDispatch } from "../store/user/user.hooks";

import { Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import authLogo from "../assets/authLogo.png";
import formHero from "../assets/artHero.png";
import ProgressSteps from "./ProgressSteps";

type ArtTypeFormProps = {};

const ArtTypeForm = ({}: ArtTypeFormProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="p-12">
      <img src={authLogo} className="w-[177px] h-[35px]" />
      <div className="mt-8">
        <ProgressSteps active1 active2 active3 active4={false} />
      </div>

      <div className="flex justify-between items-center">
      <div className="w-[65%]">
          <h2 className=" font-semibold my-6">
            Please complete the todo as soon as possible, and then start the
            business journey!
          </h2>
          <h2 className=" font-bold mt-6">Back</h2>
          <h2 className="text-lg font-extrabold mt-8">Art Type</h2>
          <h2 className="text-xl font-bold mt-4 mb-6">
            Let us know your Art Specialization type to fill in the right
            information.{" "}
          </h2>
          <Formik
            initialValues={{
              store: "",
              email: "",
              phone: "",
              address: "",
              country: "",
              state: "",
              cnic: "",
              kyc: "",
              userRole: UserRole.BUYER,
            }}
            onSubmit={async (values) => {
              console.log("onSubmit", values);
              await new Promise((r) => setTimeout(r, 500));
              // dispatch(setUser(values));

              // registerUser(values)
              //   .then((res) => {
              //     console.log(res.data);
              //     toast.success(`${res.data.message}`, {
              //       position: "bottom-right",
              //       autoClose: 2500,
              //       hideProgressBar: false,
              //       closeOnClick: true,
              //       pauseOnHover: true,
              //       draggable: true,
              //       progress: undefined,
              //       theme: "light",
              //     });
              //   })
              //   .catch((res) => {
              //     console.log(res.message);
              //     toast.error(
              //       `${
              //         String(res.message).includes("409")
              //           ? "User is Already Registered"
              //           : res.message
              //       }`,
              //       {
              //         position: "bottom-right",
              //         autoClose: 2500,
              //         hideProgressBar: false,
              //         closeOnClick: true,
              //         pauseOnHover: true,
              //         draggable: true,
              //         progress: undefined,
              //         theme: "light",
              //       }
              //     );
              //   });
            }}
          >
            <Form className="flex flex-col justify-start content-start items-start w-full max-w-md gap-y-2">
              <label className="font-semibold text-[14px]" htmlFor="store">
                Apke Store Ka Naam
              </label>
              <Field
                id="store"
                name="store"
                placeholder="+92"
                className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <div className="flex space-x-6 mt-6">
                <button
                  type="submit"
                  className="bg-[#0F172A] text-white hover:bg-sky-700"
                >
                  Next
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="w-[35%] flex flex-col justify-between h-full">
          <div>
            <p className="text-xl font-bold">Important Tips</p>
            <p className="text-gray-500">
              Please select the correct Art Specialization type from the given
              options.The documents required are different for both and your
              application might be rejected if you submit incorrect information
            </p>
          </div>
          <img src={formHero} className="" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default function ArtTypeServices() {
  return (
    // <AuthRoutes>
    <ArtTypeForm />
    // </AuthRoutes>
  );
}
