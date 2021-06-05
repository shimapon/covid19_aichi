import React from "react";
import type { NextPage } from "next";

import Head from "next/head";

import { GetCovidData } from "../lib/posts";
import Graph from "../components/Graph";

import ReactLoading from "react-loading";

const Styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: "#174a5c",
    color: "white",
    textAlign: "center",
    width: "100%",
  },
  header: {
    backgroundColor: "#174a5c",
    color: "white",
    textAlign: "center",
    width: "100%",
  },
  main: {
    margin: "2em",
  },
};

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
      <header style={Styles.header}>
        <h1>愛知県の陽性者</h1>
      </header>

      <main style={Styles.main}>
        {data ? (
          <Graph coviddata={data} />
        ) : (
          <ReactLoading type="cylon" color="#fffff" />
        )}
      </main>

      <footer style={Styles.footer}>
        <ul>
          <li>
            <a href="https://github.com/shimapon/covid19_aichi/">リポジトリ</a>
          </li>
          <li>
            <a href="https://corona.go.jp/dashboard/">データ元</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Index;
