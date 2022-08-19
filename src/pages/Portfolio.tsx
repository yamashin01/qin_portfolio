import { Title } from "@mantine/core";
import Image from "next/image";
import portfolioImg from "public/programing_img.jpg";

type PortfolioType = {
  title: string;
  content: string;
  createdPeriod: string;
};

export const portfolioList: PortfolioType[] = [
  {
    title: "IT KINGDOM",
    content:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    createdPeriod: "2021.10 - 2021.12",
  },
  {
    title: "IT KINGDOM",
    content:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    createdPeriod: "2021.10 - 2021.12",
  },
  {
    title: "IT KINGDOM",
    content:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    createdPeriod: "2021.10 - 2021.12",
  },
  {
    title: "IT KINGDOM",
    content:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    createdPeriod: "2021.10 - 2021.12",
  },
  {
    title: "IT KINGDOM",
    content:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    createdPeriod: "2021.10 - 2021.12",
  },
  {
    title: "IT KINGDOM",
    content:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    createdPeriod: "2021.10 - 2021.12",
  },
];

const Portfolio = () => {
  return (
    <>
      <div className="border border-gray-200 py-4">
        <Title>Portfolio</Title>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {portfolioList.map((portfolio) => {
          return (
            <div key={portfolio.title} className="mb-4">
              <Image
                src={portfolioImg}
                alt="portfolioImg"
                width={360}
                height={240}
              />
              <h3>{portfolio.title}</h3>
              <div>{portfolio.content}</div>
              <small>{portfolio.createdPeriod}</small>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Portfolio;
