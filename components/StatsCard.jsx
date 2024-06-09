import Image from "next/image";

const StatsCard = ({ name, icon, amount }) => {
  return (
    <div className="relative p-5 border rounded-lg w-64 shadow-stats bg-white">
      <div className="p-2 h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-secBlack to-grayBlack text-white">
        <Image src={`icons/${icon}.svg`} height={60} width={60} />
      </div>
      <div className="text-3xl font-medium py-1">₹ {amount}</div>
      <div className="text-textGray font-medium">{name}</div>
    </div>
  );
};

export default StatsCard;
