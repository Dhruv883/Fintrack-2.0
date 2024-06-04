import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const menu = [
    { name: "Dashboard", to: "", icon: "dashboard" },
    { name: "Transactions", to: "transactions", icon: "transaction" },
    { name: "Investments", to: "investments", icon: "investments" },
    { name: "Loans", to: "loans", icon: "loans" },
    { name: "Insurances", to: "insurances", icon: "insurances" },
    { name: "Profile", to: "profile", icon: "profile" },
  ];

  return (
    <aside
      ref={sidebar}
      // absolute left-0 top-0 z-9999
      className={` bg-gradient-to-b from-grayBlack to-secBlack w-64 h-full rounded-lg p-2 z-50 flex flex-col overflow-y-hidden ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-4 py-5.5 lg:py-6.5">
        <Link href="/" className="flex items-center gap-5 py-3">
          <Image
            width={50}
            height={32}
            src={"/icons/logo.svg"}
            alt="Logo"
            priority
          />
          {/* <span className="text-3xl text-white font-semibold">Fintrack</span> */}
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="py-4 w-11/12 mx-auto"></div>
      <div className="flex flex-col gap-3">
        {menu.map((item, index) => {
          return (
            <Link href={`/dashboard/${item.to}`} key={index}>
              <div
                className={`text-white text-md p-2 py-2.5 rounded-md mx-2 flex items-center gap-4 ${
                  pathname.endsWith(item.name.toLowerCase())
                    ? "bg-grayBlack"
                    : "bg transparent"
                }`}
              >
                <Image height={25} width={25} src="/icons/transaction.svg" />
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto px-2 py-2">
        <button className="w-full bg-grayBlack text-white text-lg p-2 rounded-md flex items-center gap-4">
          <Image height={30} width={30} src="/icons/logout.svg" />
          Sign out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
