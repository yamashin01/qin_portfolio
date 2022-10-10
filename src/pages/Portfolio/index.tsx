import { Card, Group, Text, Title } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "src/libs/client";
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
        {props.contents.map((content) => (
          <div key={content.id} className="col-span-1 mb-8">
            <Link href={`/Portfolio/${content.id}`}>
              <a className="no-underline">
                <Card withBorder shadow="sm" radius="md">
                  <Card.Section withBorder inheritPadding py="xs">
                    <Group position="apart">
                      <Text weight={500}>{content.title}</Text>
                    </Group>
                  </Card.Section>
                  <Text size="sm" color="dimmed" lineClamp={2}>
                      <div dangerouslySetInnerHTML={{ __html: content.body}} />
                  </Text>

                  <Card.Section mt="sm" className="text-center">
                    {content.image?.url ? 
                      <Image
                        src={content.image.url}
                        width={360}
                        height={240}
                        objectFit="contain"
                        alt="blog_image"
                        /> : 
                        <Image
                        src={alt_image.src}
                        width={360}
                        height={240}
                        objectFit="contain"
                        alt="alt_image"
                      />
                    }
                  </Card.Section>
                </Card>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
