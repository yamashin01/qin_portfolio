import { Title } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { client } from "src/libs/client";

export type BlogType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
};

type Props = MicroCMSListResponse<BlogType>;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<BlogType>({ endpoint: "blog" });
  return {
    props: data,
  };
};

const Blog: NextPage<Props> = (props) => {
  return (
    <>
      <div className="border border-gray-200 py-4">
        <Title>Blog</Title>
      </div>
      <p>{props.totalCount}件の記事</p>
      {props.contents.map((content) => {
        return (
          <div key={content.id} className="mb-4">
            <Link href={`/Blog/${content.id}`}>
              <a>{content.title}</a>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Blog;
