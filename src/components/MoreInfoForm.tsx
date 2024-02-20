import React from "react";
import { UserRole } from "../store/user/userInterface";
import { useAppDispatch } from "../store/user/user.hooks";

import { Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import authLogo from "../assets/authLogo.png";
import formHero from "../assets/formBg.png";
import ProgressSteps from "./ProgressSteps";

type MoreInfoFormProps = {};

const MoreInfoForm = ({}: MoreInfoFormProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="p-12">
      <img src={authLogo} className="w-[177px] h-[35px]" />
      <div className="mt-4">
        <ProgressSteps active1 active2 active3 active4 />
      </div>

      <h2 className="text-2xl font-semibold my-6">Mazeed Tafseelat</h2>
      <div className="flex justify-between items-center">
        <Formik
          initialValues={{
            address: "",
            state: "",
            city: "",
            district: "",
            artist: UserRole.BUYER,
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
            <label className="font-semibold text-[14px]" htmlFor="address">
              Store Address
            </label>
            <Field
              id="address"
              name="address"
              placeholder="Mukaamal Pata darj karen"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label className="font-semibold text-[14px]" htmlFor="state">
              State
            </label>
            <Field
              id="state"
              name="state"
              placeholder="State"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label className="font-semibold text-[14px]" htmlFor="city">
              City
            </label>
            <Field
              id="city"
              name="city"
              placeholder="City"
              type="text"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="font-semibold text-[14px]" htmlFor="district">
              District
            </label>
            <Field
              id="district"
              name="district"
              placeholder="District"
              type="text"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label className="font-semibold text-[14px]" htmlFor="artist">
              Artists
            </label>

            <Field
              as="select"
              name="artist"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="sole">Emerging Artists</option>
              <option value="associated">Independent Artists</option>
              <option value="associated">Tech-Savvy Artists</option>
            </Field>

            <div className="flex space-x-6 mt-6">
              <button
                type="submit"
                className="bg-[#0F172A] text-white hover:bg-sky-700"
              >
                Complete Register
              </button>
            </div>
          </Form>
        </Formik>
        <img src={formHero} className="" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default function MoreInfoFormServices() {
  return (
    // <AuthRoutes>
    <MoreInfoForm />
    // </AuthRoutes>
  );
}
