import { Card, Group, Text, Title, Image } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { client } from "src/libs/client";
import { BlogType } from "src/types/types";
import { format } from "date-fns";
import React from "react";
import alt_image from "public/blog_img.jpg";

type Props = MicroCMSListResponse<BlogType>;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<BlogType>({ endpoint: "blog" });
  return {
    props: data,
    revalidate: 10,
  };
};

const Blog: NextPage<Props> = (props) => {
  return (
    <>
      <div className="py-4">
        <Title>Blog</Title>
      </div>
      <div className="bg-gray-100 h-px rounded-full mb-8" />
      <div className="grid md:grid-cols-3 gap-4">
        {props.contents.map((content) => (
          <Link key={content.id} href={`/Blog/${content.id}`}>
            <Card shadow="sm" p="lg" radius="md" withBorder className="cursor-pointer">
              <Card.Section>
                {content.image?.url ? 
                  <Image
                    src={content.image.url}
                    height={160}
                    alt="blog_image"
                  /> : 
                  <Image
                    src={alt_image.src}
                    height={160}
                    alt="alt_image"
                  />
                }
              </Card.Section>
              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{content.title}</Text>
              </Group>
              <Text size="sm" color="dimmed" lineClamp={2}>
                <div dangerouslySetInnerHTML={{ __html: content.body}} />
              </Text>
              <div className="text-gray-500 text-right">
                <small>{format(new Date(content.publishedAt), "yyyy.MM.dd")}</small>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blog;
