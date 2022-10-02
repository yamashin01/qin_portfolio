import { Text, Title } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "src/libs/client";
import { format } from "date-fns";
import alt_image from "public/programing_img.jpg";
import { PortfolioType } from "src/types/types";
import React from "react";

type Props = MicroCMSListResponse<PortfolioType>;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<PortfolioType>({ endpoint: "portfolio" });
  return {
    props: data,
    revalidate: 10,
  };
};

const Portfolio: NextPage<Props> = (props) => {
  return (
    <>
      <div className="py-4">
        <Title>Portfolio</Title>
      </div>
      <div className="bg-gray-100 h-px rounded-full mb-8" />
      <div className="grid md:grid-cols-3 gap-4">
        {props.contents.map((content) => {
          return (
            <div key={content.id} className="col-span-1">
              {content.image?.url ? 
              <div>
                <div className="cursor-pointer">
                  <Link href={`/Portfolio/${content.id}`}>
                    <>
                      <Image
                        src={content.image.url}
                        alt="portfolioImg"
                        width={360}
                        height={240}
                        layout="responsive"
                        objectFit="contain"
                      />
                    </>
                  </Link>
                </div>
              </div> : 
              <div className="cursor-pointer">
                <Link href={`/Portfolio/${content.id}`}>
                  <>
                    <Image
                      src={alt_image}
                      alt="alt_image"
                      width={360}
                      height={240}
                      layout="responsive"
                    />
                  </>
                </Link>
              </div>
            }
              <div className="text-center text-blue-500 hover:text-blue-800 cursor-pointer pt-4">
                <Link href={`/Portfolio/${content.id}`}>
                  <Title order={3}>{content.title}</Title>
                </Link>
              </div>
              <div>
                <Text lineClamp={2}>
                  <div dangerouslySetInnerHTML={{ __html: content.body}} />
                </Text>
              </div>
              <div className="text-right">
                <small>{format(new Date(content.publishedAt), "yyyy.MM.dd")}</small>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
