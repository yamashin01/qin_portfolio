import { gql, useQuery } from "@apollo/client";
import { Button, Progress, Title, useMantineTheme } from "@mantine/core";
import { IconGitFork } from "@tabler/icons";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { GitHubLangType, GitHubRepoType } from "src/types/types";
import { GET_REPO_QUERY } from "src/utils/query";

export const Github = () => {
  const theme = useMantineTheme();

  const {data, loading, error } = useQuery(GET_REPO_QUERY);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p style={{color: 'red'}}>{error.message}</p>;

  const repositoryObjList = data.user.repositories.edges.map((edge: any) => {
    const repositoryBasicData: GitHubRepoType = edge.node;

    // get percentage of lanugage size
    const languageDataList: GitHubLangType[] = repositoryBasicData.languages.edges.map((language: GitHubLangType) => {
      const percentage = language.size / repositoryBasicData.languages.totalSize * 100;
      return {...language, percentage: percentage};
    });

    // get langAreaList for set Progress of Mantine
    const langAreaList = languageDataList.map((language: GitHubLangType) => {
      const value = language.percentage;
      const color = language.node.color;
      return {value: value, color: color};
    });
    return {basicData: repositoryBasicData, languageDataList: languageDataList, langAreaList: langAreaList};
  });

  return (
    <div className="w-full">
      <div className="py-4">
        <Title>GitHub</Title>
      </div>
      <div className="bg-gray-100 h-px rounded-full mb-8" />
      <div>
        {repositoryObjList.map((repositoryObj: any) => {
          return( 
            <div key={repositoryObj.basicData.id} className="mb-8">
              <div className="my-2">
                <a href={`https://github.com/yamashin01/${repositoryObj.basicData.name}`} target="_blank">
                  {repositoryObj.basicData.name}
                </a>
              </div>
              <p className="text-gray-600 my-2 text-sm">
                {repositoryObj.basicData.description}
              </p>
              <div className="mb-2 align-middle">
                <FaRegStar />
                <span className="ml-2 mr-4 text-xs items-center">{repositoryObj.basicData.stargazerCount}</span>
                <IconGitFork />
                <span className="ml-2 text-xs items-center">{repositoryObj.basicData.forkCount}</span>
              </div>
              <div className="mb-2">
                <Progress sections= {repositoryObj.langAreaList} />
              </div>
              <div className="flex my-2">
                {repositoryObj.languageDataList.map((language: GitHubLangType) => {
                    return (
                      <div key={language.node.id}>
                        <div style={{backgroundColor: language.node.color}}></div>
                      </div>
                    );
                  })}
              </div>
              <div className="flex text-xs justify-between">
                {repositoryObj.languageDataList.map((language: GitHubLangType) => {
                  return (
                    <div key={language.node.id}>
                      <span style={{color: language.node.color}}>●</span>
                      <span className="font-bold mx-2">{language.node.name}</span>{" "}
                      <span className="text-gray-600">{language.percentage.toPrecision(2)}%</span>
                    </div>
                  );
                })}
              </div>
            </div>);
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
