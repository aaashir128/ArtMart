import React from "react";

type ProgressStepsProps = {
  active1: boolean;
  active2: boolean;
  active3: boolean;
  active4: boolean;
};

const ProgressSteps = ({
  active1,
  active2,
  active3,
  active4,
}: ProgressStepsProps) => {
  return (
 
      <ol className="items-center justify-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
        <li
          className={`flex items-center ${
            active1
              ? "text-blue-600 dark:text-blue-500"
              : "text-gray-500 dark:text-gray-400 "
          }  space-x-2.5 rtl:space-x-reverse`}
        >
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-blue-500">
            1
          </span>
          <span>
            <h3 className="font-medium leading-tight">Introduction</h3>
          </span>
        </li>
        <li
          className={`flex items-center ${
            active2
              ? "text-blue-600 dark:text-blue-500"
              : "text-gray-500 dark:text-gray-400 "
          }  space-x-2.5 rtl:space-x-reverse`}
        >
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
          </span>
          <span>
            <h3 className="font-medium leading-tight">Add Address</h3>
          </span>
        </li>
        <li
          className={`flex items-center ${
            active3
              ? "text-blue-600 dark:text-blue-500"
              : "text-gray-500 dark:text-gray-400 "
          }  space-x-2.5 rtl:space-x-reverse`}
        >
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
          </span>
          <span>
            <h3 className="font-medium leading-tight">Verify ID & Bank</h3>
          </span>
        </li>
        <li
          className={`flex items-center ${
            active4
              ? "text-blue-600 dark:text-blue-500"
              : "text-gray-500 dark:text-gray-400 "
          }  space-x-2.5 rtl:space-x-reverse`}
        >
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            4
          </span>
          <span>
            <h3 className="font-medium leading-tight">Confirmation</h3>
          </span>
        </li>
      </ol>

  );
};

export default ProgressSteps;
