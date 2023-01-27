import Head from "next/head";
import Header from "./components/Header";
import Image from "next/image";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Welcome from "./components/Welcome";
import resourceBg from "public/assets/yuan.png";

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
        <link rel="icon" href="/assets/icosahedron.png" />
      </Head>
      <Header />
      <main className="min-h-xl max-w-screen-xl m-auto flex-col justify-center items-start">
        <Welcome />
        <Image src={resourceBg} className='relative z-10 py-36 m-auto' alt="Testing Image from Next" />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
