import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import "../styles/globals.scss";
import "react-quill/dist/quill.snow.css";

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();

  return (
    <>
      {router.pathname.includes("/login") ||
      router.pathname.includes("/register") ? (
        <div className="app">
          <div className="container">
            <Component {...pageProps} />
          </div>
        </div>
      ) : (
        <div className="app">
          <div className="container">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;
