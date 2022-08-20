import { Title } from "@mantine/core";
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
    title: "しまぶーのIT大学",
    account: "@shimabu_it・5月25日",
    article: `📯新サービス「Noway Form」をリリースしました！\n
      Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormでやっていたことがNotionだけで完結します✌️✨
      試しに使っていただけると幸いです😊
      
      https://www.noway-form.com/ja`,
  },
  {
    title: "しまぶーのIT大学",
    account: "@shimabu_it・5月25日",
    article: `📯新サービス「Noway Form」をリリースしました！
      Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormでやっていたことがNotionだけで完結します✌️✨
      試しに使っていただけると幸いです😊
      
      https://www.noway-form.com/ja`,
  },
  {
    title: "しまぶーのIT大学",
    account: "@shimabu_it・5月25日",
    article: `📯新サービス「Noway Form」をリリースしました！
      Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormでやっていたことがNotionだけで完結します✌️✨
      試しに使っていただけると幸いです😊
      
      https://www.noway-form.com/ja`,
  },
  {
    title: "しまぶーのIT大学",
    account: "@shimabu_it・5月25日",
    article: `📯新サービス「Noway Form」をリリースしました！
      Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormでやっていたことがNotionだけで完結します✌️✨
      試しに使っていただけると幸いです😊
      
      https://www.noway-form.com/ja`,
  },
  {
    title: "しまぶーのIT大学",
    account: "@shimabu_it・5月25日",
    article: `📯新サービス「Noway Form」をリリースしました！
      Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormでやっていたことがNotionだけで完結します✌️✨
      試しに使っていただけると幸いです😊
      
      https://www.noway-form.com/ja`,
  },
  {
    title: "しまぶーのIT大学",
    account: "@shimabu_it・5月25日",
    article: `📯新サービス「Noway Form」をリリースしました！
      Noway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormでやっていたことがNotionだけで完結します✌️✨
      試しに使っていただけると幸いです😊
      
      https://www.noway-form.com/ja`,
  },
];

export const Twitter = () => {
  return (
    <div className="w-full">
      <div className="border border-gray-200 w-full py-4">
        <Title>Twitter</Title>
      </div>
      <div className="">
        {twitterArticleList.map((twitterArticle, index) => {
          return index < 3 ? (
            <div key={index} className="mb-8 flex">
              <div className="m-2">
                <Image
                  src={twitterIcon}
                  alt="twitter-icon"
                  width={200}
                  height={200}
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
                <p className="text-gray-600 my-2 text-sm">
                  {twitterArticle.article}
                </p>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};