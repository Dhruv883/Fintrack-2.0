import Insurance from "@/components/Insurance";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-8 flex-wrap justify-betweenw">
      <Insurance />
      <Insurance />
      <Insurance />
    </div>
  );
};

export default page;
