import { Text, Title } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { client } from "src/libs/client";
import { BlogType } from "src/types/types";
import { format } from "date-fns";

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
      <div className="py-4">
        <Title>Blog</Title>
      </div>
      <div className="bg-gray-100 h-px rounded-full mb-8" />
      {props.contents.map((content) => {
        return (
          <div key={content.id} className="mb-4">
            <div className="no-underline text-blue-500 hover:text-blue-800 hover:cursor-pointer text-xl">
              <Link href={`/Blog/${content.id}`}>
                <Text>{content.title}</Text>
              </Link>
            </div>
            <Text lineClamp={2}>
                  <div dangerouslySetInnerHTML={{ __html: content.body}} />
                </Text>
                <div className="text-gray-500">
                  <small>{format(new Date(content.publishedAt), "yyyy.MM.dd")}</small>
                </div>
          </div>
        );
      })}
    </>
  );
};

export default Blog;
