import Head from "next/head";
import { GlobalStyles } from "@/styles/Global.styles";
import NProgress from "nprogress";
import { Router } from "next/router";

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ConnectApp</title>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
