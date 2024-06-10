import Loan from "@/components/Loan";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-8 flex-wrap justify-between">
      <Loan />
      <Loan />
      <Loan />
    </div>
  );
};

export default page;
