import { Modal } from "@mantine/core";
import Router from "next/router";

type MenuType = {
  name: string;
  link: string;
};
export const menuList: MenuType[] = [
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

type Props = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<boolean>;
};
export const MenuModal = (props: Props) => {
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
        opened={props.isOpened}
        onClose={closeModal}
        className="bg-pink-500"
      >
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
              </div>
            );
          })}
        </section>
      </Modal>
    </>
  );
};
