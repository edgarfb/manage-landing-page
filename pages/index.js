import Head from "next/head";
import AboutManage from "../components/about-manage";
import Stats from "../components/stats";
import GetStarted from "../components/get-started";
import SimplifyBox from "../components/simplefy-box";
import Slider from "../components/slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manage landing page challenge</title>
        <meta
          name="description"
          content="Frontend Mentor Challenge. Generated by create next app"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stats />
      <GetStarted />
      <AboutManage />
      <Slider />
      <SimplifyBox />
    </>
  );
}
