import React from "react";

export const Header = () => {
  return (
    <header>
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between">
          <a href="#" className="flex items-center no-underline">
            <span className="font-bold text-gray-700">Yama IT Portfolio</span>
          </a>
          <div
            className=" justify-between items-center flex w-auto"
            id="mobile-menu-2"
          >
            <ul className="flex mt-4 flex-row lg:space-x-8 lg:mt-0 list-none font-bold">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 no-underline rounded bg-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 no-underline rounded bg-primary-700 lg:p-0 dark:text-white"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 no-underline rounded bg-primary-700 lg:p-0 dark:text-white"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 no-underline rounded bg-primary-700 lg:p-0 dark:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
