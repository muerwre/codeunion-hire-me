import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface SearchProviderProps extends PropsWithChildren {}

const SearchContext = createContext({
  search: "",
  setSearch: (val: string) => {},
});

const SearchProvider: FC<SearchProviderProps> = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);

export { SearchProvider };
