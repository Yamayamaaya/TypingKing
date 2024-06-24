import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { initializeFirebaseApp } from "@src/lib/firebase/firebase";
import { AuthProvider } from "@src/feature/auth/provider/AuthProvider";
import { Header } from "@src/components/Header";
import { Footer } from "@src/components/Footer";
import { theme } from "@src/lib/chakra/theme";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { SoundProvider } from "@src/feature/sound/soundProvider";

initializeFirebaseApp();
function MyApp({ Component, pageProps }: AppProps) {
  const { pathname, asPath } = useRouter();

  const [viewportHeight, setViewportHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      const height = window.innerHeight + "px";
      setViewportHeight(height);
    };

    window.addEventListener("resize", updateHeight);
    updateHeight(); // 初期設定

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      <Head>
        <title>タイピングキング</title>
        <link rel="icon" href="/favicon.ico " />
      </Head>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <SoundProvider>
            <div
              className="flex flex-col min-h-screen bg-gradient-to-br from-pink-500 to-purple-600"
              style={{ minHeight: viewportHeight, height: "100%" }}
            >
              <Header />
              <div className="grow">
                <Component {...pageProps} key={asPath} />
              </div>
              <Footer />
            </div>
          </SoundProvider>
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
