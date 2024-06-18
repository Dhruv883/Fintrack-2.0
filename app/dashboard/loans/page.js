"use client";
import Loan from "@/components/Loan";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button
        className="border bg-transparent rounded-full text-xl absolute bottom-5 right-5"
        onClick={() => setOpenModal(true)}
      >
        <Image src="/icons/add.svg" height={65} width={65} alt="Add Loan" />
      </button>
      {openModal && <FormModal setOpenModal={setOpenModal} />}
      <div className="flex gap-8 flex-wrap justify-between">
        <Loan />
        <Loan />
        <Loan />
      </div>
    </>
  );
};

export default page;

const FormModal = ({ setOpenModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-[100%] flex items-center justify-center bg-bgColor/95 font-medium z-50">
      <div className="rounded-lg w-2/3 h-4/5 border-2 overflow-y-auto no-scrollbar bg-white flex flex-col">
        <div className="px-8 py-5 text-2xl text-center font-semibold">
          ADD LOAN
        </div>
        <div></div>
        <div>
          <button
            className="border px-4 py-3 rounded-2xl bg-white text-xl"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </button>
          <button
            className="border px-4 py-3 rounded-2xl bg-white text-xl"
            onClick={() => setOpenModal(false)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
