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

type SellerInfoFormProps = {};

const SellerInfoForm = ({}: SellerInfoFormProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="p-12">
      <img src={authLogo} className="w-[177px] h-[35px]" />
      <div className="mt-4">
        <ProgressSteps active1 active2 active3 active4={false} />
      </div>

      <h2 className="text-2xl font-semibold my-6">
        Hello Seller!
        <br />
        Apna Taaruf Karwayn!
      </h2>
      <div className="flex justify-between items-center">
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

            <label className="font-semibold text-[14px]" htmlFor="email">
              Store Email Address
            </label>
            <Field
              id="email"
              name="email"
              placeholder="Email"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label className="font-semibold text-[14px]" htmlFor="phone">
              Mobile Number
            </label>
            <Field
              id="phone"
              name="phone"
              placeholder="+92"
              type="text"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="font-semibold text-[14px]" htmlFor="address">
              Store Address
            </label>
            <Field
              id="address"
              name="address"
              placeholder="Address"
              type="text"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="font-semibold text-[14px]" htmlFor="country">
              Country
            </label>
            <Field
              id="country"
              name="country"
              placeholder="Country"
              type="text"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="font-semibold text-[14px]" htmlFor="state">
              State
            </label>
            <Field
              id="state"
              name="state"
              placeholder="State"
              type="text"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="font-semibold text-[14px]" htmlFor="cnic">
              Enter your CNIC
            </label>
            <Field
              id="cnic"
              name="cnic"
              placeholder="123456"
              type="text"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="font-semibold text-[14px]" htmlFor="kyc">
              Verify ID (KYC)
            </label>

            <Field
              as="select"
              name="userRole"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="sole">I am in Individual Artist</option>
              <option value="associated">
                I am a sole trader or incorpated associated artist
              </option>
            </Field>

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
        <img src={formHero} className="" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default function SellerInfoServices() {
  return (
    // <AuthRoutes>
    <SellerInfoForm />
    // </AuthRoutes>
  );
}
