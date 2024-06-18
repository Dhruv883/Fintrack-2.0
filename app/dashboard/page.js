"use client";

import dynamic from "next/dynamic";
const BalanceChart = dynamic(() => import("@/components/BalanceChart"), {
  ssr: false,
});
const SummaryChart = dynamic(() => import("@/components/SummaryChart"), {
  ssr: false,
});
import StatsCard from "@/components/StatsCard";
import TransactionTable from "@/components/TransactionTable";

const page = () => {
  return (
    <div className="h-full flex flex-col gap-10">
      <div className="flex flex-wrap justify-between">
        <StatsCard name="Net-Worth" icon="net-worth" amount={1000000} />
        <StatsCard name="Balance" icon="wallet" amount={35000} />
        <StatsCard name="Savings" icon="net-worth" amount={25000} />
        <StatsCard name="Salary" icon="net-worth" amount={100000} />
      </div>
      <div>
        <BalanceChart />
      </div>
      <div className="flex gap-4">
        <TransactionTable />
        <SummaryChart />
      </div>
    </div>
  );
};

export default page;
