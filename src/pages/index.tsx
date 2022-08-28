import { Button, Title } from "@mantine/core";
import Image from "next/image";
import Router from "next/router";
import React from "react";
import { FaFacebook, FaRss, FaTwitter } from "react-icons/fa";
import { portfolioList } from "src/pages/Portfolio";
import { Blog } from "./Blog";
import portfolioImg from "public/programing_img.jpg";
import { Github } from "src/components/Github";
import { Twitter } from "src/components/Twitter";
import Link from "next/link";
import { GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";
import { MicroCMSListResponse } from "microcms-js-sdk";

type Props = MicroCMSListResponse<Blog>;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  return {
    props: data,
  };
};

const Home: NextPage<Props> = (props) => {
  const handleGoBlog = () => {
    Router.push("/Blog");
  };
  const handleGoPortfolio = () => {
    Router.push("/Portfolio");
  };

  return (
    <div>
      <div className="md:flex bg-pink-500 text-white h-72 md:h-56 justify-between mb-12 place-content-center">
        <div className="ml-4 md:ml-20">
          <div className="text-3xl font-extrabold pt-20 align-middle">
            Yama IT Portfolio
          </div>
          <div className="align-middle">
            ヤマのITポートフォリオのページです。
          </div>
        </div>
        <div className="flex md:mr-40 ml-4 md:ml-20 pt-4 md:pt-24 md:justify-between text-xl">
          <div className="mr-2 cursor-pointer">
            <Link href="https://twitter.com/yamashin0413">
              <FaTwitter />
            </Link>
          </div>
          <div className="mr-2 cursor-pointer">
            <Link href="https://www.facebook.com/syamada01">
              <FaFacebook />
            </Link>
          </div>
          <div className="mr-2 cursor-pointer">
            <Link href="/">
              <FaRss />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="border border-gray-200 py-4">
            <Title>Blog</Title>
          </div>
          {props.contents.map((content, index) => {
            return index < 5 ? (
              <div key={content.id} className="mb-4">
                <h3>{content.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: content.body}} />
                <small>{content.publishedAt}</small>
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
                  <div>{portfolio.body}</div>
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
