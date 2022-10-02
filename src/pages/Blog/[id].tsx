import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";
import { format } from "date-fns";
import { BlogType } from "src/types/types";
import React from "react";
import { Button } from "@mantine/core";
import Router from "next/router";
import Image from "next/image";

type Props = BlogType & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  const handleBack = () => {
    Router.back();
  };
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="bg-gray-100 h-px rounded-full mb-8" />
      <div className="text-center">
        {props.image?.url ? 
          <Image
          src={props.image.url}
          alt="portfolio Image"
          width={360}
          height={240}
          objectFit="contain" 
          /> : null
        }
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.body }} />
      <div className="text-gray-500 text-right">
        <time>{format(new Date(props.publishedAt), "yyyy.MM.dd")}</time>
      </div>
      <div className="mt-8">
        <Button onClick={handleBack}>戻る</Button>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/Blog/${content.id}`);
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
  const data = await client.getListDetail<BlogType>({
    endpoint: "blog",
    contentId: ctx.params.id,
  });

  return {
    props: data,
    revalidate: 10,  // regenerated once in 10 seconds
  };
};
export default BlogId;
