import { Table, Text, Title } from "@mantine/core";
import { NextPage } from "next";
import Image from "next/image";
import myImage from "public/my_image.jpg";
import hobbyKitadake from "public/kitadake.jpg";
import hobbyDiving from "public/my_diving_image.jpg";
import hobbyMahjong from "public/mahjong.jpg";
import React from "react";

const About:NextPage = () => {
  const jobElements = [
    { period: "2009年~2013年", work: "検査システムの研究", detail: "電子顕微鏡により撮像された様々な半導体パターンを高精度に計測するための画像処理技術の開発、改良", skill: "C言語、画像処理、データ解析、特許・研究報告書の作成スキル、プレゼンスキル" },
    { period: "2014年~2015年", work: "Webアプリの運用・評価", detail: "ソーシャルネットワークアプリの補修・利用状況のデータ解析", skill: "VBA" },
    { period: "2015年~2016年", work: "金融システムの保守・改良", detail: "金融システムのバグ修正や新しいシステムの導入作業", skill: "C言語・SQL・Linux" },
    { period: "2017年~2018年", work: "電力需給システムの最適化プログラムの評価・改良", detail: "日本全国の電力供給量を解析し、最適化を行うシステムの評価・改良業務", skill: "Fortran" },
    { period: "2019年", work: "新人SEのプログラミング研修", detail: "大手企業の新入社員向けにSEになるためのプログラミング講師", skill: "C言語・Java・Eclipse" },
    { period: "2019年~2020年", work: "ネットワークシステムの設計・開発・テスト", detail: "ウォーターフォール型の中規模システム設計(基本設計・詳細設計)・開発（コーディング）・テスト(単体・結合・機能・システムテスト）", skill: "C++・PostgresSQL・Linux・SVN・シェルスクリプト・PlantUML" },
    { period: "2020年~2021年", work: "画像処理プログラム開発・FPGA回路設計", detail: "Qt及びOpenCVを用いた研究用画像処理ソフトのUI・解析システム開発・VerilogとC++によるFPGAの回路設計及び解析", skill: "C++・Qt・Linux・OpenCV・Python・Verilog・Gitlab" },
    { period: "2022年", work: "人工衛星のシミュレーションシステム開発", detail: "既存のシミュレーションソフトを用いて人工衛星の周回軌道を解析し、結果を出力するシステムの開発", skill: "C++・WSL2・Docker・GoogleTest・CI/CD・cmake" },
  ];

  const rows = jobElements.map((element) => (
    <tr key={element.period}>
      <td>{element.period}</td>
      <td>{element.work}</td>
      <td>{element.detail}</td>
      <td>{element.skill}</td>
    </tr>
  ));

  return (
    <>
      <div className="py-4">
        <Title>About</Title>
      </div>
      <div className="bg-gray-100 h-px rounded-full mb-8" />
      <div>
        <div className="mb-8">
          <Title order={2}>ヤマ</Title>
        </div>
        <Text size="xl" weight={700}>紹介</Text>
        <div className="md:flex justify-between flex-row-reverse mb-8">
          <div className="text-center mb-8 p-4 md:w-1/3">
              <Image
              src={myImage}
              alt="profile_image"
              width={360}
              height={240}
              />
          </div>
          <div className="whitespace-normal text-lg md:w-2/3">
            <p>システムエンジニアとして働きながら、Web系エンジニアとしての技術を学習しています。<br></br>
  将来的にフルスタックエンジニアとしてインフラ周りからフロントエンド、バックエンドまで幅広い知見を身につけたいと考えています。現在、フロントエンドやインフラ技術を中心に学びつつ、医療分野のDX化をサポートしています。</p>  
          </div>
        </div>
        <div className="mb-8">
          <Text size="xl" weight={700}>経歴</Text>
          <Table striped>
            <thead>
              <tr>
                <th>時期</th>
                <th>業務</th>
                <th>詳細</th>
                <th>活用した技術</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </div>

        <div className="mb-8">
          <Text size="xl" weight={700}>現在の活動</Text>
          <div>
            <Text size="xl" weight={500}>合同会社benext 代表社員</Text>
            <Text size="xl" weight={500}>未来技術推進協会 理事</Text>
            <Text size="xl" weight={500}>株式会社GoMeTo 役員</Text>
          </div>

        </div>
        <div className="mb-8">
          <Text size="xl" weight={700}>資格</Text>
          <li>システムアドミニストレータ</li>
          <li>診療情報管理士</li>
        </div>
        <div className="mb-8">
          <Text size="xl" weight={700}>趣味</Text>
          <p className="whitespace-normal text-lg">旅行（国内・海外問わず）・登山・サイクリング・ダイビング・麻雀・Youtube・読書（小説・ビジネス書・漫画）・ゲーム（バイオハザード4のVRゲームにハマり中）</p>
          <div className="md:flex text-center mb-8 p-4 justify-between">
              <Image
              src={hobbyKitadake}
              alt="hobby_image1"
              width={360}
              height={240}
              />
              <Image
              src={hobbyDiving}
              alt="hobby_image2"
              width={360}
              height={240}
              />
              <Image
              src={hobbyMahjong}
              alt="hobby_image3"
              width={360}
              height={240}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
