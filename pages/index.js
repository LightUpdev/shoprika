import Head from "next/head";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/Navbar";
import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const splashScreen = () => {};
  return (
    <>
      <Head>
        <title>Shoprika</title>
        <meta name="description" content="Shoprika fast and easy services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <div className="text-center align-items-center">
        <h2 className="font-color fw-bold">Why Choose Us?</h2>
        <p className="fw-bold my-3">
          Powerful features to elevate your online store
        </p>
      </div>
      <Cards />
      <Hero />
      <Hero2 />
      <h5 className="text-center mt-5 fw-bold">
        Shoprika would be launched soon!!
      </h5>
      <p className="text-center mt-3 mb-5">
        Enter your E-mail so you will be notified as soon as we launch
      </p>
      <Form />
      <Footer />
    </>
  );
}
