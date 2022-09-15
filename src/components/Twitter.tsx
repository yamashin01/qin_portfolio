import { Button, Title, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import React, { FC } from "react";
import twitterIcon from "public/myImage.jpeg";
import { TwitterType } from "src/types/types";

export const Twitter: FC<TwitterType> = (props) => {
  const theme = useMantineTheme();
  const { profile, tweets } = props;

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
                <div className="flex">
                  <div className="mr-2">{profile.name}</div>
                  <div className="text-xs text-gray-600 align-middle">
                    {`@${profile.username}`}
                  </div>
                </div>
                <p className="text-gray-600 my-2 text-sm whitespace-pre-wrap">
                  {tweet.text}
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
