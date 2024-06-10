export default function Investment() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md font-Urbanist">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800 ">Investment 000</h3>
        <span className="bg-[#DCFCE7] text-green-800 px-3 py-1.5 rounded-full text-sm font-medium ">
          Stock
        </span>
      </div>
      <div className="grid grid-cols-2 gap-x-10 gap-y-8">
        <div>
          <p className="text-md text-gray-500 mb-1">Start Date</p>
          <p className="text-lg font-medium text-gray-800 ">01/01/2023</p>
        </div>
        <div>
          <p className="text-md text-gray-500 mb-1">Initial Value</p>
          <p className="text-lg font-medium text-gray-800 ">10,000</p>
        </div>
        <div>
          <p className="text-md text-gray-500 mb-1">Current Value</p>
          <p className="text-lg font-medium text-green-500 ">₹12,500</p>
        </div>
        <div>
          <p className="text-md text-gray-500 mb-1">Gain/Loss</p>
          <p className="text-lg font-bold text-green">+25%</p>
        </div>
      </div>
    </div>
  );
}
