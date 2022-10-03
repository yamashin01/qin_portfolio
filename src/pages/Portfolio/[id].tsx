import { Button, Title } from "@mantine/core";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Router from "next/router";
import { client } from "src/libs/client";
import { PortfolioType } from "src/types/types";
import React from "react";

type Props = PortfolioType & MicroCMSContentId & MicroCMSDate;

const PortfolioId: NextPage<Props> = (props) => {
  const handleBack = () => {
      Router.back();
  };
  return (
    <div className="container w-auto">
      <div className="mb-8">
        <h1>{props.title}</h1>
        <div className="bg-gray-100 h-px rounded-full mb-8" />
        <div className="md:flex justify-between flex-row-reverse">
          {props.image?.url ?
            <div className="items-center text-center relative md:w-1/3">
                <Image
                    src={props.image.url}
                    alt="portfolio Image"
                    width={360}
                    height={240}
                    layout="responsive"
                    objectFit="contain" 
                    />
            </div> : null
          }
          <div className="md:w-2/3">
            <div dangerouslySetInnerHTML={{ __html: props.body }} />
            {props.url ? 
              <div className="mt-4">
                  {props.title}へは<a href={props.url} target="_blank" rel="author external noreferrer">こちら</a>
              </div>
              : null
            }
            {props.repository ? 
              <div className="mt-4">
                  {props.title}のリポジトリは<a href={props.repository} target="_blank" rel="author external noreferrer">こちら</a>
              </div>
              : null
            }
          </div>
        </div>
      </div>
      <div className="mt-8">
          <Button onClick={handleBack}>戻る</Button>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "portfolio" });
  const ids = data.contents.map((content) => `/Portfolio/${content.id}`);
  return {
    paths: ids,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true, revalidate: 10 };
  }
  const data = await client.getListDetail<PortfolioType>({
    endpoint: "portfolio",
    contentId: ctx.params.id,
  });

  return {
    props: data,
    revalidate: 10,  // regenerated once in 10 seconds
  };
};
export default PortfolioId;
