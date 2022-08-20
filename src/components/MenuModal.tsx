import { Button, Modal } from "@mantine/core";
import Link from "next/link";
import Router from "next/router";

type Props = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<boolean>;
};
export const MenuModal = (props: Props) => {
  type MenuType = {
    name: string;
    link: string;
  };
  const menuList: MenuType[] = [
    {
      name: "About",
      link: "/About",
    },
    {
      name: "Blog",
      link: "/Blog",
    },
    {
      name: "Portfolio",
      link: "/Portfolio",
    },
    {
      name: "Contact",
      link: "/Contact",
    },
  ];

  const closeModal = () => {
    props.setIsOpened(false);
  };

  const handleGoPage = (link: string) => {
    props.setIsOpened(false);
    Router.push(link);
  };

  return (
    <>
      <Modal opened={props.isOpened} onClose={closeModal} title="Menu">
        <section>
          {menuList.map((menu, index) => {
            return (
              <div key={index} className="my-4">
                <button
                  className="text-black bg-transparent text-xl border-none"
                  onClick={() => handleGoPage(menu.link)}
                >
                  {menu.name}
                </button>
                {/* <Link href={menu.link}>{menu.name}</Link> */}
              </div>
            );
          })}
        </section>
      </Modal>
    </>
  );
};
