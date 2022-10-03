import React, { FC } from "react";
import { Restaurant } from "~/model/Restaurant";

interface SearchItemProps {
  item: Restaurant;
}

// TODO: actually, draw item here
const SearchItem: FC<SearchItemProps> = ({ item }) => <div>{item.title}</div>;

export { SearchItem };
