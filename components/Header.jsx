"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const pathname = usePathname().split("/").slice(-1);

  return (
    <div className="relative bg-white rounded-md p-3 text-white flex justify-between items-center">
      <div className="text-black capitalize text-3xl font-medium">
        {pathname}
      </div>
      <span className="flex gap-2 [&>img]:cursor-pointer">
        <Image
          src="/icons/profile.svg"
          height={50}
          width={50}
          onClick={() => setShowProfile(!showProfile)}
        />
        <Image
          src="/icons/arrow.svg"
          height={25}
          width={25}
          onClick={() => setShowProfile(!showProfile)}
        />
      </span>
      {showProfile && (
        <div className="bg-white flex flex-col absolute right-0 top-24 text-black z-50 bg-grayBlack2 p-4 gap-3 rounded-xl shadow-2xl mr-3">
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-2 text-lg pr-4 pl-2 "
          >
            <Image src="/icons/profile-2.svg" height={25} width={25} />
            Profile
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-lg pr-4 pl-2 "
          >
            <Image src="/icons/family.svg" height={25} width={25} />
            Family
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-lg pr-4 pl-2"
          >
            <Image src="/icons/logout.svg" height={25} width={25} />
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
