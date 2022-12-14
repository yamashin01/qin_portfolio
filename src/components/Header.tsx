import { ActionIcon, Burger, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";
import { menuList, MenuModal } from "src/components/MenuModal";

export const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <header>
      <nav className="py-2.5 sm:mx-20 mx-4">
        <div className="flex flex-wrap justify-between items-center">
          <Burger
            opened={isOpened}
            onClick={() => setIsOpened((opened) => !opened)}
            color={dark ? "#fff" : "#000"}
            className="md:hidden"
          />
          <Link href="/" className="flex items-center no-underline place-items-center">
            <span className="font-bold cursor-pointer place-items-center items-center">
              Yama IT Portfolio
            </span>
          </Link>
          <div className="justify-between flex w-auto items-center">
            <ul className="md:flex hidden mt-4 flex-row md:space-x-8 list-none font-bold">
              {menuList.map((menu) => (
                <li key={menu.id}>
                  <Link
                    href={menu.link}
                    className="block px-4 text-gray-700 no-underline rounded bg-primary-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    <span className="cursor-pointer">{menu.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ml-4 justify-end right-4">
              <ActionIcon
                variant="outline"
                color={dark ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
              >
                {dark ? <FaSun size={18} /> : <FaRegMoon size={18} />}
              </ActionIcon>            
            </div>
          </div>
        </div>
        <MenuModal isOpened={isOpened} setIsOpened={setIsOpened} />
      </nav>
    </header>
  );
};
