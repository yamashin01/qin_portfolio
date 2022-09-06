import { Title } from "@mantine/core";
import { NextPage } from "next";
import Image from "next/image";
import myImage from "public/myImage.jpeg";
import React from "react";

const About:NextPage = () => {
  return (
    <>
      <div className="py-4">
        <Title>About</Title>
      </div>
      <div className="bg-gray-100 h-px rounded-full mb-8" />
      <div>
        <div className="mb-4">
          <Title order={2}>ヤマ</Title>
        </div>
        <div className="text-center mb-4">
            <Image
            src={myImage}
            alt="profile_image"
            width={360}
            height={240}
            />
        </div>
        <div>
          <p>システム系エンジニアをしながら、Web系・医療系技術を身につけるために勉強してます。
オンラインコミュニティ「シンギュラリティ・ラボ」や「IT Kingdom」を通じて、エンジニアがどんどん活躍できる世の中を作っていきたいです。 
フロントエンドやインフラ技術を中心に、学んだことを発信していきます。診療情報管理士。</p>  
        </div>
      </div>
    </>
  );
};

export default About;
