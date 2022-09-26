import { Button, Title, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import React, { FC } from "react";
import twitterIcon from "public/myImage.jpeg";
import { TwitterType } from "src/types/types";
import format from "date-fns/format";

export const Twitter: FC<TwitterType> = (props) => {
  const theme = useMantineTheme();
  const { profile, tweets } = props;

  return (
    <div className="w-full">
      <div className="py-4">
        <Title>Twitter</Title>
      </div>
      <div className="bg-gray-100 h-px rounded-full mb-8" />
      <div>
        {tweets.map((tweet, index) => {
          return index < 3 ? (
            <div key={tweet.id} className="mb-8 flex">
              <div className="m-2">
                <Image
                  src={twitterIcon}
                  alt="twitter-icon"
                  width={100}
                  height={100}
                  className="items-center rounded-full"
                />
              </div>
              <div>
                <div className="mr-2">{profile.name}</div>
                <div className="text-xs text-gray-600 align-middle">
                  {`@${profile.username}`}
                </div>
                <p className="text-gray-600 my-2 text-sm whitespace-pre-wrap">
                  {tweet.text}
                </p>
                <p className="text-sm text-right text-gray-500">{format(new Date(tweet.created_at), "yyyy.MM.dd")}</p>
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
          href="https://twitter.com/yamashin0413"
        >
          View on Twitter
        </Button>
      </div>
    </div>
  );
};
