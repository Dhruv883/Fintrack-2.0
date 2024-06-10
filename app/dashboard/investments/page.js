import Investment from "@/components/Investment";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-8 flex-wrap justify-between">
      <Investment />
      <Investment />
      <Investment />
    </div>
  );
};

export default page;
