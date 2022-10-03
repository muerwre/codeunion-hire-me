import React, { FC } from "react";
import InfiniteScroll from "react-infinite-scroller";

import { useSearchQuery } from "~/modules/search/hooks/useSearchQuery";
import { useSearch } from "~/modules/search/context/SearchProvider";
import { SearchItem } from "~/modules/search/components/SearchItem";

import styles from "./styles.module.scss";

interface SearchResultsProps {}

const SearchResults: FC<SearchResultsProps> = () => {
  const { search } = useSearch();
  const { items, loadMore, hasMore, isLoading } = useSearchQuery(search);

  if (isLoading) {
    // TODO: draw loader here
  }

  return (
    <InfiniteScroll
      loadMore={loadMore}
      hasMore={hasMore}
      className={styles.grid}
    >
      {items.map((it) => (
        <SearchItem key={it.id} item={it} />
      ))}
    </InfiniteScroll>
  );
};

export { SearchResults };
