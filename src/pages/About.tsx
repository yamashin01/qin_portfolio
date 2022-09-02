import { Title } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { client } from "src/libs/client";
import { AboutType } from "src/types/types";

type Props = MicroCMSListResponse<AboutType>;

const About:NextPage<Props> = (props) => {
  return (
    <>
      <div className="py-4">
        <Title>About</Title>
      </div>
      <div className="bg-gray-100 h-px rounded-full mb-8" />
      <div>
        <div className="mb-4">
          <Title order={2}>{props.contents[0].name}</Title>
        </div>
        <div className="text-center mb-4">
          {
            props.contents[0].image ?
              <Image
              src={props.contents[0].image?.url}
              alt="profile_image"
              width={360}
              height={240}
              /> : null
          }
        </div>
        <div>{props.contents[0].profile}</div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<AboutType>({ endpoint: "about" });
  return {
    props: data,
  };
};


export default About;
