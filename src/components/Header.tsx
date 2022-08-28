import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { menuList, MenuModal } from "src/components/MenuModal";

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
          <Link href="/" className="flex items-center no-underline place-items-center">
            <span className="font-bold text-gray-700 hover:cursor-pointer place-items-center items-center">
              Yama IT Portfolio
            </span>
          </Link>
          <div className="justify-between flex w-auto">
            <ul className="md:flex hidden mt-4 flex-row md:space-x-8 lg:mt-0 list-none font-bold">
              {menuList.map((menu, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={menu.link}
                      className="block px-4 text-gray-700 no-underline rounded bg-primary-700 md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      <span className="hover:cursor-pointer">{menu.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <MenuModal isOpened={isOpened} setIsOpened={setIsOpened} />
      </nav>
    </header>
  );
};
