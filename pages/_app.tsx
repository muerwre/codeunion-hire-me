import type { AppProps } from "next/app";
import { StoreProvider } from "~/lib/store";
import { useRef } from "react";
import { Store } from "~/lib/store";

import "../styles/globals.scss";
import { JWTAuthProvider } from "~/lib/jwt";
import { APIProvider } from "~/api/rest";
import { MainLayout } from "~/layouts/MainLayout";
import Head from "next/head";
import { ModalProvider } from "~/common/modal/ModalProvider";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useRef(new Store()).current;

  return (
    <StoreProvider store={store}>
      <JWTAuthProvider auth={store.auth}>
        <APIProvider tokens={store.auth} logout={store.auth.logout}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=0"
            />
          </Head>

          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </APIProvider>
      </JWTAuthProvider>
    </StoreProvider>
  );
}

export default MyApp;
