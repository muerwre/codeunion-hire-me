import type { AppProps } from "next/app";
import { StoreProvider } from "~/lib/store";
import { useRef } from "react";
import { Store } from "~/lib/store";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useRef(new Store()).current;

  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
