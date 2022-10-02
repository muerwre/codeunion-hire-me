import type { AppProps } from "next/app";
import { StoreProvider } from "~/lib/store";
import { useRef } from "react";
import { Store } from "~/lib/store";

import "../styles/globals.scss";
import { JWTAuthProvider } from "~/lib/jwt";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useRef(new Store()).current;

  return (
    <StoreProvider store={store}>
      <JWTAuthProvider value={store.auth}>
        <Component {...pageProps} />
      </JWTAuthProvider>
    </StoreProvider>
  );
}

export default MyApp;
