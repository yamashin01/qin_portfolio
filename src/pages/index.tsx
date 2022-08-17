import { Title } from "@mantine/core";
import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Blog } from "src/components/Blog";
import { Portfolio } from "src/components/Portfolio";

const Home = () => {
  return (
    <div>
      <div className="flex container bg-pink-500 text-white h-56 justify-between mb-12">
        <div className="h-full place-content-center">
          <div className="text-3xl font-extrabold ml-20 pt-20 align-middle">
            Yama IT Portfolio
          </div>
          <div className="align-middle ml-20">
            ヤマのITポートフォリオのページです。
          </div>
        </div>
        <div className="flex mr-40 pt-24 justify-between w-30">
          <div className="mr-2">
            <FaTwitter />
          </div>
          <div className="mr-2">
            <FaFacebook />
          </div>
          <div className="mr-2">
            <FaGithub />
          </div>
        </div>
      </div>

      <div className="mx-20">
        <Blog />
        <Portfolio />
      </div>
    </div>
  );
};

export default Home;
