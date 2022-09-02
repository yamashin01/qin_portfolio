import { Button, Title, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import React from "react";
import twitterIcon from "public/myImage.jpeg";

type TwitterType = {
  title: string;
  account: string;
  article?: string;
};

const twitterArticleList: TwitterType[] = [
  {
    title: "ヤマさん@システムエンジニアからWebエンジニアへ",
    account: "@yamashin0413・5月25日",
    article: `📯新サービス「Noway Form」をリリースしました！
Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormでやっていたことがNotionだけで完結します✌️✨
試しに使っていただけると幸いです😊

https://www.noway-form.com/ja`,
  },
  {
    title: "ヤマさん@システムエンジニアからWebエンジニアへ",
    account: "@yamashin0413・5月25日",
    article: `📯新サービス「Noway Form」をリリースしました！
Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormでやっていたことがNotionだけで完結します✌️✨
試しに使っていただけると幸いです😊
      
https://www.noway-form.com/ja`,
  },
  {
    title: "ヤマさん@システムエンジニアからWebエンジニアへ",
    account: "@yamashin0413・5月25日",
    article: `📯新サービス「Noway Form」をリリースしました！
Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormでやっていたことがNotionだけで完結します✌️✨
試しに使っていただけると幸いです😊

https://www.noway-form.com/ja`,
  },
  {
    title: "ヤマさん@システムエンジニアからWebエンジニアへ",
    account: "@yamashin0413・5月25日",
    article: `📯新サービス「Noway Form」をリリースしました！
Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormでやっていたことがNotionだけで完結します✌️✨
試しに使っていただけると幸いです😊

https://www.noway-form.com/ja`,
  },
  {
    title: "ヤマさん@システムエンジニアからWebエンジニアへ",
    account: "@yamashin0413・5月25日",
    article: `📯新サービス「Noway Form」をリリースしました！
Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormでやっていたことがNotionだけで完結します✌️✨
試しに使っていただけると幸いです😊

https://www.noway-form.com/ja`,
  },
  {
    title: "ヤマさん@システムエンジニアからWebエンジニアへ",
    account: "@yamashin0413・5月25日",
    article: `📯新サービス「Noway Form」をリリースしました！
Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormでやっていたことがNotionだけで完結します✌️✨
試しに使っていただけると幸いです😊

https://www.noway-form.com/ja`,
  },
];

export const Twitter = () => {
  const theme = useMantineTheme();

  const handleGoTwitter = () => {
    window.location.href = "https://twitter.com/yamashin0413";
  };

  return (
    <div className="w-full">
      <div className="py-4">
        <Title>Twitter</Title>
      </div>
      <div className="bg-gray-100 h-px rounded-full mb-8" />
      <div>
        {twitterArticleList.map((twitterArticle, index) => {
          return index < 3 ? (
            <div key={index} className="mb-8 flex">
              <div className="m-2">
                <Image
                  src={twitterIcon}
                  alt="twitter-icon"
                  width={150}
                  height={150}
                  className="items-center rounded-full"
                />
              </div>
              <div>
                <div className="flex">
                  <div className="mr-2">{twitterArticle.title}</div>
                  <div className="text-xs text-gray-600 align-middle">
                    {twitterArticle.account}
                  </div>
                </div>
                <p className="text-gray-600 my-2 text-sm whitespace-pre-wrap">
                  {twitterArticle.article}
                </p>
              </div>
            </div>
          ) : null;
        })}
      </div>
      <div className="text-center">
        <Button color={theme.colorScheme === 'dark' ? "gray" : "dark"} radius="xl" onClick={handleGoTwitter}>
          View on Twitter
        </Button>
      </div>
    </div>
  );
};
