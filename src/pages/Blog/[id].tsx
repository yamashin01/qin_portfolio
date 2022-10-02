import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";
import { format } from "date-fns";
import { BlogType } from "src/types/types";
import React from "react";
import { Button } from "@mantine/core";
import Router from "next/router";

type Props = BlogType & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  const handleBack = () => {
    Router.back();
  };
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="bg-gray-100 h-px rounded-full mb-8" />
      <time>{format(new Date(props.publishedAt), "yyyy.MM.dd")}</time>
      <div dangerouslySetInnerHTML={{ __html: props.body }} />
      <div>
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
