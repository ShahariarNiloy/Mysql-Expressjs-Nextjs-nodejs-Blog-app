import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
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
