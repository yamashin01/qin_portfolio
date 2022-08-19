import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header>
      <nav className="py-2.5 mx-20">
        <div className="flex flex-wrap justify-between">
          <Link href="/" className="flex items-center no-underline">
            <span className="font-bold text-gray-700 hover:cursor-pointer">
              Yama IT Portfolio
            </span>
          </Link>
          <div
            className=" justify-between items-center flex w-auto"
            id="mobile-menu-2"
          >
            <ul className="flex mt-4 flex-row lg:space-x-8 lg:mt-0 list-none font-bold">
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
      </nav>
    </header>
  );
};
