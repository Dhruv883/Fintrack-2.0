export default function Loan() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md font-Urbanist">
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800 ">Home Loan</h3>
        <span className="text-green-800 rounded-full border px-3 py-1 text-sm font-medium">
          Home
        </span>
      </div>
      <div className="grid grid-cols-2 gap-x-10 gap-y-8">
        <div>
          <p className="text-md text-gray-500 mb-1">Interest Rate</p>
          <p className="text-lg font-medium text-gray-800 ">4.75%</p>
        </div>
        <div>
          <p className="text-md text-gray-500 mb-1">Initial Value</p>
          <p className="text-lg font-medium text-gray-800 ">₹250,000</p>
        </div>
        <div>
          <p className="text-md text-gray-500 mb-1">Loan Start Date</p>
          <p className="text-lg font-medium">May 1, 2023</p>
        </div>
        <div>
          <p className="text-md text-gray-500 mb-1">Loan Duration</p>
          <p className="text-lg font-medium">10 Years</p>
        </div>
      </div>
    </div>
  );
}
