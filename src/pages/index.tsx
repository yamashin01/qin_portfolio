import { Button, Text, Title } from "@mantine/core";
import Image from "next/image";
import Router from "next/router";
import React from "react";
import { FaFacebook, FaRss, FaTwitter } from "react-icons/fa";
import portfolioImg from "public/programing_img.jpg";
import { Github } from "src/components/Github";
import { Twitter } from "src/components/Twitter";
import Link from "next/link";
import { GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { format } from "date-fns";
import { BlogType, PortfolioType } from "src/types/types";

export type MicroCMSProps = {
  blogData: MicroCMSListResponse<BlogType>;
  portfolioData: MicroCMSListResponse<PortfolioType>;
};

export const getStaticProps: GetStaticProps<MicroCMSProps> = async () => {
  const blogData = await client.getList<BlogType>({ endpoint: "blog" });
  const portfolioData = await client.getList<PortfolioType>({ endpoint: "portfolio" });
  return {
    props: {
      blogData,
      portfolioData,
    }
  };
};

const Home: NextPage<MicroCMSProps> = (props) => {
  const handleGoBlog = () => {
    Router.push("/Blog");
  };
  const handleGoPortfolio = () => {
    Router.push("/Portfolio");
  };

  return (
    <div>
      <div className="lg:flex bg-blue-800 text-white h-56 justify-between mb-12 place-content-center">
        <div className="ml-4 md:ml-20">
          <div className="text-xl md:text-3xl font-extrabold pt-12 lg:pt-20 align-middle">
            Yama IT Portfolio
          </div>
          <div className="align-middle">
            ヤマのITポートフォリオのページです。
          </div>
        </div>
        <div className="flex lg:mr-40 ml-4 md:ml-20 pt-4 lg:pt-24 lg:justify-between text-xl">
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
          <div className="border-b-2 border-solid border-b-gray-100 border-x-white border-t-white py-4 mb-8">
            <Title>Blog</Title>
          </div>
          {props.blogData.contents.map((content, index) => {
            return index < 5 ? (
              <div key={content.id} className="mb-4">
                <div className="hover:cursor-pointer text-blue-500 hover:text-blue-800">
                  <Link href={`Blog/${content.id}`}>
                    <h3 className="mb-0">{content.title}</h3>
                  </Link>
                </div>
                <Text lineClamp={2}>
                  <div dangerouslySetInnerHTML={{ __html: content.body}} />
                </Text>
                <div className="text-right">
                  <small>{format(new Date(content.publishedAt), "yyyy.MM.dd")}</small>
                </div>
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
          <div className="border-b-2 border-solid border-b-gray-100 border-x-white border-t-white py-4 mb-8">
            <Title>Portfolio</Title>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {props.portfolioData.contents.map((content, index) => {
              return index < 6 ? (
                <div key={index} className="mb-4">
                  <div className="hover:cursor-pointer text-center">
                    <Link href={`/Portfolio/${content.id}`}>
                      <Image
                        src={portfolioImg}
                        alt="portfolioImg"
                        width={360}
                        height={240}
                        />
                    </Link>
                  </div>
                  <div className="hover:cursor-pointer text-blue-500 hover:text-blue-800">
                    <Link href={`/Portfolio/${content.id}`}>
                      <h3 className="text-center mb-0">{content.title}</h3>
                    </Link>
                  </div>
                  <div className="my-4">
                    <Text lineClamp={2}><div dangerouslySetInnerHTML={{ __html: content.body }} /></Text>
                  </div>
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
