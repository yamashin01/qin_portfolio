import { Button, Title } from "@mantine/core";
import Image from "next/image";
import Router from "next/router";
import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { portfolioList } from "src/pages/Portfolio";
import { blogList } from "./Blog";
import portfolioImg from "public/programing_img.jpg";

const Home = () => {
  const handleGoBlog = () => {
    Router.push("/Blog");
  };
  const handleGoPortfolio = () => {
    Router.push("/Portfolio");
  };

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

      <div>
        <div>
          <div className="border border-gray-200 py-4">
            <Title>Blog</Title>
          </div>
          {blogList.map((blog, index) => {
            return index < 5 ? (
              <div key={blog.title} className="mb-4">
                <h3>{blog.title}</h3>
                <div>{blog.content}</div>
                <small>{blog.createDate}</small>
              </div>
            ) : null;
          })}
          <div className="text-center">
            <Button color="dark" radius="xl" onClick={handleGoBlog}>
              View All
            </Button>
          </div>
        </div>

        <div className="my-20">
          <div className="border border-gray-200 py-4">
            <Title>Portfolio</Title>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {portfolioList.map((portfolio, index) => {
              return index < 6 ? (
                <div key={portfolio.title} className="mb-4">
                  <Image
                    src={portfolioImg}
                    alt="portfolioImg"
                    width={360}
                    height={240}
                  />
                  <h3>{portfolio.title}</h3>
                  <div>{portfolio.content}</div>
                  <small>{portfolio.createdPeriod}</small>
                </div>
              ) : null;
            })}
          </div>
          <div className="text-center">
            <Button color="dark" radius="xl" onClick={handleGoPortfolio}>
              View All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
