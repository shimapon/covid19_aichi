import React from "react";
import type { NextPage } from "next";

import Head from "next/head";

import Button from "../components/Button";

import { GetCovidData } from "../lib/posts";

const Index: NextPage = () => {
  const [data, setData] = React.useState<Object>(null);

  React.useEffect(() => {
    GetCovidData().then((r) => {
      setData(r.itemList);
    });
  }, []);

  console.log(data);

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>愛知県の陽性者</h1>

      {data
        ? Object.keys(data).map((key) => (
            <p>
              日付：{data[key].date}
              <br></br>
              累計陽性者：{data[key].npatients}
            </p>
          ))
        : ""}
    </>
  );
};

export default Index;
