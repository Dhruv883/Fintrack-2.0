"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div className="flex h-screen overflow-hidden p-4 bg-bgColor">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden gap-6 px-4 md:px-6 2xl:px-10">
          {/* <Header /> */}
          <main className="h-full">
            <div className="h-full">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
