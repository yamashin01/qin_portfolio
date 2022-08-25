import { Button, Title } from "@mantine/core";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { client } from "src/libs/client";
import { PortfolioType } from ".";

type Props = PortfolioType & MicroCMSContentId & MicroCMSDate;

const PortfolioId: NextPage<Props> = (props) => {
    const handleBack = () => {
        Router.back();
    }
  return (
    <div className="container w-auto">
      <div className="mb-8">
        {props.url ? 
        <div className="hover:cursor-pointer hover:text-blue-800 text-blue-500">
            <Link href={props.url}>
                <h1>{props.title}</h1>
            </Link>
        </div> : null
        }
        {props.image?.url ?
        <div className="flex justify-between">
            <div dangerouslySetInnerHTML={{ __html: props.body }} className="pr-8"/>
            <Image
                src={props.image.url}
                alt="img"
                width={360}
                height={360}
                />
        </div> : null
        }
        登録日：<time>{props.publishedAt}</time>
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
  console.log(data);

  return {
    props: data,
  };
};
export default PortfolioId;
