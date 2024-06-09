import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="relative bg-gradient-to-l from-grayBlack2 to-grayBlack rounded-md p-3 text-white flex justify-end">
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
        <div className="flex flex-col absolute right-0 top-24 text-white z-50 bg-grayBlack2 p-4 gap-3 rounded-xl shadow-2xl mr-3">
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
