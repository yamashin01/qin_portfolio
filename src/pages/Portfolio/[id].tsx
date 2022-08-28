import { Button, Title } from "@mantine/core";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { client } from "src/libs/client";
import { PortfolioType } from "src/types/types";

type Props = PortfolioType & MicroCMSContentId & MicroCMSDate;

const PortfolioId: NextPage<Props> = (props) => {
    const handleBack = () => {
        Router.back();
    }
  return (
    <div className="container w-auto">
      <div className="mb-8">
        <div className="mb-8"> 
            {props.url ? 
            <div className="hover:cursor-pointer hover:text-blue-800 text-blue-500">
                <Link href={props.url}>
                    <Title order={2}>{props.title}</Title>
                </Link>
            </div>
            : <Title order={2}>{props.title}</Title>
            }
        </div>
        {props.image?.url ?
        <div className="items-center text-center">
            <Image
                src={props.image.url}
                alt="portfolio Image"
                width={360}
                height={240}
                />
        </div> : null
        }
        <div dangerouslySetInnerHTML={{ __html: props.body }} />
      </div>
      <div>
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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true };
  }
  const data = await client.getListDetail<PortfolioType>({
    endpoint: "portfolio",
    contentId: ctx.params.id,
  });

  return {
    props: data,
  };
};
export default PortfolioId;