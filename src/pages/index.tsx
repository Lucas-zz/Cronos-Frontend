import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Welcome from "./components/Welcome";
import Community from "./components/Community";
import Hub from "./components/Hub";

export default function Home() {
  return (
    <>
      <Head>
        <title>CRONOS</title>
        <meta name="description" content="CRONOS Landing Page" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/assets/yuan.png" />
      </Head>
      <Header />
      <main className="min-h-xl max-w-screen-xl m-auto flex-col justify-center items-start">
        <Welcome />
        <Community />
        <Hub />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
