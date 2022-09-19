import { Button, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import { FaRegStar, FaSourcetree } from "react-icons/fa";

type GitHubType = {
  id: number;
  title: string;
  article: string;
};

const githubArticleList: GitHubType[] = [
  {
    id: 0,
    title: "lightsound/next-tailwind",
    article: "Next.js starter template.",
  },
  {
    id: 1,
    title: "lightsound/next-tailwind",
    article: "Next.js starter template.",
  },
  {
    id: 2,
    title: "lightsound/next-tailwind",
    article: "Next.js starter template.",
  },
  {
    id: 3,
    title: "lightsound/next-tailwind",
    article: "Next.js starter template.",
  },
  {
    id: 4,
    title: "lightsound/next-tailwind",
    article: "Next.js starter template.",
  },
  {
    id: 5,
    title: "lightsound/next-tailwind",
    article: "Next.js starter template.",
  },
];

export const Github = () => {
  const theme = useMantineTheme();

  return (
    <div className="w-full">
      <div className="py-4">
        <Title>GitHub</Title>
      </div>
      <div className="bg-gray-100 h-px rounded-full mb-8" />
      <div>
        {githubArticleList.map((githubArticle, index) => {
          return index < 5 ? (
            <div key={githubArticle.id} className="mb-8">
              <p className="my-2">{githubArticle.title}</p>
              <p className="text-gray-600 my-2 text-sm">
                {githubArticle.article}
              </p>
              <div>
                <FaRegStar />
                <span className="ml-2 mr-4 text-xs items-center">117</span>
                <FaSourcetree />
                <span className="ml-2 text-xs items-center">18</span>
              </div>
              <div className="flex my-2">
                <div className="bg-blue-600 w-2/3 h-2 rounded-l-full"></div>
                <div className="bg-yellow-300 w-1/4 h-2"></div>
                <div className="bg-gray-300 w-1/12 h-2 rounded-r-full"></div>
              </div>
              <div className="flex text-xs justify-between">
                <div>
                  <span className="text-blue-600">●</span>
                  <span className="font-bold mx-2">Typescript</span>{" "}
                  <span className="text-gray-600">65.5%</span>
                </div>
                <div>
                  <span className="text-yellow-300">●</span>
                  <span className="font-bold mx-2">Javascript</span>{" "}
                  <span className="text-gray-600">33.7%</span>
                </div>
                <div>
                  <span className="text-gray-300">●</span>
                  <span className="font-bold mx-2">Other</span>{" "}
                  <span className="text-gray-600">0.8%</span>
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
      <div className="text-center">
        <Button
          color={theme.colorScheme === 'dark' ? "gray" : "dark"} 
          radius="xl" 
          component="a"
          target="_blank"
          rel="author external noreferrer"
          href="https://github.com/yamashin01"
        >
          View on Github
        </Button>
      </div>
    </div>
  );
};
