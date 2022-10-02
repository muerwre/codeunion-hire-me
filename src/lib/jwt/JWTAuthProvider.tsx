import { observer } from "mobx-react-lite";
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";

interface JWTAuthProviderProps extends PropsWithChildren {
  auth: {
    access: string;
    refresh: string;
    setTokens: (access: string, refresh: string) => void;
    logout: () => void;
  };
}

type JWTContextValue = JWTAuthProviderProps["auth"] & {
  isUser: boolean;
};

const JWTAuthContext = createContext<JWTContextValue>({
  access: "",
  refresh: "",
  setTokens: () => {},
  logout: () => {},
  isUser: false,
});

const JWTAuthProvider: FC<JWTAuthProviderProps> = observer(
  ({ auth: value, children }) => {
    const computed = useMemo<JWTContextValue>(
      () => ({ ...value, isUser: !!value.access }),
      [value]
    );

    return (
      <JWTAuthContext.Provider value={computed}>
        {children}
      </JWTAuthContext.Provider>
    );
  }
);

export const useAuth = () => useContext(JWTAuthContext);

export { JWTAuthProvider };
