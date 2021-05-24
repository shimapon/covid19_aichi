import React from "react";
import type { NextPage } from "next";

import Head from "next/head";

import { GetCovidData } from "../lib/posts";
import Graph from "../components/Graph";

const Index: NextPage = () => {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    GetCovidData().then((r) => {
      setData(r.itemList.reverse());
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

      {data ? <Graph coviddata={data} /> : <></>}
    </>
  );
};

export default Index;
