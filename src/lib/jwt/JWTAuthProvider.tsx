import React, { createContext, FC, PropsWithChildren, useContext } from "react";

interface JWTAuthProviderProps extends PropsWithChildren {
  value: {
    access: string;
    refresh: string;
    setTokens: (access: string, refresh: string) => void;
    logout: () => void;
  };
}

const JWTAuthContext = createContext<JWTAuthProviderProps["value"]>({
  access: "",
  refresh: "",
  setTokens: () => {},
  logout: () => {},
});

const JWTAuthProvider: FC<JWTAuthProviderProps> = ({ value, children }) => (
  <JWTAuthContext.Provider value={value}>{children}</JWTAuthContext.Provider>
);

export const useAuth = () => useContext(JWTAuthContext);

export { JWTAuthProvider };
