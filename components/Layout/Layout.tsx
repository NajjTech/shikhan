import Head from "next/head";
import React, { Fragment } from "react";
import Header from "../Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Head>
        <title>শিখন</title>
        <meta name="description" content="Generated by create Shikhaan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        {children}
      </div>
    </Fragment>
  );
};

export default Layout;