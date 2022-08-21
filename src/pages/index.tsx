import { Button, Title } from "@mantine/core";
import Image from "next/image";
import Router from "next/router";
import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { portfolioList } from "src/pages/Portfolio";
import { blogList } from "./Blog";
import portfolioImg from "public/programing_img.jpg";
import { Github } from "src/components/Github";
import { Twitter } from "src/components/Twitter";

const Home = () => {
  const handleGoBlog = () => {
    Router.push("/Blog");
  };
  const handleGoPortfolio = () => {
    Router.push("/Portfolio");
  };

  return (
    <div>
      <div className="md:flex container w-auto bg-pink-500 text-white h-72 md:h-56 justify-between mb-12 place-content-center">
        <div className="ml-4 md:ml-20">
          <div className="text-3xl font-extrabold pt-20 align-middle">
            Yama IT Portfolio
          </div>
          <div className="align-middle">
            ヤマのITポートフォリオのページです。
          </div>
        </div>
        <div className="flex md:mr-40 ml-4 md:ml-20 pt-4 md:pt-24 md:justify-between">
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
              <div key={index} className="mb-4">
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
          <div className="grid md:grid-cols-3 gap-2">
            {portfolioList.map((portfolio, index) => {
              return index < 6 ? (
                <div key={index} className="mb-4">
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
        <div className="md:flex my-20 justify-between">
          <Github />
          <div className="w-1/6"></div>
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default Home;
