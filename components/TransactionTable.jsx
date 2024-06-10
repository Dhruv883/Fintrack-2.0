import React from "react";

const TransactionTable = () => {
  return (
    <div className="w-2/3 p-4 border rounded-2xl bg-white">
      <div className="text-3xl font-medium py-2 mx-4 mb-2">
        Recent Transactions
      </div>
      <table className="min-w-full mx-4">
        <thead className="border-b-2 border-gray-300">
          <tr>
            <th
              scope="col"
              className="w-1/4 py-2 text-start text-lg font-bold text-black"
            >
              Name
            </th>
            <th
              scope="col"
              className="w-1/4 py-2 text-start text-lg font-bold text-black"
            >
              Date
            </th>
            <th
              scope="col"
              className="w-1/4 py-2 text-start text-lg font-bold text-black"
            >
              Status
            </th>
            <th
              scope="col"
              className="w-1/4 py-2 text-start text-lg font-bold text-black"
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100 transition duration-300 ease-in-out [&>td]:w-1/4 [&>td]:py-4">
            <td>Dhruv Dedhia</td>
            <td>09/06/24</td>
            <td
              // className={`${
              // status === "pending" ? "text-black" : "text-green"
              // }`}
              className="text-black"
            >
              Pending
            </td>
            <td className="text-green">+ ₹500</td>
          </tr>
          <tr className="hover:bg-gray-100 transition duration-300 ease-in-out [&>td]:w-1/4 [&>td]:py-4">
            <td>Dhruv Dedhia</td>
            <td>09/06/24</td>
            <td
              // className={`${
              // status === "pending" ? "text-black" : "text-green"
              // }`}
              className="text-green"
            >
              Complete
            </td>
            <td className="text-red">- ₹500</td>
          </tr>
          <tr className="hover:bg-gray-100 transition duration-300 ease-in-out [&>td]:w-1/4 [&>td]:py-4">
            <td>Dhruv Dedhia</td>
            <td>09/06/24</td>
            <td
              // className={`${
              // status === "pending" ? "text-black" : "text-green"
              // }`}
              className="text-green"
            >
              Complete
            </td>
            <td className="text-green">+ ₹500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
