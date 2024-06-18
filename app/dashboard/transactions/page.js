"use client";
import React from "react";

import dynamic from "next/dynamic";
const TransactionChart = dynamic(
  () => import("@/components/TransactionChart"),
  {
    ssr: false,
  }
);
const TransactionSummary = dynamic(
  () => import("@/components/TransactionSummary"),
  {
    ssr: false,
  }
);

import Transaction from "@/components/Transaction";
const page = () => {
  return (
    <div className="space-y-6">
      <TransactionChart />
      <div className="flex gap-4">
        <div className="border bg-white rounded-2xl p-4 space-y-3">
          <div className="flex justify-between mx-4 text-3xl font-medium">
            Transactions
          </div>
          <div className="mx-4 flex flex-wrap gap-4">
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
          </div>
        </div>

        {/* <TransactionSummary /> */}
      </div>
    </div>
  );
};

export default page;
