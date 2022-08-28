import { Text, Title } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "src/libs/client";
import { format } from "date-fns";
import alt_image from "public/programing_img.jpg";

export type PortfolioType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  image?: {
    url: string;
  };
  url?: string;
};

type Props = MicroCMSListResponse<PortfolioType>;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<PortfolioType>({ endpoint: "portfolio" });
  return {
    props: data,
  };
};

const Portfolio: NextPage<Props> = (props) => {
  return (
    <>
      <div className="border border-gray-200 py-4">
        <Title>Portfolio</Title>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {props.contents.map((content) => {
          return (
            <div key={content.id} className="col-span-1">
              <div className="text-center">
                <Link href={`/Portfolio/${content.id}`}>
                  <Title order={3}>{content.title}</Title>
                </Link>
              </div>
              {content.image?.url ? 
              <div>
                <div className="hover:cursor-pointer">
                  <Link href={`/Portfolio/${content.id}`}>
                    <Image
                      src={content.image.url}
                      alt="portfolioImg"
                      width={360}
                      height={240}
                      layout="responsive"
                      />
                  </Link>
                </div>
              </div> : 
                <div className="hover:cursor-pointer">
                <Link href={`/Portfolio/${content.id}`}>
                  <Image
                    src={alt_image}
                    alt="alt_image"
                    width={360}
                    height={240}
                    layout="responsive"
                    />
                </Link>
              </div>
            }
              <div>
                <Text lineClamp={2}>
                  <div dangerouslySetInnerHTML={{ __html: content.body}} />
                </Text>
              </div>
              <div className="text-right">
                <small>{format(new Date(content.publishedAt), "yyyy.MM.dd")}</small>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default Portfolio;
