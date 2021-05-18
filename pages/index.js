import Head from "next/head";
import ViewHome from "views/home";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        description={seo.description}/>
      <ViewHome />
    </>
  );
}

const seo = {
  description: "Hi! I'm Tomasz but you can call me kieu(~q). Front-End development is my thing so feel free to contact me!"
}