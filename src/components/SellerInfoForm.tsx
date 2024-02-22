import React from "react";
import { ShopType, UserRole } from "../store/user/userInterface";
import { useAppDispatch } from "../store/user/user.hooks";

import { Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import authLogo from "../assets/authLogo.png";
import formHero from "../assets/formBg.png";
import ProgressSteps from "./ProgressSteps";
import {  updateSellerAPI } from "../api/expressAPI";
import { useSelector } from "react-redux";

type SellerInfoFormProps = {};

const SellerInfoForm = ({}: SellerInfoFormProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user);

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
            storeName: "",
            storeEmail: "",
            storePhoneNumber: "",
            sellerAddress: "",
            country: "",
            state: "",
            cnic: "",
            kyc: "",
            userRole: ShopType,
          }}
          onSubmit={async (values) => {
            console.log("onSubmit", values);
            await new Promise((r) => setTimeout(r, 500));
            // dispatch(setUser(values));

            updateSellerAPI(values, user?._id)
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
                navigate("/register/art");
              })
              .catch((res) => {
                console.log(res.message);
                toast.error(`${res.message}`, {
                  position: "bottom-right",
                  autoClose: 2500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              });
          }}
        >
          <Form className="flex flex-col justify-start content-start items-start w-full max-w-md gap-y-2">
            <label className="font-semibold text-[14px]" htmlFor="store">
              Apke Store Ka Naam
            </label>
            <Field
              id="store"
              name="storeName"
              placeholder="+92"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label className="font-semibold text-[14px]" htmlFor="email">
              Store Email Address
            </label>
            <Field
              id="email"
              name="storeEmail"
              placeholder="Email"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label className="font-semibold text-[14px]" htmlFor="phone">
              Mobile Number
            </label>
            <Field
              id="phone"
              name="storePhoneNumber"
              placeholder="+92"
              type="text"
              className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label className="font-semibold text-[14px]" htmlFor="address">
              Store Address
            </label>
            <Field
              id="address"
              name="sellerAddress"
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
              <option value="INDIVIDUAL">Individual</option>
              <option value="TRADER_BUSINESS">Trader Business</option>
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
