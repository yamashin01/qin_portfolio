import { Modal, useMantineTheme } from "@mantine/core";
import Router from "next/router";
import React from "react";

type MenuType = {
  id: number;
  name: string;
  link: string;
};
export const menuList: MenuType[] = [
  {
    id: 0,
    name: "About",
    link: "/About",
  },
  {
    id: 1,
    name: "Blog",
    link: "/Blog",
  },
  {
    id: 2,
    name: "Portfolio",
    link: "/Portfolio",
  },
  {
    id: 3,
    name: "Contact",
    link: "/Contact",
  },
];

type Props = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<boolean>;
};
export const MenuModal = (props: Props) => {
  const theme = useMantineTheme();

  const closeModal = () => {
    props.setIsOpened(false);
  };

  const handleGoPage = (link: string) => {
    props.setIsOpened(false);
    Router.push(link);
  };

  return (
    <>
      <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        color={theme.colorScheme === 'dark' ? 'blue' : 'white'}
        opened={props.isOpened}
        onClose={closeModal}
      >
        <section>
          {menuList.map((menu) => {
            return (
              <div key={menu.id} className="my-4">
                <div className="text-xl" onClick={() => handleGoPage(menu.link)}>
                  {menu.name}
                </div>
              </div>
            );
          })}
        </section>
      </Modal>
    </>
  );
};
