import { Button, Text, Title, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import topImg from "public/top1.jpg";
import topImg2 from "public/top2.jpg";
import portfolioImg from "public/programing_img.jpg";
import { Github } from "src/components/Github";
import { Twitter } from "src/components/Twitter";
import Link from "next/link";
import { GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";
import { format } from "date-fns";
import { BlogType, IndexProps, PortfolioType } from "src/types/types";
import { TwitterApi } from "twitter-api-v2";
import { IconContext } from "react-icons";

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
    },
    revalidate: 10,
  };
};

const Home: NextPage<IndexProps> = (props) => {
  const theme = useMantineTheme();
  const { blogData, portfolioData, twitterData } = props;

  return (
    <div>
      <div className="relative">
        <div className="w-full">
          {theme.colorScheme === 'dark' ? 
            <Image 
            src={topImg}
            alt="topImg"
            /> :
            <Image 
            src={topImg2}
            alt="topImg2"
            />  
          }
        </div>
        <div className="lg:flex text-gray-800 h-56 justify-between mb-12 place-content-center absolute top-0 left-0 w-full">
          <div className="ml-4 md:ml-20" style={theme.colorScheme === 'dark' ? {color: '#606060'} : {color: 'white'}}>
            <div className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-extrabold pt-4 md:pt-12 lg:pt-20 xl:pt-36 align-middle">
              Yama IT Portfolio
            </div>
            <div className="align-middle text-sm xl:text-xl">
              ヤマのITポートフォリオのページです。
            </div>
          </div>
          <div className="flex lg:mr-40 ml-4 md:ml-20 md:pt-4 lg:pt-24 xl:pt-36 lg:justify-between md:text-xl xl:text-2xl">
            <div className="mr-2 cursor-pointer">
              <IconContext.Provider value={theme.colorScheme === 'dark' ? {color: '#606060'} : {color: 'white'}}>
                <a href="https://twitter.com/yamashin0413" target="_blank" rel="external author noreferrer">
                  <FaTwitter />
                </a>
              </IconContext.Provider>
            </div>
            <div className="mr-2 cursor-pointer">
              <IconContext.Provider value={theme.colorScheme === 'dark' ? {color: '#606060'} : {color: 'white'}}>
                <a href="https://www.facebook.com/syamada01" target="_blank" rel="external author noreferrer">
                  <FaFacebook />
                </a>
              </IconContext.Provider>
            </div>
            <div className="mr-2 cursor-pointer">
              <IconContext.Provider value={theme.colorScheme === 'dark' ? {color: '#606060'} : {color: 'white'}}>
                <a href="https://github.com/yamashin01" target="_blank" rel="external author noreferrer">
                  <FaGithub />
                </a>
              </IconContext.Provider>
            </div>
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
                <div className="cursor-pointer text-blue-500 hover:text-blue-800">
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
            <Link href="/Blog" passHref>
              <Button color={theme.colorScheme === 'dark' ? "gray" : "dark"} radius="xl" component="a">View All</Button>
            </Link>
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
                  <div className="cursor-pointer text-center">
                    <Link href={`/Portfolio/${content.id}`}>
                      <>
                        {content.image?.url ? 
                        <Image
                        src={content.image?.url}
                        alt="portfolioImg"
                        width={360}
                        height={240}
                        objectFit="contain"
                        /> :
                        <Image
                          src={portfolioImg}
                          alt="portfolioImg"
                          width={360}
                          height={240}
                        />
                        }
                      </>
                    </Link>
                  </div>
                  <div className="cursor-pointer text-blue-500 hover:text-blue-800">
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
            <Link href="/Portfolio" passHref>
              <Button color={theme.colorScheme === 'dark' ? "gray" : "dark"} radius="xl" component="a">View All</Button>
            </Link>
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
