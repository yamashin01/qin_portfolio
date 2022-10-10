import { useQuery } from "@apollo/client";
import { Button, Progress, Title, useMantineTheme } from "@mantine/core";
import { IconGitFork } from "@tabler/icons";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { GitHubLangType, GitHubType } from "src/types/types";
import { GET_REPO_QUERY } from "src/utils/query";

export const Github = () => {
  const theme = useMantineTheme();

  const { data, loading, error } = useQuery<GitHubType>(GET_REPO_QUERY);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p style={{color: 'red'}}>{error.message}</p>;
  if (!data) return <p>GitHub repository was not found.</p>;

  const repositoryObjList = data.user.repositories.edges.map((edge: any) => {
    const repositoryBasicData = edge.node;

    // get percentage of lanugage size
    const languageDataList: GitHubLangType[] = repositoryBasicData.languages.edges.map((language: GitHubLangType) => {
      const percentage = Math.round((language.size / repositoryBasicData.languages.totalSize )* 1000)/10;
      return {...language, percentage: percentage};
    });

    // get langAreaList for set Progress of Mantine
    const langAreaList = languageDataList.map((language: GitHubLangType) => {
      const value = language.percentage;
      const color = language.node.color;
      return {value: value, color: color};
    });
    return {basicData: repositoryBasicData, languageDataList, langAreaList};
  });

  return (
    <div className="w-full">
      <div className="py-4">
        <Title>GitHub</Title>
      </div>
      <div className="bg-gray-100 h-px rounded-full mb-8" />
      <div>
        {repositoryObjList.map((repositoryObj: any) => ( 
          <div key={repositoryObj.basicData.id} className="mb-8">
            <div className="my-2">
              <a href={`https://github.com/yamashin01/${repositoryObj.basicData.name}`} rel="noreferrer" target="_blank" className="text-blue-800 no-underline">
                {repositoryObj.basicData.name}
              </a>
            </div>
            <p className="text-gray-600 my-2 text-sm">
              {repositoryObj.basicData.description}
            </p>
            <div className="mb-2 align-middle flex items-center">
              <FaRegStar />
              <span className="ml-2 mr-4 text-sm items-center">{repositoryObj.basicData.stargazerCount}</span>
              <IconGitFork />
              <span className="ml-2 text-sm items-center">{repositoryObj.basicData.forkCount}</span>
            </div>
            <div className="mb-2">
              <Progress sections={repositoryObj.langAreaList} />
            </div>
            <div className="flex text-xs">
              {repositoryObj.languageDataList.map((language: GitHubLangType) => (
                <div key={language.node.id}>
                  <span style={{color: language.node.color}}>●</span>
                  <span className="font-bold mx-2">{language.node.name}</span>{" "}
                  <span className="text-gray-600 mr-4">{language.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
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
          View on GitHub
        </Button>
      </div>
    </div>
  );
};
