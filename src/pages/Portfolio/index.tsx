import { Title } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import portfolioImg from "public/programing_img.jpg";
import { client } from "src/libs/client";

export type PortfolioType = {
  title: string;
  body: string;
  createdPeriod: string;
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

export const portfolioList: PortfolioType[] = [
  {
    title: "IT KINGDOM",
    body:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    createdPeriod: "2021.10 - 2021.12",
  },
  {
    title: "IT KINGDOM",
    body:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    createdPeriod: "2021.10 - 2021.12",
  },
  {
    title: "IT KINGDOM",
    body:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    createdPeriod: "2021.10 - 2021.12",
  },
  {
    title: "IT KINGDOM",
    body:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    createdPeriod: "2021.10 - 2021.12",
  },
  {
    title: "IT KINGDOM",
    body:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    createdPeriod: "2021.10 - 2021.12",
  },
  {
    title: "IT KINGDOM",
    body:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    createdPeriod: "2021.10 - 2021.12",
  },
];

const Portfolio: NextPage<Props> = (props) => {
  console.log(`props = ${JSON.stringify(props)}`);
  return (
    <>
      <div className="border border-gray-200 py-4">
        <Title>Portfolio</Title>
      </div>
      <div className="grid md:grid-cols-3 gap-2">
        {props.contents.map((content) => {
          return (
            <div key={content.id}>
              <h2>{content.title}</h2>
              {content.image?.url ? 
              <div className="hover:cursor-pointer">
                <Link href={`/Portfolio/${content.id}`}>
                  <Image
                    src={content.image.url}
                    alt="portfolioImg"
                    width={240}
                    height={360}
                    />
                </Link>
              </div> : null
              }
              <small>{content.publishedAt}</small>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default Portfolio;
