import React from "react";

const Transaction = () => {
  return (
    <div className="mx-auto font-Urbanist">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100  rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium text-xl">Aspirants</div>
                <div className="text-base text-gray-500">Freelance</div>
              </div>
            </div>
            <div className={`font-medium ${true ? "text-green" : "text-red"}`}>
              + ₹10000
            </div>
          </div>
          <div className="h-px bg-gray-200 " />
          <div className="grid sm:grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-gray-100  rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-sm text-gray-500 ">June 10, 2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
