import { Button, Text, Title, useMantineTheme } from "@mantine/core";
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
import { format } from "date-fns";
import { BlogType, IndexProps, PortfolioType } from "src/types/types";
import { TwitterApi } from "twitter-api-v2";

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await client.getList<BlogType>({ endpoint: "blog" });
  const portfolioData = await client.getList<PortfolioType>({ endpoint: "portfolio" });

  // Twitter
  // https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/user
  // https://github.com/PLhery/node-twitter-api-v2/blob/3d3dad74fc9e0870f1f30121286336ecce6a54eb/doc/v2.md#Users
  // https://developer.twitter.com/en/docs/twitter-api/pagination
  // https://github.com/PLhery/node-twitter-api-v2
  const twitterClient = new TwitterApi(process.env.TWITTER_BEARER_TOKEN || "");
  const readOnlyClient = twitterClient.readOnly;
  const { data } = await readOnlyClient.v2.userByUsername("yamashin0413", {
    "user.fields": ["profile_image_url"],
  });
  const { tweets } = await twitterClient.v2.userTimeline(data.id, { "tweet.fields": ["created_at"], max_results: 5 });

  return {
    props: {
      blogData,
      portfolioData,
      twitterData: { profile: data, tweets }
    }
  };
};

const Home: NextPage<IndexProps> = (props) => {
  const theme = useMantineTheme();
  const { blogData, portfolioData, twitterData } = props;

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
              <>
                <FaTwitter />
              </>
            </Link>
          </div>
          <div className="mr-2 cursor-pointer">
            <Link href="https://www.facebook.com/syamada01">
              <>
                <FaFacebook />
              </>
            </Link>
          </div>
          <div className="mr-2 cursor-pointer">
            <Link href="/">
              <>
                <FaRss />
              </>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="py-4">
            <Title>Blog</Title>
          </div>
          <div className="bg-gray-100 h-px rounded-full mb-8" />
          {blogData.contents.map((content, index) => {
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
            <Button color={theme.colorScheme === 'dark' ? "gray" : "dark"} radius="xl" onClick={handleGoBlog}>
              View All
            </Button>
          </div>
        </div>

        <div className="my-20">
          <div className="py-4">
            <Title>Portfolio</Title>
          </div>
          <div className="bg-gray-100 h-px rounded-full mb-8" />
          <div className="grid md:grid-cols-3 gap-4">
            {portfolioData.contents.map((content, index) => {
              return index < 6 ? (
                <div key={content.id} className="mb-4">
                  <div className="hover:cursor-pointer text-center">
                    <Link href={`/Portfolio/${content.id}`}>
                      <>
                        <Image
                          src={portfolioImg}
                          alt="portfolioImg"
                          width={360}
                          height={240}
                        />
                      </>
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
            <Button color={theme.colorScheme === 'dark' ? "gray" : "dark"} radius="xl" onClick={handleGoPortfolio}>
              View All
            </Button>
          </div>
        </div>
        <div className="md:flex my-20 justify-between">
          <Github />
          <div className="w-1/6"></div>
          <Twitter {...twitterData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
