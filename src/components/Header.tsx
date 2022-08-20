import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MenuModal } from "src/components/menuModal";

export const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header>
      <nav className="py-2.5 mx-20">
        <div className="flex flex-wrap md:justify-between">
          <button
            className="md:hidden bg-white border-none mr-4 hover:cursor-pointer text-lg"
            onClick={() => setIsOpened(true)}
          >
            <FaBars />
          </button>
          <Link href="/" className="flex items-center no-underline">
            <span className="font-bold text-gray-700 hover:cursor-pointer">
              Yama IT Portfolio
            </span>
          </Link>
          <div className=" justify-between items-center flex w-auto">
            <ul className="md:flex hidden mt-4 flex-row lg:space-x-8 lg:mt-0 list-none font-bold">
              <li>
                <Link
                  href="/About"
                  className="block py-2 pr-4 pl-3 text-gray-700 no-underline rounded bg-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/Blog"
                  className="block py-2 pr-4 pl-3 text-gray-700 no-underline rounded bg-primary-700 lg:p-0 dark:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/Portfolio"
                  className="block py-2 pr-4 pl-3 text-gray-700 no-underline rounded bg-primary-700 lg:p-0 dark:text-white"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 no-underline rounded bg-primary-700 lg:p-0 dark:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <MenuModal isOpened={isOpened} setIsOpened={setIsOpened} />
      </nav>
    </header>
  );
};
