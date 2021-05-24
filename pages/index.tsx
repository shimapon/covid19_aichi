import React from "react";
import type { NextPage } from "next";

import Head from "next/head";

import Button from "../components/Button";

import { GetCovidData } from "../lib/posts";

const Index: NextPage = () => {
  console.log(GetCovidData());

  // // 副作用フック
  // React.useEffect(() => {
  //   // mount時
  //   alert("mouted");
  //   // 副作用フック（アンマウント時）
  //   return () => alert("cleanup");
  // }, []);

  // // 副作用フック（依存の変更時）
  // React.useEffect(()=>{
  //     alert('counted')
  // },[count])

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>test</h1>
      <Button label="ボタンだよ" onClick={() => alert("押した")} />
    </>
  );
};

export default Index;
