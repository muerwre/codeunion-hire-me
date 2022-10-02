import React, { createContext, FC, PropsWithChildren, useContext } from "react";
import { Store } from "./Store";

interface StoreProviderProps extends PropsWithChildren {
  store: Store;
}

const StoreContext = createContext(new Store());

const StoreProvider: FC<StoreProviderProps> = ({ store, children }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);

export { StoreProvider };
